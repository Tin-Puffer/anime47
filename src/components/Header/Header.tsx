import React from 'react';
import { Col, Row } from 'antd';
import 'antd/dist/antd.css';
import './headerStyle.scss';
import { Link } from 'react-router-dom';
export default function () {
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
                        <Link to={'/'} className="button-register"></Link>
                        <Link to={'/'} className="button-login"></Link>
                        <Link to={'/'} className="button-login-fb"></Link>
                    </div>
                </Col>
            </Row>
            <div className="nav">
                <div className="nav-search">
                    <Row className="mega-menu-1">
                        <Col className="item-search">trang chủ</Col>
                        <Col className="item-search">
                            thể loại
                            <Row className="mega-menu-2 type">
                                <Col className="m2">b1</Col>
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
                                <Col className="m2">Đang tiến hành</Col>
                                <Col className="m2">Đã hoàn thành</Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            xem nhiều
                            <Row className="mega-menu-2 viewCount">
                                <Col className="m2">Ngày</Col>
                                <Col className="m2">Tuần</Col>
                                <Col className="m2">Tháng</Col>
                                <Col className="m2">Mùa Này</Col>
                                <Col className="m2">Năm này</Col>
                                <Col className="m2">Mùa trước</Col>
                                <Col className="m2">Tất Cả</Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            bình luận nhiều
                            <Row className="mega-menu-2 commentCount">
                                <Col className="m2">Mùa Vày</Col>
                                <Col className="m2">Mùa Trước</Col>
                                <Col className="m2">Năm Này</Col>
                                <Col className="m2">Năm Trước</Col>
                                <Col className="m2">Tất Cả</Col>
                            </Row>
                        </Col>
                        <Col className="item-search ">
                            lưỡng long nhất thể
                            <Row className="mega-menu-2 type-2">
                                <Col className="m2">Hành động/ hài hước</Col>
                                <Col className="m2">Harem/ hài hước</Col>
                                <Col className="m2">Đời thường/ học đường</Col>
                                <Col className="m2">Lãng mạng/ học đường</Col>
                                <Col className="m2">Ecchi/ harem</Col>
                                <Col className="m2">Học đường/Ecchi</Col>
                                <Col className="m2">Ngẫu nhiên</Col>
                            </Row>
                        </Col>
                        <Col className="item-search">
                            năm
                            <Row className="mega-menu-2">
                                <Col className="m2">2015</Col>
                                <Col className="m2">2016</Col>
                                <Col className="m2">2017</Col>
                                <Col className="m2">2018</Col>
                                <Col className="m2">2019</Col>
                                <Col className="m2">2020</Col>
                                <Col className="m2">2021</Col>
                                <Col className="m2">2022</Col>
                            </Row>
                        </Col>
                    </Row>
                </div>
            </div>
        </div>
    );
}
