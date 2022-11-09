import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Slider from "react-slick";
import { apiMock_10 } from "../../api/axiosMock_10";
import { carouselItem } from "../../model";
import Skeleton from "../Skeleton/Skeleton";
function CustomSlide({ data }: { data: carouselItem }) {
    const nav = useNavigate();
    const Background = {
        backgroundImage: `url(${data.img})`,
    };
    return (
        <div className="">
            {!data ? (
                <div className="carousel-item">
                    <Skeleton
                        props={{
                            width: '100%',
                            height: '250px',
                        }}
                    ></Skeleton>
                </div>
            ) : (
                <div
                    className="carousel-item"
                    onClick={() => {
                        nav(`/anime/${data.id}`);
                    }}
                >
                    <div className="block-wrapper" style={Background}>
                        <div>
                            <div className="movie-title-1">{data.name.slice(0, 12)}...</div>
                        </div>
                        <div className="movie-status">
                            {data.ep}/{data.total}
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
}
export function SampleNextArrow(props: any) {
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
    const [listCarousel, setListCarousel] = useState<carouselItem[]>([]);
    useEffect(() => {
        (async () => {
            await apiMock_10.getAll().then((res) => {
                setListCarousel(res);
            });
        })();
    }, []);
    const settings = {
        className: 'center',
        infinite: true,
        centerPadding: '60px',

        slidesToShow: 5,
        swipeToSlide: true,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
        responsive: [
            {
                breakpoint: 970,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 782,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    initialSlide: 2,
                },
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2,
                },
            },
            {
                breakpoint: 380,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };
    return (
        <Slider {...settings}>
            {listCarousel.map((e, i) => {
                return <CustomSlide data={e} key={i}></CustomSlide>;
            })}
        </Slider>
    );
}
