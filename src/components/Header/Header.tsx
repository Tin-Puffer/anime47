import { Col, Row } from 'antd';
import 'antd/dist/antd.less';
import './headerStyle.scss';
import { createSearchParams, Link, useNavigate, useSearchParams } from 'react-router-dom';
import { useMemo } from 'react';
import { error } from 'console';
export default function () {
    const navigate = useNavigate();
    const [searchParams, setSearchParams] = useSearchParams();

    // <Col className="m2">Harem/ hài hước</Col>
    // <Col className="m2">Đời thường/ học đường</Col>
    // <Col className="m2">Lãng mạng/ học đường</Col>
    // <Col className="m2">Ecchi/ harem</Col>
    // <Col className="m2">Học đường/Ecchi</Col>
    interface grenResType{
        type1:string,
        type2:string,
    }
    const grenRes = useMemo<grenResType[]>(() => {
        return [
            {
                type1: 'Harem',
                type2: 'Hài Hước',
            },
            {
                type1: 'Đời Thường',
                type2: 'Học Đường',
            },
            {
                type1: 'Lãng Mạng',
                type2: 'Học Đường',
            },
            {
                type1: 'Ecchi',
                type2: 'Harem',
            },
            {
                type1: 'Học Đường',
                type2: 'Ecchi',
            },
        ];
    }, []);
    const years = useMemo<string[]>(() => {
        return ["2015","2016","2017","2018","2019","2020","2021","2022"]
    },[])

    return (
        <div className="header">
            <div className="top-line"></div>
            <Row className="container">
                <Col className="item" xs={24} md={8} lg={6}>
                    <div className="header-logo">
                        <Link className="logo" to={'/'}></Link>
                    </div>
                </Col>
                <Col className="item" xs={24} md={16} lg={9}>
                    <div className="widget_search">
                        <input type={'text'} placeholder={' Tìm: tên anime ...'}></input>
                    </div>
                </Col>
                <Col className="item" xs={24} md={24} lg={9}>
                    <div className="widget_user_header">
                        <Link to={'/register'} className="button-register"></Link>
                        <Link to={'/login'} className="button-login"></Link>
                        <Link to={'/login'} className="button-login-fb"></Link>
                    </div>
                </Col>
            </Row>
            <div className="nav">
                <div className="nav-search">
                    <Row className="mega-menu-1">
                        <Link to={'/'}>
                            <Col className="item-search">trang chủ</Col>
                        </Link>
                        <Col className="item-search">
                            thể loại
                            <Row className="mega-menu-2 type">
                                <Col className="m2" onClick={(e) => {}}>
                                    b1
                                </Col>
                                <Col className="m2">b2</Col>
                                <Col className="m2">b3</Col>
                                <Col className="m2">b4</Col>
                                <Col className="m2">b5</Col>
                                <Col className="m2">b6</Col>
                                <Col className="m2">b7</Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            trạng thái
                            <Row className="mega-menu-2 status">
                                <Col
                                    // title="unfinish"
                                    data-status="unfinish"
                                    className="m2"
                                    onClick={(e) =>
                                        navigate({
                                            pathname: '/filter',
                                            search: createSearchParams({
                                                status: `${e.currentTarget.getAttribute('data-status')}`,
                                            }).toString(),
                                        })
                                    }
                                >
                                    Đang tiến hành
                                </Col>
                                <Col
                                    data-status="finish"
                                    className="m2"
                                    onClick={(e) =>
                                        navigate({
                                            pathname: '/filter',

                                            search: createSearchParams({
                                                status: `${e.currentTarget.getAttribute('data-status')}`,
                                            }).toString(),
                                        })
                                    }
                                >
                                    Đã hoàn thành
                                </Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            xem nhiều
                            <Row className="mega-menu-2 viewCount">
                                <Col className="m2 disible">Ngày</Col>
                                <Col className="m2 disible">Tuần</Col>
                                <Col className="m2 disible">Tháng</Col>
                                <Col className="m2 disible">Năm</Col>
                                <Col
                                    className="m2"
                                    onClick={() =>
                                        navigate({
                                            pathname: '/filter',
                                            search: createSearchParams({
                                                sortBy: 'view',
                                            }).toString(),
                                        })
                                    }
                                >
                                    Tất Cả
                                </Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            bình luận nhiều
                            <Row className="mega-menu-2 commentCount">
                                <Col className="m2 disible">Mùa Vày</Col>
                                <Col className="m2 disible">Mùa Trước</Col>
                                <Col className="m2 disible">Năm Này</Col>
                                <Col className="m2 disible">Năm Trước</Col>
                                <Col className="m2 disible">Tất Cả</Col>
                            </Row>
                        </Col>
                        <Col className="item-search ">
                            lưỡng long nhất thể
                            <Row className="mega-menu-2 type-2">
                                {grenRes.map((e, i) => {
                                    return (
                                        <Col
                                            className="m2"
                                            key={i}
                                            onClick={() =>
                                                navigate({
                                                    pathname: '/filter',
                                                    search: createSearchParams({
                                                        grenre: [e.type1, e.type2],
                                                    }).toString(),
                                                })
                                            }
                                        >{e.type1}/{e.type2}</Col>
                                    );
                                })}
                            </Row>
                        </Col>
                        <Col className="item-search">
                            năm
                            <Row className="mega-menu-2">
                                {years.map((e, i) => {
                                    return (
                                        <Col
                                            className="m2"
                                            key={i}
                                            onClick={() =>
                                                navigate({
                                                    pathname: '/filter',
                                                    search: createSearchParams({
                                                        year: [e],
                                                    }).toString(),
                                                })
                                            }
                                        >{e}</Col>
                                    );
                                })}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
