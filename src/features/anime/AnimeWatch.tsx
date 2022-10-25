import { Comment } from '../../components/Comment';
import "./animeWath.scss"
export function AnimeWatch() {
    return (
        <div className="">
            <iframe
                style={{ border: 'none', width: '100%', height: '470px' }}
                width="640"
                height="360"
                src="https://short.ink/vz8foN-yE"
                scrolling="0"
                allowFullScreen
            ></iframe>
            <div style={{ padding: '10px 10px' }} className="clicksv">
                <span className="btn btn-green actives"  title="Fa">
                    Fa
                </span>
                <span className="btn btn-green"  title="Fe">
                    Fe
                </span>
            </div>
            <div className="box-rating">
                <h3 style={{ color: '#ea730ce8', fontSize: '24px' }}>
                    Nếu phim bị lỗi hãy bấm xem server khác Fe,Hy..{' '}
                </h3>
                <p style={{ textAlign: 'center', fontSize: '20px', color: '#dacb46' }}>
                    Ủng hộ và donate cho Kanefusa
                    <a href="https://www.facebook.com/kanefusafansub/" target="_blank">
                        {' '}
                        tại đây
                    </a>
                </p>
            </div>
            <div className="block2 servers">
                <div className="server" data-type="watch">
                    <div className="name">
                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} /> <span>YureiFansub</span>{' '}
                    </div>
                    <div className="episodes">
                        <ul>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-15/192449.html" title="15">
                                    15
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-14/192216.html" title="14">
                                    14
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-13/192215.html" title="13">
                                    13
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="server" data-type="watch">
                    <div className="name">
                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} /> <span>YureiFansub</span>{' '}
                    </div>
                    <div className="episodes">
                        <ul>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-15/192449.html" title="15">
                                    15
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-14/192216.html" title="14">
                                    14
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-13/192215.html" title="13">
                                    13
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
                <div className="server" data-type="watch">
                    <div className="name">
                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} /> <span>YureiFansub</span>{' '}
                    </div>
                    <div className="episodes">
                        <ul>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-15/192449.html" title="15">
                                    15
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-14/192216.html" title="14">
                                    14
                                </a>
                            </li>
                            <li>
                                <a className="new-update" href="/xem-phim-spy-x-family-ep-13/192215.html" title="13">
                                    13
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </div>
    );
}
