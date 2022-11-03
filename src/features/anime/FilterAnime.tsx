import { useEffect, useMemo, useRef, useState } from 'react';
import { MultiSelect, Option } from 'react-multi-select-component';
import { GridFilm } from './Home';
import { Pagination } from 'antd';
import './filterAnime.scss';
import { createSearchParams, Navigate, useNavigate, useSearchParams } from 'react-router-dom';
import { deltailAnimme, ParamFilter } from '../../model/user';
import { carouselApi } from '../../api/anime';
import { grenres } from '../../model/constans';
import { Crumb } from '../../components/Beadcrumb/BreadCrumb';

export function PaginationCustom({
    total,
    pagenow,
    handleChange,
}: {
    total: number;
    pagenow: number;
    handleChange: Function;
}) {
    const onChange = (page: number) => {
        handleChange(page - 1);
        window.scrollTo({
            top: 0,
            left: 0,
            behavior: 'smooth',
        });
    };

    if (total <= 1) return <></>;
    else {
        return (
            <Pagination
                pageSize={1}
                // showLessItems={true}
                showSizeChanger={false}
                itemRender={(page, type, originalElement) => {
                    if (type === 'next') {
                        return (
                            <div className="box">
                                <b className="box-txt">»</b>
                            </div>
                        );
                    }
                    if (type === 'prev') {
                        return (
                            <div className="box">
                                <b className="box-txt">«</b>
                            </div>
                        );
                    }
                    if (type === 'page') {
                        return (
                            <div className="box">
                                <b className="box-txt">{page}</b>
                            </div>
                        );
                    }
                    return originalElement;
                }}
                current={pagenow + 1}
                onChange={onChange}
                total={total}
            />
        );
    }
}

export function FilterInput() {
    // const [searchParams, setSearchParams] = useSearchParams();
    const [selected, setSelected] = useState<Option[]>([]);
    const navigate = useNavigate();
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
        navigate('/filter?' + str);
        // console.log(str);
    };
    return (
        <>
        <Crumb/>
        <div className="filter-input-container" style={{ marginBottom: '10px' }}>
            <div className="list-movie-flilter-item">
                <label className="filter-eptype-label">Tiến Độ</label>
                <select
                    // value={status}
                    name="status"
                    id="filter-eptype"
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
                    <option value="2022">2022</option>
                    <option value="2021">2021</option>
                    <option value="2020">2020</option>
                    <option value="2019">2019</option>
                    <option value="2018">2018</option>
                    <option value="2017">2017</option>
                    <option value="2016">2016</option>
                    <option value="2015">2015</option>
                    <option value="2014">2014</option>
                    <option value="2013">2013</option>
                    <option value="2012">2012</option>
                    <option value="2011">2011</option>
                    <option value="2010">2010</option>
                </select>
            </div>
            <div className="list-movie-flilter-item">
                <label className="filter-eptype-label">Sắp xếp</label>
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

export function FilterAnime() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [paramList, setParamList] = useState<ParamFilter>();
    const [page, setPage] = useState<number>(0);
    const [listAll, setListAll] = useState<deltailAnimme[]>();
    const [list, setList] = useState<deltailAnimme[]>();
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
                await carouselApi.getListSearch(String(paramList?.name), 1, 100).then((res) => {
                    setList(res.data);
                });
            })();
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
    }, [paramList, listAll]);

    useEffect(() => {
        (async () => {
            await carouselApi.getListFilter().then((res) => {
                setListAll(res.data);
            });
        })();
    }, []);

    console.log('ren ui witd', list);

    return (
        <>
            <h1 className="header-list-index">
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
            </h1>
            <GridFilm list={list ? list.slice(page * 24, (page + 1) * 24) : undefined}></GridFilm>;
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
