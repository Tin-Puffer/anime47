import { apiMock_10 } from '../../api/axiosMock_10';
import { Col, Row } from 'antd';
import { Tabs } from '../../components/MenuSelect';
import { useEffect, useMemo, useState } from 'react';
import { deltailAnimme, viewUpdate } from '../../model';
import { Link, useNavigate } from 'react-router-dom';
import { CloseOutlined } from '@ant-design/icons';
import { useAppDispatch } from '../../app/hooks';
import { autheMCAction } from '../auth/authMCSlipe';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import './homeStyle.scss';
export function TitleHome({ title }: { title: string }) {
    return <h3 className="title-home">{title}</h3>;
}
export function GridFilmItem({ item, cabinet }: { item: viewUpdate; cabinet: boolean }) {
    const nav = useNavigate();
    const dispatch = useAppDispatch();
    const [coords, setCoords] = useState({ x: 0, y: 0 });
    const [isHide, setIsHide] = useState(false);

    const handleDelete = () => {
        console.log(item.id);
        dispatch(autheMCAction.DelteItemCabinet(item.id));
    };
    const handleMouseMove = (event: any) => {
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
            await apiMock_10.getMainView().then((res) => {
                setListUpdateAll(res.data);
            });
        })();
        (async () => {
            await apiMock_10.getGrenreView().then((res) => {
                setListGrenre(res.data);
            });
        })();
        (async () => {
            await apiMock_10.getManyView().then((res) => {
                setListManyView(res.data);
            });
        })();
    }, []);
    useEffect(() => {
        setListUpdate([...listUpdateALL].slice(20 * selectNewUpdate, 20 * (selectNewUpdate + 1)));
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
