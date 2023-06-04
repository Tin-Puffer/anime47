import { useEffect, useState } from 'react';
import { MultiSelect, Option } from 'react-multi-select-component';
import { GridFilm } from './Home';
import { useLocation, useNavigate, useParams, useSearchParams } from 'react-router-dom';
import { deltailAnimme, grenres, ParamFilter, years } from '../../../model';
import { Crumb } from '../../../components/Beadcrumb/BreadCrumb';
import { useAppDispatch, useAppSelector } from '../../../app/hooks';
import { apiMock_10 } from '../../../api/axiosMock_10';
import { autheMCAction } from '../../auth/authMCSlipe';
import { PaginationCustom } from '../../../components/Pagination/Pagination';
import './filterAnime.scss';

export function FilterInput({ movieCabinet }: { movieCabinet: boolean }) {
    const navigate = useNavigate();
    const { id } = useParams();
    const [selected, setSelected] = useState<Option[]>([]);
    const [paramFilter, setParamFilter] = useState<ParamFilter>({});

    const options: Option[] = grenres.map((e, i) => {
        return {
            label: e,
            value: i,
        };
    });

    const handleFilter = () => {
        let str = '';
        paramFilter.status ? (str += '&status=' + paramFilter.status) : (str += '');
        paramFilter.season ? (str += '&season=' + paramFilter.season) : (str += '');
        paramFilter.year ? (str += '&year=' + paramFilter.year) : (str += '');
        paramFilter.sortBy ? (str += '&sortBy=' + paramFilter.sortBy) : (str += '&sortBy=view');

        selected.map((e) => {
            str += '&grenre=' + e.label;
        });
        if (!movieCabinet) navigate('/filter?' + str);
        else navigate('/moviecabinet/' + id + '?' + str);
    };
    return (
        <>
            <Crumb />
            <div className="filter-input-container" style={{ marginBottom: '10px' }}>
                <div className="list-movie-flilter-item">
                    <label className="filter-eptype-label">Tiến Độ</label>
                    <select
                        name="status"
                        className="from-control"
                        onChange={(e) => {
                            e.target.value !== 'null'
                                ? setParamFilter((prev) => ({ ...prev, status: e.target.value }))
                                : setParamFilter((prev) => ({ ...prev, status: null }));
                        }}
                    >
                        <option value="null">Tất cả</option>
                        <option value="finish">Hoàn thành</option>
                        <option value="unfinish">Chưa xong</option>
                    </select>
                </div>

                <div className="list-movie-flilter-item category">
                    <label className="filter-eptype-label">Thể loại</label>
                    <div style={{ width: '100%' }}>
                        <MultiSelect
                            options={options}
                            value={selected}
                            onChange={setSelected}
                            labelledBy="Select"
                            hasSelectAll={false}
                            className="selcet"
                        />
                    </div>
                </div>
                <div className="list-movie-flilter-item">
                    <label className="filter-eptype-label">Theo mùa</label>
                    <select
                        name="season"
                        id="filter-eptype"
                        className="from-control"
                        onChange={(e) => {
                            e.target.value !== 'null'
                                ? setParamFilter((prev) => ({ ...prev, season: e.target.value }))
                                : setParamFilter((prev) => ({ ...prev, season: null }));
                        }}
                    >
                        <option value="null">Tất cả</option>
                        <option value="Mùa Xuân">Xuân</option>
                        <option value="Mùa Hạ">Hạ</option>
                        <option value="Mùa Thu">Thu</option>
                        <option value="Mùa Đông">Đông</option>
                    </select>
                </div>
                <div className="list-movie-flilter-item">
                    <label className="filter-eptype-label">Năm phát hành</label>
                    <select
                        name="year"
                        id="filter-eptype"
                        className="from-control"
                        onChange={(e) => {
                            e.target.value !== 'null'
                                ? setParamFilter((prev) => ({ ...prev, year: e.target.value }))
                                : setParamFilter((prev) => ({ ...prev, year: null }));
                        }}
                    >
                        <option value="null">Tất cả</option>
                        {years.map((year,i) => (
                            <option key={i} value={year}>{year}</option>
                        ))}
                    </select>
                </div>
                <div className="list-movie-flilter-item">
                    <label className="filter-eptype-label">Sắp xếpX</label>
                    <select
                        name="sort"
                        id="filter-eptype"
                        className="from-control"
                        onChange={(e) => {
                            e.target.value !== 'null'
                                ? setParamFilter((prev) => ({ ...prev, sortBy: e.target.value }))
                                : setParamFilter((prev) => ({ ...prev, sortBy: null }));
                        }}
                    >
                        <option value="view">Lượt xem</option>
                        <option value="year">Năm</option>
                    </select>
                </div>
                <button type="submit" id="btn-movie-filter" className="btn btn-red btn-filter-movie">
                    <span onClick={handleFilter}>Duyệt phim</span>
                </button>
            </div>
        </>
    );
}

