import { useState } from 'react';
import { MultiSelect } from 'react-multi-select-component';
import { GridFilm } from './Home';
import { Pagination } from 'antd';
import './filterAnime.scss';
const options = [
    { label: 'Grapes ', value: '1' },
    { label: 'Mango ', value: '2' },
    { label: 'Mango ', value: '4' },
    { label: 'Mango ', value: '3' },
];
export function PaginationCustom() {
    const [current, setCurrent] = useState(3);

    const onChange = (page: number) => {
        console.log(page);
        setCurrent(page);
    };
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
            current={current}
            onChange={onChange}
            total={5}
        />
    );
}
export function FilterInput() {
    const [selected, setSelected] = useState([]);
    const [status, setStatus] = useState();
    const [seasion, setSeasion] = useState();
    const [year, setYear] = useState();
    const [sort, setSrot] = useState();
    return (
        <div className="filter-input-container" style={{ marginBottom: '10px' }}>
            <div className="list-movie-flilter-item">
                <label className="filter-eptype-label">Tiến Độ</label>
                <select
                    value={status}
                    name="status"
                    onChange={(e) => {
                        console.log(e.target.value);
                    }}
                    id="filter-eptype"
                    className="from-control"
                >
                    <option value="all">Tất cả</option>
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
                <select name="season" id="filter-eptype" className="from-control">
                    <option value="all">Tất cả</option>
                    <option value="finish">Xuân</option>
                    <option value="unfinish">Hạ</option>
                    <option value="unfinish">Thu</option>
                    <option value="unfinish">Đông</option>
                </select>
            </div>
            <div className="list-movie-flilter-item">
                <label className="filter-eptype-label">Năm phát hành</label>
                <select name="year" id="filter-eptype" className="from-control">
                    <option value="">Tất cả</option>
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
                <select name="sort" id="filter-eptype" className="from-control">
                    <option value="popular">Lượt xem</option>
                    <option value="comment">Bình luận</option>
                    <option value="year">Năm</option>
                </select>
            </div>
            <button type="submit" id="btn-movie-filter" className="btn btn-red btn-filter-movie">
                <span>Duyệt phim</span>
            </button>
        </div>
    );
}

export function FilterAnime() {
    return (
        <>
            <h1 className="header-list-index">
                <span className="title-list-index">THỂ LOẠI PHIM : Lịch Sử - Anime Vietsub Online</span>
            </h1>
            {/* <GridFilm></GridFilm>; */}
            <div className="paginationCustomFilter" style={{ margin: '20px 0' }}>
                <PaginationCustom></PaginationCustom>
            </div>
        </>
    );
}
