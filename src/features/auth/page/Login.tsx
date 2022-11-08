import { Col, Row } from 'antd';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import openNotification from '../../../components/Notyfication/notyfication';
import Skeleton from '../../../components/Skeleton/Skeleton';
import { authAction } from '../authSlipe';
import './loginStyle.scss';

export function Login() {
    const dispatch = useAppDispatch();
    const navigate = useNavigate();
    const isLogin = useAppSelector((state) => state.auth.isLogin);
    const Login = useAppSelector((state) => state.auth.login);
    const [userName, setUserName] = useState('');
    const [password, setPassword] = useState('');

    useEffect(() => {
        if (isLogin) {
            openNotification('success', 'LOGIN SUCSESS');

            navigate('/');
        }
    });
    const handleFogotPassword = () => {
        openNotification('notify', 'FEATURES NOT AVAILABLE');
    };
    const handleLogin = () => {
        if ((userName === 'sasuke' || userName === 'madara' || userName === 'itachi') && password === '123123')
            dispatch(
                authAction.login({
                    userName: userName,
                    password: '',
                }),
            );
    };
    return (
        <div className="login-main">
            <h1></h1>
            <div className="logi-main-content">
                <h3 className="message">
                    Chức năng đăng nhập bằng Facebook đang được sửa lại, xin lỗi bạn vì sự bất tiện này
                </h3>
                <div className="form-login">
                    <div className="form-horizontal">
                        <Row className="form-group">
                            <Col xs={4} md={3} lg={4} className="form-group-lable">
                                Tài khoản
                            </Col>
                            <Col xs={24} md={16} lg={9}>
                                <input
                                    type="text"
                                    placeholder="Nhập tên đăng nhập"
                                    className="name"
                                    onChange={(e) => setUserName(e.target.value)}
                                />
                            </Col>
                            <Col
                                xs={4}
                                md={{ span: 9, offset: 3 }}
                                lg={{ span: 9, offset: 1 }}
                                style={{ textAlign: 'left' }}
                            >
                                <a href="#" className="button-login-with-fb"></a>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={4} md={3} lg={4} className="form-group-lable">
                                Mật Khẩu
                            </Col>
                            <Col xs={24} md={16} lg={9}>
                                <input
                                    type="text"
                                    placeholder="Nhập mật khẩu truy cập"
                                    className="name"
                                    onChange={(e) => setPassword(e.target.value)}
                                />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col
                                xs={24}
                                md={{ span: 9, offset: 3 }}
                                lg={{ span: 9, offset: 4 }}
                                style={{ textAlign: 'left' }}
                            >
                                {!Login ? (
                                    <>
                                        <button className="btn btn-login" onClick={handleLogin}>
                                            Đăng nhập
                                        </button>
                                        <button className="btn btn-fogot-passwork" onClick={handleFogotPassword}>
                                            Quên mật khẩu
                                        </button>
                                    </>
                                ) : (
                                    <button className="btn btn-login" style={{ width: '100%' }}>
                                        <Skeleton
                                            props={{
                                                height: '100%',
                                                width: '100%',
                                                position: 'absolute',
                                                top: 0,
                                                left: 0,
                                                right: 0,
                                            }}
                                        ></Skeleton>
                                        Login...
                                    </button>
                                )}
                            </Col>
                        </Row>
                        <div style={{ paddingBottom: '30px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
