import { Col, Row } from 'antd';
import 'antd/dist/antd.less';
import './headerStyle.scss';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useMemo, useRef, useState } from 'react';
import { keyboardKey } from '@testing-library/user-event';
import { deltailAnimme } from '../../model/user';
import { carouselApi } from '../../api/anime';
import { grenres } from '../../model/constans';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authAction } from '../../features/auth/authSlipe';

export default function () {
    const navigate = useNavigate();

    const dispatch = useAppDispatch();
    const [isHide, setIsHide] = useState(false);
    const [boxList, setBoxList] = useState<deltailAnimme[]>();
    const [inputValue, setInputvalue] = useState('');
    const user = useAppSelector((state) => state.auth.currentUser);
    let boxSrarchRef = useRef<HTMLDivElement>(null);
    console.log('RENDER');
    const handleLogout = () => {
        dispatch(authAction.logout());
    };
    const handleClick = (event: any) => {
        const { target } = event;
        if (!boxSrarchRef.current?.contains(target)) {
            setIsHide(false);
            document.removeEventListener('click', handleClick);
        }
    };
    const handleSearchBox = (event: keyboardKey) => {
        if (event.key === ' ') {
            setIsHide(true);
            document.addEventListener('click', handleClick);
        } else if (event.key === 'Enter') {
            setIsHide(false);
            setInputvalue('');
            document.removeEventListener('click', handleClick);
            navigate('/filter?name=' + inputValue.trim());
        }
    };
    useEffect(() => {
        if (inputValue === '') {
            setIsHide(false);
        }
    }, [inputValue]);
    useEffect(() => {
        carouselApi.getListSearch(inputValue).then((res) => {
            setBoxList(res.data);
        });
    }, [isHide]);
    interface grenResType {
        type1: string;
        type2: string;
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
        return ['2015', '2016', '2017', '2018', '2019', '2020', '2021', '2022'];
    }, []);

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
                        <input
                            type={'text'}
                            value={inputValue}
                            placeholder={' Tìm: tên anime ...'}
                            onKeyPress={handleSearchBox}
                            onChange={(e) => {
                                setInputvalue(e.target.value);
                                // console.log(inputValue)
                            }}
                        ></input>
                        {isHide && (
                            <div ref={boxSrarchRef} className="search-box">
                                {boxList?.map((item, i) => {
                                    return (
                                        <div
                                            className="view-item"
                                            key={i}
                                            onClick={() => {
                                                setIsHide(false);
                                                setInputvalue('');
                                                navigate('/anime/' + item.id);
                                            }}
                                        >
                                            <div
                                                className="thumb"
                                                style={{ backgroundImage: `url(${item.img})` }}
                                            ></div>
                                            <div className="ss-info">
                                                <p className="ss-title">{item.name}</p>
                                                <p>{item.description}</p>
                                                <p>
                                                    {item.ep}/{item.total}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                                <div className="ss-bottom">
                                    <p className="more-resoult">Enter để tìm kiếm</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
                <Col className="item" xs={24} md={24} lg={9}>
                    {user ? (
                        <div className="widget_user_header">
                            <div className=" btn-blue btn btn-small nonclick">
                                Xin chào, {user.name}
                                <ul className="dropdown-menu" role="menu">
                                    <li
                                        onClick={() => {
                                            navigate('/deltailaccount');
                                        }}
                                    >
                                        <span>Thông tin tài khoản</span>
                                    </li>

                                    <li className="divider"></li>
                                    <li>
                                        <span onClick={handleLogout}>Thoát</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn btn-red btn-small" onClick={() => navigate('/moviecabinet/' + user.id)}>
                                {' '}
                                Tủ phim
                            </div>
                        </div>
                    ) : (
                        <div className="widget_user_header">
                            <Link to={'/register'} className="button-register"></Link>
                            <Link to={'/login'} className="button-login"></Link>
                            <Link to={'/login'} className="button-login-fb"></Link>
                        </div>
                    )}
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
                                {grenres.map((item, i) => {
                                    return (
                                        <Col onClick={() => navigate('/filter?grenre=' + item)} className="m2" key={i}>
                                            {item}
                                        </Col>
                                    );
                                })}
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
                                        >
                                            {e.type1}/{e.type2}
                                        </Col>
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
                                        >
                                            {e}
                                        </Col>
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
