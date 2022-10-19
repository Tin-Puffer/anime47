import React from 'react';
import { Col, Row } from 'antd';

export default function Register() {
    return (
        <div className="login-main">
            <h1></h1>
            <div className="logi-main-content">
                <h3 className="message"></h3>
                <div className="form-login">
                    <div className="form-horizontal">
                        <Row className="form-group">
                            <Col xs={4} md={5} lg={5} className="form-group-lable">
                                Tài khoản
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={4} md={5} lg={5} className="form-group-lable">
                                Mật Khẩu
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={6} md={5} lg={5} className="form-group-lable">
                                Xác nhận mật khẩu
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={4} md={5} lg={5} className="form-group-lable">
                                Email
                            </Col>
                            <Col xs={24} md={16} lg={13}>
                                <input type="text" className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={0} md={5} lg={5} className="form-group-lable">
                                
                            </Col>
                            <Col xs={5} md={{ span: 3}} lg={{ span: 5}}>
                                <img src="https://anime47.com/captcha.php"></img>
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col xs={6} md={5} lg={5} className="form-group-lable">
                                Mã xác nhận
                            </Col>
                            <Col xs={24} md={16} lg={5}>
                                <input type="text" placeholder='Nhập mã xác nhận' className="name" />
                            </Col>
                        </Row>
                        <Row className="form-group">
                            <Col
                                xs={24}
                                md={{ span: 9, offset: 5 }}
                                lg={{ span: 9, offset: 5 }}
                                style={{ textAlign: 'left' }}
                            >
                                <button className="btn btn-login">Đăng ký</button>
                            </Col>
                        </Row>
                        <div style={{ paddingBottom: '30px' }}></div>
                    </div>
                </div>
            </div>
        </div>
    );
}
