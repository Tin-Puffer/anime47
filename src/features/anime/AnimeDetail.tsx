import { Col, Row } from 'antd';
import './animeDetail.scss';

import { Comment } from '../../components/Comment';

export function AnimeDetail() {
    return (
        <div className="anime-deital-container">
            <Row>
                <Col xs={24} md={24} lg={12} style={{ float: 'left' }} className="col-img">
                    <div className="movie-l-img">
                        <img
                            itemProp="image"
                            alt="Mobile Suit Gundam: The Witch from Mercury- Kidou Senshi Gundam: Suisei no Majo, G-Witch | Mobile Suit Gundam: Pháp sư đến từ Sao Thủy"
                            src="https://photo2.tinhte.vn/data/attachment-files/2022/03/5920671_Spy-x-Family.png"
                            style={{ width: '100%', height: '100' }}
                        />

                        <ul className="btn-block">
                            <li className="item">
                                <a
                                    id="btn-film-watch"
                                    className="btn btn-green btn"
                                    href="javascript:void(0)"
                                    title="Đánh Dấu"
                                >
                                    {' '}
                                    Lưu lại
                                </a>
                            </li>
                            <li className="item">
                                <a
                                    id="btn-film-trailer"
                                    className="btn btn-primary btn-film-trailer"
                                    title="Kidou Senshi Gundam: Suisei no Majo, G-Witch | Mobile Suit Gundam: Pháp sư đến từ Sao Thủy"
                                    href="https://anime47.com/phim/mobile-suit-gundam-the-witch-from-mercury/m8818.html#trailer"
                                    data-videourl="https://www.youtube.com/watch?v=xI7k4Z6IDbI"
                                >
                                    Trailer
                                </a>
                            </li>
                            <li className="item">
                                <a
                                    id="btn-film-watch"
                                    className="btn btn-red"
                                    title="Xem ANIME Mobile Suit Gundam: The Witch from Mercury - Kidou Senshi Gundam: Suisei no Majo, G-Witch | Mobile Suit Gundam: Pháp sư đến từ Sao Thủy"
                                    href="./xem-phim-mobile-suit-gundam-the-witch-from-mercury-ep-00/191305.html"
                                >
                                    Xem Anime
                                </a>
                            </li>
                        </ul>
                    </div>
                </Col>
                <Col className="movie-detail" xs={24} md={24} lg={12}>
                    <h1 className="movie-title">
                        <span className="title-1" itemProp="name">
                            Spy x Family
                        </span>
                        <span className="title-2" itemProp="name">
                            Gia Đình Điệp Viên
                        </span>
                        <span className="title-year"> (2022)</span>
                    </h1>
                    <div className="movie-meta-info">
                        <dl className="movie-dl">
                            <dt className="movie-dt">Trạng thái: </dt>
                            <dd className="movie-dd imdb">16/25</dd>
                            <br />
                            <dt className="movie-dt">Thể loại: </dt>
                            <dd className="movie-dd dd-cat">
                                <a href="./the-loai/hanh-dong-23/1.html">Hành Động</a>,{' '}
                                <a href="./the-loai/hai-huoc-24/1.html">Hài Hước</a>,{' '}
                                <a href="./the-loai/kid-69/1.html">Kid</a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Dạng Anime: </dt>
                            <dd className="movie-dd">
                                <a href="danh-sach/tv-series/1.html">TV Series</a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Season: </dt>
                            <dd className="movie-dd">
                                <a href="https://anime47.com/tim-nang-cao/?status=&amp;season=5&amp;year=2022&amp;sort=popular">
                                    Mùa Xuân Năm 2022
                                </a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Năm: </dt>
                            <dd className="movie-dd">
                                <a href="https://anime47.com/tim-nang-cao/?status=&amp;season=&amp;year=2022&amp;sort=popular">
                                    2022
                                </a>
                            </dd>
                            <br />
                            <dt className="movie-dt">Lượt Xem: </dt>
                            <dd className="movie-dd">590835 Lượt xem</dd>
                            <br />
                        </dl>
                    </div>
                    <div className="box-rating">
                        <b>
                            Mới cập nhật:
                            <div className="block2 servers">
                                <div className="server" data-type="watch">
                                    <div className="name">
                                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} />{' '}
                                        <span>YureiFansub</span>{' '}
                                    </div>
                                    <div className="episodes">
                                        <ul>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-15/192449.html"
                                                    title="15"
                                                >
                                                    15
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-14/192216.html"
                                                    title="14"
                                                >
                                                    14
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-13/192215.html"
                                                    title="13"
                                                >
                                                    13
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="server" data-type="watch">
                                    <div className="name">
                                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} />{' '}
                                        <span>YureiFansub</span>{' '}
                                    </div>
                                    <div className="episodes">
                                        <ul>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-15/192449.html"
                                                    title="15"
                                                >
                                                    15
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-14/192216.html"
                                                    title="14"
                                                >
                                                    14
                                                </a>
                                            </li>
                                            <li>
                                                <a
                                                    className="new-update"
                                                    href="/xem-phim-spy-x-family-ep-13/192215.html"
                                                    title="13"
                                                >
                                                    13
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </b>
                    </div>
                </Col>
            </Row>
            <div className="block-movie-content">
                <table className="table-movie">
                    <tr className="table-title">
                        <td>Tên Phim</td>
                        <td>Thứ Tự</td>
                        <td>Năm</td>
                    </tr>
                    <tr>
                        <td>
                            <a style={{ color: ' #11e95d' }} href="https://anime47.com/phim/spy-x-family/m8309.html">
                                Spy x Family
                            </a>
                        </td>
                        <td>
                            <a style={{ color: ' #11e95d' }} href="https://anime47.com/phim/spy-x-family/m8309.html">
                                Phần 1
                            </a>
                        </td>
                        <td style={{ color: ' #11e95d' }}>2022</td>
                    </tr>
                    <tr>
                        <td>
                            <a
                                style={{ color: ' #074450' }}
                                href="https://anime47.com/phim/spy-x-family-part-2/m8826.html"
                            >
                                Spy x Family Part 2
                            </a>
                        </td>
                        <td>
                            <a
                                style={{ color: ' #074450' }}
                                href="https://anime47.com/phim/spy-x-family-part-2/m8826.html"
                            >
                                Phần 2
                            </a>
                        </td>
                        <td style={{ color: ' #074450' }}>2022</td>
                    </tr>
                </table>
            </div>
            <div className="block-movie-content">
                <h2 className="movie-detail-h2">Nội dung</h2>
                <div className="news-article">
                    <p>
                        Al Wayne, một thanh niên với mục tiêu trở thành một nông dân hàng đầu, đã trau dồi kỹ năng làm
                        nông của mình và cuối cùng đã đạt đến cấp độ MAX. Tuy nhiên, một khi anh đạt được đỉnh cao của
                        kỹ năng làm nông, vì một lý do nào đó, cuộc đời anh bắt đầu có một hướng đi quyết liệt. (Nguồn:
                        MAL News)
                    </p>
                </div>
                <div className="block-movie-content blockquate">
                    <h2 className="movie-detail-h2">TRAILER SPY X FAMILY PART 2 VIDEO</h2>
                    <iframe
                        width="100%"
                        height="315"
                        src="https://www.youtube.com/embed/WFVY88Urzuc"
                        title="TVアニメ『SPY×FAMILY』2クール目ティザーPV／2022.10より放送開始！"
                        frameBorder={0}
                        allowFullScreen
                    ></iframe>
                </div>
                <p className="">
                    Chúc các bạn{' '}
                    <a
                        href="https://anime47.com/"
                        title="ANIME VIETSUB ONLINE | ANIME MÙA | ANIME HAY | ANIME TOP | XEM ANIME ONLINE | ANIME47.COM"
                    >
                        xem anime vietsub
                    </a>{' '}
                    vui vẻ tại ANIME47.COM
                </p>
            </div>
            <Comment></Comment>
        </div>
    );
}