export function FilterAnime({ detailAccount }: { detailAccount: boolean }) {
    const navigate = useNavigate();
    const dispatch = useAppDispatch();
    const local = useLocation();
    const { id } = useParams();

    const listCabinet = useAppSelector((state) => state.authMC.listMC);
    const loadDataCabinet = useAppSelector((state) => state.authMC.loadDataCabinet);
    const islogin = useAppSelector((state) => state.auth.isLogin);

    const [searchParams, setSearchParams] = useSearchParams();
    const [paramList, setParamList] = useState<ParamFilter>();
    const [page, setPage] = useState<number>(0);
    const [listAll, setListAll] = useState<deltailAnimme[]>();
    const [list, setList] = useState<deltailAnimme[]>();

    useEffect(() => {
        if (detailAccount && !islogin) {
            navigate('/');
        }
    });
    useEffect(() => {
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    }, []);
    useEffect(() => {
        setParamList({
            name: searchParams.get('name'),
            status: searchParams.get('status'),
            type: searchParams.get('type'),
            grenre: searchParams.getAll('grenre'),
            season: searchParams.get('season'),
            year: searchParams.get('year'),
            sortBy: searchParams.get('sortBy'),
        });
        setPage(0);
    }, [searchParams]);
    useEffect(() => {
        if (typeof paramList?.name === 'string') {
            (async () => {
                await apiMock_10.getListSearch(String(paramList?.name), 1, 100).then((res) => {
                    setList(res.data);
                });
            })();
        } else {
            if (loadDataCabinet && local.pathname === '/moviecabinet/' + id) {
                setList(
                    listCabinet
                        ?.filter((x) => {
                            const dkstatus = () => {
                                if (paramList?.status === null) return true;
                                else if (x.status !== paramList?.status) return false;
                                else return true;
                            };
                            const dkgrenre = () => {
                                if (paramList?.grenre === undefined) return true;
                                else {
                                    for (const item of paramList?.grenre) {
                                        if (!x.grenre.includes(item)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            };
                            const dktype = () => {
                                if (paramList?.type === null) return true;
                                else if (x.type !== paramList?.type) return false;
                                else return true;
                            };
                            const dkname = () => {
                                if (paramList?.name === null) return true;
                                else if (x.name.includes(String(paramList?.name).trim())) return true;
                                else return false;
                            };
                            const dkyear = () => {
                                if (paramList?.year === null) return true;
                                else if (x.year !== paramList?.year) return false;
                                else return true;
                            };
                            const dkseason = () => {
                                if (paramList?.season === null) return true;
                                else if (x.season !== paramList?.season) return false;
                                else return true;
                            };
                            return dkgrenre() && dkyear() && dkstatus() && dkseason() && dktype() && dkname();
                        })
                        ?.sort((a, b) =>
                            paramList?.sortBy === null || paramList?.sortBy === 'view'
                                ? b.view - a.view
                                : Number(b.year) - Number(a.year),
                        ),
                );
            } else {
                setList(
                    listAll
                        ?.filter((x) => {
                            const dkstatus = () => {
                                if (paramList?.status === null) return true;
                                else if (x.status !== paramList?.status) return false;
                                else return true;
                            };
                            const dkgrenre = () => {
                                if (paramList?.grenre === undefined) return true;
                                else {
                                    for (const item of paramList?.grenre) {
                                        if (!x.grenre.includes(item)) {
                                            return false;
                                        }
                                    }
                                    return true;
                                }
                            };
                            const dktype = () => {
                                if (paramList?.type === null) return true;
                                else if (x.type !== paramList?.type) return false;
                                else return true;
                            };
                            const dkname = () => {
                                if (paramList?.name === null) return true;
                                else if (x.name.includes(String(paramList?.name).trim())) return true;
                                else return false;
                            };
                            const dkyear = () => {
                                if (paramList?.year === null) return true;
                                else if (x.year !== paramList?.year) return false;
                                else return true;
                            };
                            const dkseason = () => {
                                if (paramList?.season === null) return true;
                                else if (x.season !== paramList?.season) return false;
                                else return true;
                            };
                            return dkgrenre() && dkyear() && dkstatus() && dkseason() && dktype() && dkname();
                        })
                        ?.sort((a, b) =>
                            paramList?.sortBy === null || paramList?.sortBy === 'view'
                                ? b.view - a.view
                                : Number(b.year) - Number(a.year),
                        ),
                );
            }
        }
    }, [paramList, listAll, listCabinet]);

    useEffect(() => {
        if (detailAccount && !loadDataCabinet) {
            dispatch(autheMCAction.loadingListMC(id || ''));
        } else if (local.pathname === '/filter') {
            (async () => {
                await apiMock_10.getListFilter().then((res) => {
                    setListAll(res.data);
                });
            })();
        }
    }, [local.pathname]);
    return (
        <>
            <h1 className="header-list-index">
                {detailAccount ? (
                    <span className="title-list-index">MY CABINET</span>
                ) : (
                    <span className="title-list-index">
                        {paramList?.status !== null ? ' Trạng Thái: ' + paramList?.status : ''}
                        {paramList?.grenre
                            ? paramList?.grenre[0] !== undefined
                                ? ' Thể Loại: ' + paramList?.grenre
                                : ''
                            : ''}
                        {paramList?.season !== null ? '  ' + paramList?.season : ''}
                        {paramList?.year !== null ? ' Năm ' + paramList?.year : ''}
                        {paramList?.sortBy !== null ? ' Xắp Xếp: ' + paramList?.sortBy : ''}
                        {paramList?.type !== null ? ' Loại: ' + paramList?.type : ''}
                        {paramList?.name !== null ? ' Search: ' + paramList?.name : ''}
                    </span>
                )}
            </h1>
            <GridFilm
                cabinet={detailAccount}
                list={list ? list.slice(page * 24, (page + 1) * 24) : undefined}
            ></GridFilm>
            ;
            <div className="paginationCustomFilter" style={{ margin: '20px 0' }}>
                <PaginationCustom
                    handleChange={(pageChange: number) => setPage(pageChange)}
                    total={list ? Math.ceil(list.length / 24) : 0}
                    pagenow={page}
                ></PaginationCustom>
            </div>
        </>
    );
}
