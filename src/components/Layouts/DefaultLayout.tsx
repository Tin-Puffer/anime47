import { Col, Row } from 'antd';
import { ReactNode, useEffect, useMemo, useState } from 'react';
import { useParams, useSearchParams } from 'react-router-dom';
import Footer from '../Footer/Footet';
import Header from '../Header/Header';
import { MenuSelect } from '../MenuSelect';
import { topMember, TopMember } from '../Topmember/Topmember';
import { carouselApi } from '../../api/anime';
import './defaultLayoutStyle.scss';
import { listViewAll, menuselector } from '../../model/user';

interface DefaultLayoutProps {
    header?: ReactNode;
    main: ReactNode;
    topMember?: boolean;
    offSelectCol?: 'off';
}
function DefaultLayout(props: DefaultLayoutProps) {
    // let [searchParams, setSearchParams] = useSearchParams();

    const selcetClass = `select-col ${props.offSelectCol}`;
    const tabLableView = useMemo<string[]>(() => {
        return ['Ngày', 'Tuần', 'Tháng', 'Mùa', 'Năm'];
    }, []);
    const tabLableComent = useMemo<string[]>(() => {
        return ['Mùa này', 'Mùa Trước', 'Năm', 'ALL'];
    }, []);
    let params = useParams();

    // console.log(params['*']); // "one/two"

    const [listView, SetListView] = useState<menuselector[]>([]);
    const [listComent, SetListComent] = useState<menuselector[]>([]);
    const [topList, SetTopList] = useState<topMember[]>([]);

    const [listViewAll, SetListViewAll] = useState<listViewAll[]>();
    const [listComentAll, SetListComentAll] = useState<listViewAll[]>();

    const [loadView, setLoadView] = useState(0);
    const [loadComent, setLoadComent] = useState(0);

    useEffect(() => {
        (async () => {
            await carouselApi.getMostView('01').then((res) => {
                SetListViewAll(res.data[0].data);
            });
        })();
        (async () => {
            await carouselApi.getMostView('02').then((res) => {
                SetListComentAll(res.data[0].data);
            });
        })();
        (async () => {
            await carouselApi.getMostView('03').then((res) => {
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
            {/* <XXX></XXX> */}
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
                                    tab={tabLableView}
                                    change={setLoadView}
                                ></MenuSelect>
                                <MenuSelect
                                    data={listComent}
                                    title="Bình luận nhiều "
                                    tab={tabLableComent}
                                    change={setLoadComent}
                                ></MenuSelect>
                                <TopMember list={topList} title="Top thành viên"></TopMember>
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
