import { Col, Row } from 'antd';
import { createSearchParams, Link, useNavigate } from 'react-router-dom';
import { useEffect, useRef, useState } from 'react';
import { keyboardKey } from '@testing-library/user-event';
import { deltailAnimme, grenRes, grenres, sortComent, years } from '../../model';
import { apiMock_10 } from '../../api/axiosMock_10';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { authAction } from '../../features/auth/authSlipe';
import 'antd/dist/antd.less';
import './headerStyle.scss';

export default function () {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    let boxSrarchRef = useRef<HTMLDivElement>(null);
    const user = useAppSelector((state) => state.auth.currentUser);
    const [isHide, setIsHide] = useState(false);
    const [boxList, setBoxList] = useState<deltailAnimme[]>();
    const [inputValue, setInputvalue] = useState('');
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
        apiMock_10.getListSearch(inputValue).then((res) => {
            setBoxList(res.data);
        });
    }, [isHide]);
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
                            placeholder={' T??m: t??n anime ...'}
                            onKeyPress={handleSearchBox}
                            onChange={(e) => {
                                setInputvalue(e.target.value);
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
                                    <p className="more-resoult">Enter ????? t??m ki???m</p>
                                </div>
                            </div>
                        )}
                    </div>
                </Col>
                <Col className="item" xs={24} md={24} lg={9}>
                    {user ? (
                        <div className="widget_user_header">
                            <div className=" btn-blue btn btn-small nonclick">
                                Xin ch??o, {user.name}
                                <ul className="dropdown-menu" role="menu">
                                    <li
                                        onClick={() => {
                                            navigate('/deltailaccount');
                                        }}
                                    >
                                        <span>Th??ng tin t??i kho???n</span>
                                    </li>

                                    <li className="divider"></li>
                                    <li>
                                        <span onClick={handleLogout}>Tho??t</span>
                                    </li>
                                </ul>
                            </div>
                            <div className="btn btn-red btn-small" onClick={() => navigate('/moviecabinet/' + user.id)}>
                                {' '}
                                T??? phim
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
                            <Col className="item-search">trang ch???</Col>
                        </Link>
                        <Col className="item-search">
                            th??? lo???i
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
                            tr???ng th??i
                            <Row className="mega-menu-2 status">
                                <Col
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
                                    ??ang ti???n h??nh
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
                                    ???? ho??n th??nh
                                </Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            xem nhi???u
                            <Row className="mega-menu-2 viewCount">
                                {}
                                <Col className="m2 disible">Ng??y</Col>
                                <Col className="m2 disible">Tu???n</Col>
                                <Col className="m2 disible">Th??ng</Col>
                                <Col className="m2 disible">N??m</Col>
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
                                    T???t C???
                                </Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            b??nh lu???n nhi???u
                            <Row className="mega-menu-2 commentCount">
                                {sortComent.map((item, i) => (
                                    <Col key={i} className="m2 disible">
                                        {item}
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col className="item-search ">
                            l?????ng long nh???t th???
                            <Row className="mega-menu-2 type-2">
                                {grenRes.map((e, i) => (
                                    <Col
                                        className="m2"
                                        key={i}
                                        onClick={() =>
                                            navigate({
                                                pathname: '/filter',
                                                search: createSearchParams({
                                                    grenre: [e.grenres_1, e.grenres_2],
                                                }).toString(),
                                            })
                                        }
                                    >
                                        {e.grenres_1}/{e.grenres_2}
                                    </Col>
                                ))}
                            </Row>
                        </Col>
                        <Col className="item-search">
                            n??m
                            <Row className="mega-menu-2">
                                {years.map((e, i) => (
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
                                ))}
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
