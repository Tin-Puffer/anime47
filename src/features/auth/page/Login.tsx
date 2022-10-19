import { Col, Row } from 'antd';
import React from 'react';
import './loginStyle.scss';

export function Login() {
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
                                <input type="text" placeholder="Nhập email hoặc tên đăng nhập" className="name" />
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
                                <input type="text" placeholder="Nhập mật khẩu truy cập" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col
                                xs={24}
                                md={{ span: 9, offset: 3 }}
                                lg={{ span: 9, offset: 4 }}
                                style={{ textAlign: 'left' }}
                            >
                                <button className="btn btn-login">Đăng nhập</button>
                                <button className="btn btn-fogot-passwork">Quên mật khẩu</button>
                            </Col>
                        </Row>
                        <div style={{ paddingBottom: '30px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
