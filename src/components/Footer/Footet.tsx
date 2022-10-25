import './footerStyle.scss';
import { Col, Row } from 'antd';
import 'antd/dist/antd.min.css';
import { Link } from 'react-router-dom';
export default function Footet() {
    return (
        <div className="footer">
            <div className="container" style={{ padding: '20px 0' }}>
                <Row className="content">
                    <Col xs={{ offset: 2, span: 22 }} md={{ offset: 0, span: 10 }}>
                        <Link to={'/'} style={{ marginBottom: '10px', display: 'block', marginLeft: '5px' }}>
                            Xem anime
                        </Link>
                        <p className="title-p"> © 2022 NguyenChiTin •</p>
                    </Col>
                    <Col xs={{ offset: 2, span: 22 }} md={{ offset: 0, span: 14 }}>
                        <Row>
                            <Col xs={{ span: 24 }} md={{ offset: 0, span: 10 }}>
                                <div className="box">
                                    <p className="logo fb"></p>
                                    <div className="title">
                                        <p className="title-p lable">Fanpage Facebook</p>
                                        <div className="btn-link">
                                            <Link to="">
                                                <button className="bnt" style={{ width: '70px' }}>
                                                    {' '}
                                                    ✓ Like
                                                </button>
                                                <button className="bnt">share</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </Col>
                            <Col xs={{ span: 24 }} md={{ offset: 0, span: 14 }}>
                                <div className="box">
                                    <p className="logo mail"></p>
                                    <div className="title">
                                        <p className="title-p lable">Liên hệ quảng cáo</p>
                                        <p className="title-p">nguyenchitin2018@gmail.com</p>
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </div>
        </div>
    );
}
