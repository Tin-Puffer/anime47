import { Row, Col } from 'antd';
import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { menuselector } from '../../model/user';

import './menuStyle.scss';

export function StarTiTle({ lable }: { lable: string }) {
    return (
        <div className="title">
            <h2 className="star-icon">
                <span className="lable">{lable}</span>
            </h2>
        </div>
    );
}

export const Tabs = React.memo(function Tabs({ tab, change = () => {} }: { tab: string[]; change?: Function }) {
    const [active, setActive] = useState<number>(0);
    function handleClickTab(e: any) {
        if (Number(e.target.getAttribute('data-index')) !== active) {
            setActive(Number(e.target.getAttribute('data-index')));
            change(Number(e.target.getAttribute('data-index')));
        }
        // Number(e.target.getAttribute('data-index')) == active ? setActive(Number(e.target.getAttribute('data-index'))): {};
    }
    return (
        <div className="tabs">
            {tab.map((value, i) => (
                <div
                    key={i}
                    data-index={i}
                    onClick={(e) => handleClickTab(e)}
                    className={`tab ${i === active ? 'active' : ''}`}
                >
                    {value}
                </div>
            ))}
        </div>
    );
});

export function ListAnimeItem({ data }: { data: menuselector }) {
    const nav = useNavigate();
    return (
        <div
            className="list-top-movie-item"
            onClick={() => {
                nav('/anime/' + data.id);
            }}
        >
            <Row>
                <span className="list-top-movie-item-status">
                    {data.ep}/{data.total}
                </span>
                <Col span={4}>
                    <Link to={'/'}>
                        <div className="list-top-movie-item-img" style={{ backgroundImage: `url(${data.img})` }}></div>
                    </Link>
                </Col>
                <Col span={19} style={{ marginLeft: '8px', marginBottom: '20px' }}>
                    <span className="list-top-movie-item-name">{data.name}</span>
                    <span className="list-top-movie-item-decript"> {data.description.slice(0, 24)}..</span>
                    <span className="list-top-movie-item-view"> {data.view} Lượt xem</span>
                </Col>
            </Row>
            <div className="list-top-movie-item-info"></div>
        </div>
    );
}
export interface MenuProps {
    change: Function;
    data: menuselector[];
    title: string;
    tab: string[];
}
export const MenuSelect = React.memo(function MenuSelect(props: MenuProps) {
    const nav = useNavigate();
    const { data, title, tab, change } = props;
    const [dataFirst2, setDataFirst] = useState<menuselector[]>();
    useEffect(() => {
        setDataFirst([...data.slice(1, 8)]);
        // console.log(dataFirst2);
    }, [data]);
    return (
        <div className="menu-container">
            <div className="menu-content">
                <StarTiTle lable={title}></StarTiTle>
                <Tabs tab={tab} change={change}></Tabs>
                <div className="list-play">
                    <div className="playlist-content">
                        <div className="list-top-movies">
                            <div className="movie-lable">
                                {data[0] ? (
                                    <div
                                        onClick={() => {
                                            nav('/anime/' + data[0].id);
                                        }}
                                    >
                                        <div
                                            className="backgound"
                                            style={{ backgroundImage: `url(${data[0].img})` }}
                                        ></div>
                                        <span className="list-top-movie-status">
                                            {data[0].ep}/{data[0].total}
                                        </span>
                                        <div className="list-top-movie-item-info">
                                            <span className="list-top-movie-item-vn">{data[0].name.slice(0, 24)}</span>
                                            <span className="list-top-movie-item-en">
                                                {' '}
                                                {data[0].description.slice(0, 18)}...
                                            </span>
                                            <span className="list-top-movie-item-view">{data[0].view} Lượt xem</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                        {dataFirst2?.map((value, i) => (
                            <ListAnimeItem key={i} data={value}></ListAnimeItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});
