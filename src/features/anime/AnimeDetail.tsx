import { Col, Row } from 'antd';
import './animeDetail.scss';

import { Comment } from '../../components/Comment';
import { createSearchParams, useNavigate, useParams } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { deltailAnimme, listSever } from '../../model/user';
import { animeList, carouselApi } from '../../api/anime';

export function AnimeDetail() {
    let { id } = useParams<string>();
    const ref = useRef<null | HTMLDivElement>(null);
    const refTrailer = useRef<null | HTMLDivElement>(null);
    
    const navigate = useNavigate();
    // console.log(id);
    const [detail, setDetail] = useState<deltailAnimme>();
    const [servetList, setServerList] = useState<listSever>();
    const handelChange = (item: string) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
        item !== id && navigate('/anime/' + item);
        // scroller.scrollTo();
    };
    const handleClickWatchMovie = () => {
        if (servetList !== undefined) {
            localStorage.setItem('Link', servetList.mainSV22[0].link);
            navigate('/watch?id=' + id + '&server=mainSV22&ep=01');
        }
    };

    useEffect(() => {
        (async () => {
            await animeList.getDetailList(id || '').then((res) => {
                if (res.data[0]) {
                    setServerList(res.data[0]);
                } else {
                    setServerList(undefined);
                }
            });
        })();
    }, [detail]);
    useEffect(() => {
        (async () => {
            await carouselApi.getDetail(id || '').then((res) => {
                setDetail(res.data[0]);
            });
        })();
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    }, [id]);
    return (
        <div className="anime-deital-container" ref={ref}>
            <Row>
                <Col ref={ref} id="top-content"></Col>
                <Col xs={12} md={12} lg={12} style={{ float: 'left' }} className="col-img">
                    <div className="movie-l-img">
                        <img alt={detail?.name} src={detail?.img} style={{ width: '100%', height: '100' }} />

                        <ul className="btn-block">
                            <li className="item">
                                <a id="btn-film-watch" className="btn btn-green btn" title="Đánh Dấu">
                                    {' '}
                                    Lưu lại
                                </a>
                            </li>
                            {detail?.trailer && (
                                <li className="item">
                                    <a
                                        id="btn-film-trailer"
                                        className="btn btn-primary btn-film-trailer"
                                        onClick={() => {
                                            refTrailer.current?.scrollIntoView({ behavior: 'smooth' });
                                        }}
                                    >
                                        Trailer
                                    </a>
                                </li>
                            )}
                            <li className="item">
                                {servetList ? (
                                    <a className="btn btn-red" onClick={handleClickWatchMovie}>
                                        Xem Anime
                                    </a>
                                ) : (
                                    <a className="btn btn-disible" onClick={handleClickWatchMovie}>
                                        Xem Anime
                                    </a>
                                )}
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col className="movie-detail" xs={12} md={12} lg={12}>
                    <h1 className="movie-title">
                        <span className="title-1" itemProp="name">
                            {detail?.name}
                        </span>
                        <span className="title-2" itemProp="name">
                            {detail?.description}
                        </span>
                        <span className="title-year"> {detail?.year}</span>
                    </h1>
                    <div className="movie-meta-info">
                        <dl className="movie-dl">
                            <dt className="movie-dt">Trạng thái: </dt>
                            <dd className="movie-dd imdb">
                                {detail?.ep}/{detail?.total}
                            </dd>
                            <br />
                            <dt className="movie-dt">Thể loại: </dt>
                            <dd className="movie-dd dd-cat">
                                {detail?.grenre.map((item, i) => (
                                    <a
                                        key={i}
                                        onClick={() => {
                                            navigate({
                                                pathname: '/filter',
                                                search: createSearchParams({
                                                    grenre: item,
                                                }).toString(),
                                            });
                                        }}
                                    >
                                        {item},{' '}
                                    </a>
                                ))}
                            </dd>
                            <br />
                            <dt className="movie-dt">Dạng Anime: </dt>
                            <dd className="movie-dd">
                                <a
                                    onClick={() => {
                                        navigate({
                                            pathname: '/filter',
                                            search: createSearchParams({
                                                type: `${detail?.type}`,
                                            }).toString(),
                                        });
                                    }}
                                >
                                    {detail?.type}
                                </a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Season: </dt>
                            <dd className="movie-dd">
                                <a
                                    onClick={() => {
                                        navigate({
                                            pathname: '/filter',
                                            search: createSearchParams({
                                                season: `${detail?.season}`,
                                                year: `${detail?.year}`,
                                            }).toString(),
                                        });
                                    }}
                                >
                                    {detail?.season}
                                    {' Năm '}
                                    {detail?.year}
                                </a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Năm: </dt>
                            <dd className="movie-dd">
                                <a
                                    onClick={() => {
                                        navigate({
                                            pathname: '/filter',
                                            search: createSearchParams({
                                                year: `${detail?.year}`,
                                            }).toString(),
                                        });
                                    }}
                                >
                                    {detail?.year}
                                </a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Lượt Xem: </dt>
                            <dd className="movie-dd">{detail?.view} Lượt xem</dd>
                            <br />
                        </dl>
                    </div>
                    <div className="box-rating">
                        <b>
                            Mới cập nhật:
                            <div className="block2 servers">
                                {servetList ? (
                                    <>
                                        <div className="server" data-type="watch">
                                            <div className="name">
                                                <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} />{' '}
                                                <span>mainSV22</span>{' '}
                                            </div>
                                            <div className="episodes">
                                                <ul>
                                                    {servetList?.mainSV22
                                                        ?.slice(-3)
                                                        .reverse()
                                                        .map((e, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => {
                                                                    localStorage.setItem('Link', e.link);
                                                                    navigate(
                                                                        '/watch?id=' +
                                                                            id +
                                                                            '&server=mainSV22&ep=' +
                                                                            e.ep,
                                                                    );
                                                                }}
                                                            >
                                                                <a className="new-update" title="15">
                                                                    {e.ep}
                                                                </a>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                        <div className="server" data-type="watch">
                                            <div className="name">
                                                <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} />{' '}
                                                <span>BackUpSV23</span>{' '}
                                            </div>
                                            <div className="episodes">
                                                <ul>
                                                    {servetList?.BackUpSV23?.slice(-3)
                                                        .reverse()
                                                        .map((e, i) => (
                                                            <li
                                                                key={i}
                                                                onClick={() => {
                                                                    localStorage.setItem('Link', e.link);

                                                                    navigate(
                                                                        '/watch?id=' +
                                                                            id +
                                                                            '&server=BackUpSV23&ep=' +
                                                                            e.ep,
                                                                    );
                                                                }}
                                                            >
                                                                <a className="new-update" title="15">
                                                                    {e.ep}
                                                                </a>
                                                            </li>
                                                        ))}
                                                </ul>
                                            </div>
                                        </div>
                                    </>
                                ) : (
                                    <h1 style={{ margin: 0, textAlign: 'center', color: 'gray' }}>NO SERVER</h1>
                                )}
                            </div>
                        </b>
                    </div>
                </Col>
            </Row>
            {detail?.chain[0] && (
                <div className="block-movie-content">
                    <table className="table-movie">
                        <tbody className="table-movie-body">
                            <tr className="table-title">
                                <td>Tên Phim</td>
                                <td>Thứ Tự</td>
                                <td>Năm</td>
                            </tr>

                            {detail.chain.map((item, i) => (
                                <tr
                                    onClick={() => handelChange(item.id)}
                                    className="list-table-link"
                                    key={i}
                                    style={item.id === detail.id ? { color: '#11e95d' } : { color: '#074450' }}
                                >
                                    <td>{item.name}</td>
                                    <td>{item.order}</td>
                                    <td>{item.year}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            <div className="block-movie-content">
                <h2 className="movie-detail-h2">Nội dung</h2>
                <div className="news-article">
                    <p>{detail?.content}</p>
                </div>
                {detail?.trailer && (
                    <div className="block-movie-content blockquate">
                        <h2 ref={refTrailer} className="movie-detail-h2">
                            TRAILER {detail?.name}
                        </h2>
                        <iframe width="100%" height="315" src={detail.trailer} frameBorder={0} allowFullScreen></iframe>
                    </div>
                )}
                <p className="">
                    Chúc các bạn{' '}
                    <a title="ANIME VIETSUB ONLINE | ANIME MÙA | ANIME HAY | ANIME TOP | XEM ANIME ONLINE | ANIME47.COM">
                        xem anime vietsub
                    </a>{' '}
                    vui vẻ tại ANIME47.COM
                </p>
            </div>
            <Comment></Comment>
        </div>
    );
}
