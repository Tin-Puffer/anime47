import { Col, Row } from 'antd';
import React, { ReactNode } from 'react';
import Footer from '../Footer/Footet';
import Header from '../Header/Header';
import MenuSelect from '../MenuSelect/MenuSelect';
import { TopMember } from '../Topmember/Topmember';
import './defaultLayoutStyle.scss';
interface DefaultLayoutProps {
    header?: ReactNode;
    main: ReactNode;
    topMember?: boolean;
    offSelectCol?: 'off';
}
function DefaultLayout(props: DefaultLayoutProps) {
    const selcetClass = `select-col ${props.offSelectCol}`;
    return (
        <div>
            <Header />
            <div>
                <div className="container-df">
                    <div className="content-main">
                        <Row>{props.header}</Row>
                        <Row>
                            <Col xs={24} sm={24} lg={16} className="main-col">
                                {props.main}
                            </Col>

                            <Col xs={24} sm={24} lg={8} className={selcetClass}>
                                <MenuSelect></MenuSelect>
                                <MenuSelect></MenuSelect>
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
