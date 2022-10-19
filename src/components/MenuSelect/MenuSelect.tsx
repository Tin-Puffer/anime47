import { Row, Col } from 'antd';
import { Link } from 'react-router-dom';
import { TopMember } from '../Topmember/Topmember';

import './menuStyle.scss';

export function StarTiTle(){
    return (
        <div className="title">
            <h2 className="star-icon">
                <span className="lable">Xem nhiều nhất</span>
            </h2>
        </div>
    );
}
export function Tabs() {
    return (
        <div className="tabs">
            <div className="tab active">Ngày</div>
            <div className="tab">Tuần</div>
            <div className="tab">Tháng</div>
            <div className="tab ">Mùa</div>
            <div className="tab">Năm</div>
        </div>
    );
}
interface FullName {
    color?: string;
}
export function ListAnimeItem(props: FullName) {
    let xx = 'list-top-movie-item ' + props.color;
    return (
        <div className={xx}>
            <Row>
                <span className="list-top-movie-item-status">03/??</span>
                <Col span={4}>
                    <Link to={'/'}>
                        <div className="list-top-movie-item-img"></div>
                    </Link>
                </Col>
                <Col span={19} style={{ marginLeft: '8px' }}>
                    <span className="list-top-movie-item-name">Shinmai Renkinjutsushi no </span>
                    <span className="list-top-movie-item-decript"> Management of ...</span>
                    <span className="list-top-movie-item-view"> 4170 Lượt xem</span>
                </Col>
            </Row>
            <div className="list-top-movie-item-info"></div>
        </div>
    );
}
export default function MenuSelect() {
    return (
        <div className="menu-container">
            <div className="menu-content">
                <StarTiTle></StarTiTle>
                <Tabs></Tabs>
                <div className="list-play">
                    <div className="playlist-content">
                        <div className="list-top-movies">
                            <div className="movie-lable">
                                <div className="backgound"></div>
                                <span className="list-top-movie-status">02/??</span>
                                <div className="list-top-movie-item-info">
                                    <span className="list-top-movie-item-vn">Bleach: Sennen Kessen-hen</span>
                                    <span className="list-top-movie-item-en"> Bleach: Huyết ...</span>
                                    <span className="list-top-movie-item-view">4215 Lượt xem</span>
                                </div>
                            </div>
                        </div>
                        <ListAnimeItem color="dark"></ListAnimeItem>
                        <ListAnimeItem></ListAnimeItem>
                        <ListAnimeItem color="dark"></ListAnimeItem>
                        <ListAnimeItem></ListAnimeItem>
                        <ListAnimeItem color="dark"></ListAnimeItem>
                        <ListAnimeItem></ListAnimeItem>
                        <ListAnimeItem color="dark"></ListAnimeItem>
                    </div>
                </div>       
            </div>
        </div>
    );
}
