import { Col, Row, Input } from 'antd';
import { PaginationCustom } from '../../features/anime';
import { CommentItem } from './ComentItem';
import './CommentSytle.scss';
export function Comment() {
    const { TextArea } = Input;
    return (
        <div className="play_comment">
            <div className="my-coment">
                <Row gutter={[20, 0]}>
                    <Col xs={24} md={24} lg={12}>
                        <input className="name" placeholder="Nhập tên của bạn (Bắt buộc)"></input>
                    </Col>
                    <Col xs={24} md={24} lg={12}>
                        <input
                            className="email"
                            placeholder="Nhập email của bạn (Bắt buộc nếu bạn chưa đăng nhập)"
                        ></input>
                    </Col>
                </Row>
                <div className="content">
                    <TextArea rows={4} />
                </div>
                <div className="form-input">
                    <button type="button" id="" className="cm-now btn btn-primary ">
                        Gửi
                    </button>
                </div>
                <div style={{ marginTop: '30px' }}>
                    <CommentItem>
                        <CommentItem></CommentItem>
                        <CommentItem></CommentItem>
                    </CommentItem>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                    <CommentItem></CommentItem>
                </div>
                <div className="paginationCustomFilter" >
                    {/* <PaginationCustom></PaginationCustom> */}
                </div>
            </div>
        </div>
    );
}
