import { Col, Row } from 'antd';
import React, { ReactNode, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Footer from '../Footer/Footet';
import Header from '../Header/Header';
import MenuSelect from '../MenuSelect/MenuSelect';
import { TopMember } from '../Topmember/Topmember';
import { carouselApi } from '../../api/anime';
import './defaultLayoutStyle.scss';
import { menuselector } from '../../model/user';
interface DefaultLayoutProps {
    header?: ReactNode;
    main: ReactNode;
    topMember?: boolean;
    offSelectCol?: 'off';
}
function DefaultLayout(props: DefaultLayoutProps) {
    const selcetClass = `select-col ${props.offSelectCol}`;
    let params = useParams();
    // console.log("render")
    console.log(params['*']); // "one/two"
    const [listView, SetListView] = useState<menuselector[]>([]);
    useEffect(() => {
        (async () => {
            await carouselApi.getMostView().then((res) => {
                SetListView(res.data);
            });
        })();
    }, []);
    return (
        <div>
            <Header />
            <div>
                <div className="container-df">
                    <div className="content-main">
                        <Row style={{ overflow: 'hidden', marginBottom: '20px ' }}>{props.header}</Row>
                        <Row>
                            <Col xs={24} sm={24} lg={16} className="main-col">
                                {props.main}
                            </Col>

                            <Col xs={24} sm={24} lg={8} className={selcetClass}>
                                <MenuSelect
                                    data={listView}
                                    title="Xem nhiều nhất"
                                    tab={['Ngày', 'Tuần', 'Tháng', 'Mùa', 'năm']}
                                ></MenuSelect>
                                {/* <MenuSelect></MenuSelect> */}
                                <TopMember></TopMember>
                            </Col>
                        </Row>
                    </div>
                </div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default DefaultLayout;
