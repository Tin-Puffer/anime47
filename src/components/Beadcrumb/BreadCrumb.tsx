import { Breadcrumb } from 'antd';
import { useEffect, useState } from 'react';
import { Link, useLocation, useParams, useSearchParams } from 'react-router-dom';
import { animeList, carouselApi } from '../../api/anime';
import { deltailAnimme } from '../../model/user';
import './breadCrumbStyle.scss';
interface CrumbType {
    name: string | undefined;
    path?: string;
}
function Separator() {
    return <div className="separator">/</div>;
}
export function Crumb() {
    const local = useLocation();
    let { id } = useParams<string>();
    const [searchParams, setSearchParams] = useSearchParams();
    const [detail, setDetail] = useState<deltailAnimme>();
    const [crumb, setCrumb] = useState<CrumbType[]>([]);
    // console.log('id=' + id);
    // console.log(detail);

    useEffect(() => {
        if (detail) {
            detail.grenre.map((e) => {
                const tmp: CrumbType = { name: e, path: '/filter?grenre=' + e };
                setCrumb((pr) => pr.concat(tmp));
            });
            local.pathname === '/watch'
                ? setCrumb((pr) =>
                      pr.concat(
                          { name: detail?.name, path: '/anime/' + detail.id },
                          { name: 'EP: ' + searchParams.get('ep') },
                      ),
                  )
                : setCrumb((pr) => pr.concat({ name: detail?.name }));
        }
    }, [detail]);
    useEffect(() => {
        console.log(detail);

        switch (local.pathname) {
            case '/anime/' + id: {
                (async () => {
                    await carouselApi.getDetail(id || '').then((res) => {
                        setDetail(res.data[0]);
                        setCrumb([{ name: 'Home', path: '/' }]);
                    });
                })();
                break;
            }
            case '/filter': {
                setCrumb([
                    { name: 'Home', path: '/' },
                    {
                        name:
                            `${searchParams.get('status') ? 'Trạng Thái: ' + searchParams.get('status') + ' ★ ' : ''}` +
                            `${
                                searchParams.getAll('grenre')[0] !== undefined
                                    ? 'Thể loại: ' + searchParams.getAll('grenre') + ' ★ '
                                    : ''
                            }` +
                            `${searchParams.get('season') ? searchParams.get('season') + ' ★ ' : ''}` +
                            `${searchParams.get('year') ? 'NĂM: ' + searchParams.get('year') + ' ★ ' : ''}` +
                            `${searchParams.get('sortBy') ? 'sắp xếp: ' + searchParams.get('sortBy') + ' ★ ' : ''}`,
                    },
                ]);
                break;
            }
            case '/watch': {
                (async () => {
                    await carouselApi.getDetail(searchParams.get('id') || '').then((res) => {
                        setDetail(res.data[0]);
                        setCrumb([{ name: 'Home', path: '/' }]);
                    });
                })();
                break;
            }
            case '/moviecabinet/' + id: {
                setCrumb([{ name: 'Home', path: '/' }, { name: 'Movie Cabinet ' }]);
                break;
            }
            default: {
                setCrumb([{ name: 'Home', path: '/' }, { name: `${local.pathname.substring(1)}` }]);
            }
        }
    }, [local.pathname, searchParams]);
    return (
        <Breadcrumb separator={<Separator />} className="container-crumb">
            {crumb.map((e, i) =>
                e.path ? (
                    <Breadcrumb.Item key={i}>
                        <Link className="able-click" to={e.path}>
                            {e.name?.toUpperCase()}
                        </Link>
                    </Breadcrumb.Item>
                ) : (
                    <Breadcrumb.Item className="unable-click" key={i}>
                        {e.name?.toUpperCase()}
                    </Breadcrumb.Item>
                ),
            )}
        </Breadcrumb>
    );
}
