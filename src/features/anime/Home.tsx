import Slider from 'react-slick';

import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

import './homeStyle.scss';
import { Content } from 'antd/lib/layout/layout';
import { Col, Row } from 'antd';
import { Tabs } from '../../components/MenuSelect';
import { render } from '@testing-library/react';
import { useEffect, useRef } from 'react';
function CustomSlide() {
    return (
        <div className="carousel-item">
            <div className="block-wrapper">
                <div className="movie-title-1"> Isekai Uncle, ...</div>
                <div className="movie-status">07/??</div>
            </div>
        </div>
    );
}
function SampleNextArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="carousel-arrow-btn"
            style={{
                top: '50%',
                left: '10px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -2px -535px',
                }}
            ></span>
        </div>
    );
}
function SamplePrevArrow(props: any) {
    const { onClick } = props;
    return (
        <div
            className="carousel-arrow-btn"
            style={{
                top: '50%',
                right: '10px',
                transform: 'translateY(-50%)',
            }}
            onClick={onClick}
        >
            <span
                style={{
                    height: ' 24px',
                    width: '16px',
                    display: 'block',
                    background: ' url(https://anime47.com/skin/24032017/img/image.png?v=1.2) no-repeat -23px -535px',
                }}
            ></span>
        </div>
    );
}
export function CarouselHome() {
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',
        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        afterChange: function (index: number) {},
    };
    return (
        <div>
            <Slider {...settings}>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>

                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
                <CustomSlide></CustomSlide>
            </Slider>
        </div>
    );
}
export function TitleHome() {
    return <h3 className="title-home">Anime Mới Cập Nhật</h3>;
}
export function GridFilm() {
    const ren: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
    const ref = useRef(null);
    return (
        <div>
            <Row gutter={[8, 8]}>
                {ren.map((e, i) => (
                    <Col key={i} ref={ref} xs={8} md={6} className="col-grid-film">
                        <div className="ss">
                            <a className="a">
                                <div className="a1">
                                    <div className="a2">
                                        <div className="a3"></div>
                                    </div>
                                    <div className="a4">
                                        <div className="a41">Exception</div>
                                        <span className="a51">4</span>
                                        <span className="a52">183</span>
                                        <span className="a53">8/8</span>
                                    </div>
                                </div>
                            </a>
                        </div>
                    </Col>
                ))}
            </Row>
        </div>
    );
}
export function Home() {
    return (
        <div className="home-content">
            <Row>
                <Col lg={{ span: '7' }} md={{ span: '5' }}>
                    <TitleHome></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px', marginBottom: '20px' }}
                >
                    <Tabs></Tabs>
                </Col>
            </Row>
            <GridFilm></GridFilm>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <a className="xem-them">Xem thêm...</a>
            </div>
            {/*  */}
            <Row>
                <Col lg={{ span: '7' }} md={{ span: '5' }}>
                    <TitleHome></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px', marginBottom: '20px' }}
                >
                    <Tabs></Tabs>
                </Col>
            </Row>
            <GridFilm></GridFilm>
            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <a className="xem-them">Xem thêm...</a>
            </div>
            {/*  */}
            <Row>
                <Col lg={{ span: '7' }} md={{ span: '5' }}>
                    <TitleHome></TitleHome>
                </Col>
                <Col
                    lg={{ span: '12', offset: '0' }}
                    md={{ span: '12', offset: '0' }}
                    style={{ marginTop: '4px', marginBottom: '20px' }}
                >
                    <Tabs></Tabs>
                </Col>
            </Row>
            <GridFilm></GridFilm>

            <div style={{ width: '100%', display: 'flex', justifyContent: 'end' }}>
                <a className="xem-them">Xem thêm...</a>
            </div>
        </div>
    );
}
