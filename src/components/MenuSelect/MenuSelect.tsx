import { Row, Col } from 'antd';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
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

export const Tabs = React.memo(function Tabs({ tab }: { tab: string[] }) {
    const [active, setActive] = useState<number>(0);
    console.log('Rende tab');
    function handleClickTab(e: any) {
        if (Number(e.target.getAttribute('data-index')) !== active) {
            setActive(Number(e.target.getAttribute('data-index')));
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
    return (
        <div className="list-top-movie-item ">
            <Row>
                <span className="list-top-movie-item-status">
                    {data.ep}/{data.fep}
                </span>
                <Col span={4}>
                    <Link to={'/'}>
                        <div className="list-top-movie-item-img" style={{ backgroundImage: `url(${data.img})` }}></div>
                    </Link>
                </Col>
                <Col span={19} style={{ marginLeft: '8px' }}>
                    <span className="list-top-movie-item-name">{data.name}</span>
                    <span className="list-top-movie-item-decript"> Management of ...</span>
                    <span className="list-top-movie-item-view"> {data.view} Lượt xem</span>
                </Col>
            </Row>
            <div className="list-top-movie-item-info"></div>
        </div>
    );
}
export interface MenuProps {
    data: menuselector[];
    title: string;
    tab: string[];
}
export const MenuSelect = React.memo(function MenuSelect(props: MenuProps) {
    const { data, title, tab } = props;
    const dataFirst: menuselector | undefined = data.shift();
    return (
        <div className="menu-container">
            <div className="menu-content">
                <StarTiTle lable={title}></StarTiTle>
                <Tabs tab={tab}></Tabs>
                <div className="list-play">
                    <div className="playlist-content">
                        <div className="list-top-movies">
                            <div className="movie-lable">
                                {dataFirst ? (
                                    <div>
                                        <div
                                            className="backgound"
                                            style={{ backgroundImage: `url(${dataFirst.img})` }}
                                        ></div>
                                        <span className="list-top-movie-status">
                                            {dataFirst.ep}/{dataFirst.fep}
                                        </span>
                                        <div className="list-top-movie-item-info">
                                            <span className="list-top-movie-item-vn">
                                                {dataFirst.name.slice(0, 24)}
                                            </span>
                                            <span className="list-top-movie-item-en"> Bleach: Huyết ...</span>
                                            <span className="list-top-movie-item-view">{dataFirst.view} Lượt xem</span>
                                        </div>
                                    </div>
                                ) : (
                                    <div></div>
                                )}
                            </div>
                        </div>
                        {data.map((value, i) => (
                            <ListAnimeItem key={i} data={value}></ListAnimeItem>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
});
