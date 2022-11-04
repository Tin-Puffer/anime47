import { useEffect, useRef, useState } from 'react';
import { useLocation, useSearchParams } from 'react-router-dom';
import { animeList } from '../../api/anime';
import { Comment } from '../../components/Comment';
import { listSever, ParamWatch } from '../../model/user';
import './animeWath.scss';
export function AnimeWatch() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [paramList, setParamList] = useState<ParamWatch>();
    const [servetList, setServerList] = useState<listSever>();
    const [link, SetLink] = useState<string | null>();
    const ref = useRef<HTMLDivElement>(null);

    useEffect(() => {
        ref.current?.scroll();
        setParamList({
            id: searchParams.get('id'),
            server: searchParams.get('server'),
            ep: searchParams.get('ep'),
        });
        SetLink(localStorage.getItem('Link'));
    }, [searchParams]);
    console.log(servetList);
    useEffect(() => {
        (async () => {
            await animeList.getDetailList(searchParams.get('id') || '').then((res) => {
                if (res.data[0]) {
                    setServerList(res.data[0]);
                } else {
                    setServerList(undefined);
                }
            });
        })();
    }, []);
    return (
        <div className="" ref={ref}>
            <div className="container-play-video">
                <iframe
                    className="iframe-video"
                    width="640"
                    height="360"
                    src={link ? link : ''}
                    scrolling="0"
                    allowFullScreen
                ></iframe>
                <div className="background-load-iframe">
                    <iframe
                        className="background-load-img"
                        src="https://giphy.com/embed/1jgLDGD1Bn27e"
                        width="270"
                        height="480"
                        frameBorder="0"
                        allowFullScreen
                    ></iframe>
                </div>
            </div>

            <div style={{ padding: '10px 10px' }} className="clicksv">
                <span className="btn btn-green actives" title="Fa">
                    Fa
                </span>
                <span className="btn btn-green" title="Fe">
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
                            {servetList?.mainSV22?.map((e, i) => {
                                let clasEp = '';
                                paramList?.server === 'mainSV22' && paramList.ep === e.ep
                                    ? (clasEp = 'new-update active')
                                    : (clasEp = 'new-update');
                                return (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            localStorage.setItem('Link', e.link);
                                            setSearchParams({
                                                id: servetList.id,
                                                server: 'mainSV22',
                                                ep: e.ep,
                                            });
                                        }}
                                    >
                                        <a className={clasEp}>{e.ep}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
                <div className="server" data-type="watch">
                    <div className="name">
                        <img src="https://iili.io/DCJ2EP.jpg" style={{ marginTop: '-7px' }} /> <span>YureiFansub</span>{' '}
                    </div>
                    <div className="episodes">
                        <ul>
                            {servetList?.BackUpSV23?.map((e, i) => {
                                let clasEp = '';
                                paramList?.server === 'BackUpSV23' && paramList.ep === e.ep
                                    ? (clasEp = 'new-update active')
                                    : (clasEp = 'new-update');
                                return (
                                    <li
                                        key={i}
                                        onClick={() => {
                                            localStorage.setItem('Link', e.link);
                                            setSearchParams({
                                                id: servetList.id,
                                                server: 'BackUpSV23',
                                                ep: e.ep,
                                            });
                                        }}
                                    >
                                        <a className={clasEp}>{e.ep}</a>
                                    </li>
                                );
                            })}
                        </ul>
                    </div>
                </div>
            </div>
            <Comment></Comment>
        </div>
    );
}
