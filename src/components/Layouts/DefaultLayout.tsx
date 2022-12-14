import Footer from '../Footer/Footet';
import Header from '../Header/Header';
import { Col, Row } from 'antd';
import { ReactNode, useEffect, useState } from 'react';
import { MenuSelect } from '../MenuSelect';
import {  TopMember } from '../Topmember/Topmember';
import { apiMock_10 } from '../../api/axiosMock_10';
import { listViewAll, menuselector, tabLableComent, tabLableView, topMember } from '../../model';
import './defaultLayoutStyle.scss';

interface DefaultLayoutProps {
    header?: ReactNode;
    main: ReactNode;
    topMember?: boolean;
    offSelectCol?: 'off';
}
function DefaultLayout(props: DefaultLayoutProps) {
    const selcetClass = `select-col ${props.offSelectCol}`;
  

    const [listView, SetListView] = useState<menuselector[]>([]);
    const [listComent, SetListComent] = useState<menuselector[]>([]);
    const [topList, SetTopList] = useState<topMember[]>([]);

    const [listViewAll, SetListViewAll] = useState<listViewAll[]>();
    const [listComentAll, SetListComentAll] = useState<listViewAll[]>();

    const [loadView, setLoadView] = useState(0);
    const [loadComent, setLoadComent] = useState(0);

    useEffect(() => {
        (async () => {
            await apiMock_10.getMostView('01').then((res) => {
                SetListViewAll(res.data[0].data);
            });
        })();
        (async () => {
            await apiMock_10.getMostView('02').then((res) => {
                SetListComentAll(res.data[0].data);
            });
        })();
        (async () => {
            await apiMock_10.getMostView('03').then((res) => {
                SetTopList(res.data[0].data);
            });
        })();
    }, []);
    useEffect(() => {
        SetListComent(listComentAll ? [...listComentAll[loadComent].list] : []);
    }, [listComentAll, loadComent]);
    useEffect(() => {
        SetListView(listViewAll ? [...listViewAll[loadView].list] : []);
    }, [listViewAll, loadView]);

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
                                    title="Xem nhi???u nh???t"
                                    tab={tabLableView}
                                    change={setLoadView}
                                ></MenuSelect>
                                <MenuSelect
                                    data={listComent}
                                    title="B??nh lu???n nhi???u "
                                    tab={tabLableComent}
                                    change={setLoadComent}
                                ></MenuSelect>
                                <TopMember list={topList} title="Top th??nh vi??n"></TopMember>
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
