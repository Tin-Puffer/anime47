import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { carouselApi } from '../../api/anime';
import './homeStyle.scss';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';
import Skeleton from '../../components/Skeleton/Skeleton';
import { Tabs } from '../../components/MenuSelect';

import { useEffect, useMemo, useState } from 'react';
import { carouselItem, deltailAnimme, viewUpdate } from '../../model/user';
import { Link, useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../app/hooks';
import { autheMCAction } from '../auth/authMCSlipe';
function CustomSlide({ data }: { data: carouselItem }) {
    const nav = useNavigate();
    const Background = {
        backgroundImage: `url(${data.img})`,
    };
    return (
        <div className="">
            {!data ? (
                <div className="carousel-item">
                    <Skeleton
                        props={{
                            width: '100%',
                            height: '250px',
                        }}
                    ></Skeleton>
                </div>
            ) : (
                <div
                    className="carousel-item"
                    onClick={() => {
                        nav(`/anime/${data.id}`);
                    }}
                >
                    <div className="block-wrapper" style={Background}>
                        <div>
                            <div className="movie-title-1">{data.name.slice(0, 12)}...</div>
                        </div>
                        <div className="movie-status">
                            {data.ep}/{data.total}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="carousel-arrow-btn"
            style={{
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -2px -535px',
                }}
            ></span>
        </div>
    );
}
function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="carousel-arrow-btn"
            style={{
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -23px -535px',
                }}
            ></span>
        </div>
    );
}
export function CarouselHome() {
    const [listCarousel, setListCarousel] = useState<carouselItem[]>([]);
    useEffect(() => {
        (async () => {
            await carouselApi.getAll().then((res) => {
                setListCarousel(res);
            });
        })();
    }, []);
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',

        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 782,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
        afterChange: function (index: number) {},
    };
    // console.log(listCarousel);
    return (
        <Slider {...settings}>
            {listCarousel.map((e, i) => {
                return <CustomSlide data={e} key={i}></CustomSlide>;
            })}
        </Slider>
    );
}
export function TitleHome({ title }: { title: string }) {
    return <h3 className="title-home">{title}</h3>;
}
export function GridFilmItem({ item, cabinet }: { item: viewUpdate; cabinet: boolean }) {
    const nav = useNavigate();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHide, setIsHide] = useState(false);
    const dispatch = useAppDispatch();

    const handleDelete = () => {
        console.log(item.id);
        dispatch(autheMCAction.DelteItemCabinet(item.id));
    };
    const handleMouseMove = (event: any) => {
        // console.log(event);
        setCoords({
            x: event.clientX + 15,
            y: event.clientY + 15,
        });
    };
    return (
        <div className="ss">
            <a className="a">
                <div className="a1" onClick={() => nav('/anime/' + item.id)}>
                    {cabinet && (
                        <div className="container-close-bnt">
                            <CloseOutlined
                                className="close-bnt-cabinet"
                                onMouseOver={(e) => {
                                    e.stopPropagation();
                                }}
                                onClick={(e) => {
                                    e.stopPropagation();
                                    handleDelete();
                                }}
                            />
                        </div>
                    )}
                    <div
                        style={{ backgroundImage: `url(${item.img})` }}
                        className="a2"
                        onMouseMove={handleMouseMove}
                        onMouseOver={() => setIsHide(true)}
                        onMouseOut={() => setIsHide(false)}
                    ></div>
                    {isHide && (
                        <div
                            style={{
                                minWidth: '100px',
                                maxWidth: '400px',
                                backgroundColor: ' #090909c4',
                                border: ' 1px solid black',
                                textAlign: 'left',
                                position: 'fixed',
                                zIndex: 2,
                                left: coords.x,
                                top: coords.y,
                            }}
                        >
                            <p style={{ margin: 0, padding: '10px 5px' }}>{item.name}</p>
                        </div>
                    )}
                    <div className="a4">
                        <div className="a41">{item.name}</div>
                        <span className="a51">100</span>
                        <span className="a52">{item.view}</span>
                        <span className="a53">
                            {item.ep}/{item.total}
                        </span>
                    </div>
                </div>
            </a>
        </div>
    );
}
export function GridFilm({
    list,
    cabinet = false,
}: {
    list: viewUpdate[] | deltailAnimme[] | undefined;
    cabinet?: boolean;
}) {
    return (
        <div>
            <Row gutter={[8, 8]}>
                {list?.map((e, i) => (
                    <Col key={i} xs={8} md={6} className="col-grid-film">
                        <GridFilmItem cabinet={cabinet} item={e}></GridFilmItem>
                        {/* <div className="ss">
                            <a className="a">
                                <div className="a1">
                                    <div style={{ backgroundImage: `url(${e.img})` }} className="a2">
                                        <div className="a3"></div>
                                    </div>
                                    <div className="a4">
                                        <div className="a41">{e.name}</div>
                                        <span className="a51">100</span>
                                        <span className="a52">{e.view}</span>
                                        <span className="a53">
                                            {e.ep}/{e.total}
                                        </span>
                                    </div>
                                </div>
                            </a>
                        </div> */}
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export function Home() {
    const [selectNewUpdate, setSelectNewUpdate] = useState(0);
    const navigate = useNavigate();
    const [listUpdateALL, setListUpdateAll] = useState<viewUpdate[]>([]);
    const [listUpdate, setListUpdate] = useState<viewUpdate[]>([]);
    const [listGrenre, setListGrenre] = useState<viewUpdate[]>([]);
    const [listManyView, setListManyView] = useState<viewUpdate[]>([]);

    const tabNewUpdate = useMemo<string[]>(() => {
        return ['Tất cả', 'Mùa này', 'Mùa Trước', 'Bộ cũ'];
    }, []);
    useEffect(() => {
        (async () => {
            await carouselApi.getMainView().then((res) => {
                setListUpdateAll(res.data);
                // console.log(res.data);
            });
        })();
        (async () => {
            await carouselApi.getGrenreView().then((res) => {
                setListGrenre(res.data);
                // console.log(res.data);
            });
        })();
        (async () => {
            await carouselApi.getManyView().then((res) => {
                setListManyView(res.data);
                // console.log(res.data);
            });
        })();
    }, []);
    useEffect(() => {
        setListUpdate([...listUpdateALL].slice(20 * selectNewUpdate, 20 * (selectNewUpdate + 1)));
        // console.log('DataALL', listUpdateALL);
        // console.log('Data', listUpdate);
    }, [listUpdateALL, selectNewUpdate]);
    return (
        <div className="home-content">
            <Row>
                <Col lg={{ span: '7' }} md={{ span: '5' }}>
                    <TitleHome title="Mới Cập Nhật"></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px', marginBottom: '20px' }}
                >
                    <Tabs change={setSelectNewUpdate} tab={tabNewUpdate}></Tabs>
                </Col>
            </Row>
            <GridFilm list={listUpdate}></GridFilm>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <Link to={'/filter?&year=2022'} className="xem-them">
                    Xem thêm...
                </Link>
            </div>
            {/*  */}
            <Row>
                <Col lg={{ span: '24' }}>
                    <TitleHome title="Xuyên Không - Chuyển Kiếp"></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px' }}
                ></Col>
            </Row>
            <GridFilm list={listGrenre}></GridFilm>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <Link to={'/filter?grenre=Xuyên Không - Chuyển Kiếp'} className="xem-them">
                    Xem thêm...
                </Link>
            </div>
            {/*  */}
            <Row>
                <Col lg={{ span: '24' }}>
                    <TitleHome title="Nổi Bật"></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px' }}
                ></Col>
            </Row>
            <GridFilm list={listManyView}></GridFilm>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'end', marginBottom: '30px' }}>
                <Link to={'/filter?sortBy=view&year=2022'} className="xem-them">
                    Xem thêm...
                </Link>
            </div>
        </div>
    );
}
