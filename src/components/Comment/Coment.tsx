import TextArea from 'antd/lib/input/TextArea';
import openNotification from '../Notyfication/notyfication';
import { Col, Row } from 'antd';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { commentAction } from '../../features/anime/commentSlipe';
import { comment, commentItemAdd } from '../../model';
import { CommentItem } from './ComentItem';
import './CommentSytle.scss';

export function BoxComment({
    childID,
    IdFIlm,
    closeReply,
}: {
    childID?: string;
    IdFIlm: string;
    closeReply?: Function;
}) {
    const user = useAppSelector((state) => state.auth.currentUser);
    const dispatch = useAppDispatch();
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [content, setCtent] = useState('');
    const handelClickSend = () => {
        const now = new Date();
        if (content !== '')
            if (!user) {
                if (name === '' && email === '') {
                    openNotification('notify', 'NAME AND MAIL REQURED');
                } else {
                    const cmtTmp: commentItemAdd = {
                        idFilm: IdFIlm,
                        idChild: childID,
                        item: {
                            id: '',
                            name: name,
                            img: '',
                            type: 1,
                            content: content,
                            time: now.toDateString(),
                            listRep: [],
                        },
                    };
                    setName('');
                    setCtent('');
                    setEmail('');
                    dispatch(commentAction.addItemComment(cmtTmp));
                    openNotification('success', 'ADD COMMENT SUCSESS');
                    if (closeReply) closeReply();
                }
            } else {
                const cmtTmp: commentItemAdd = {
                    idFilm: IdFIlm,
                    idChild: childID,
                    item: {
                        id: '',
                        name: user.name,
                        img: user.img,
                        type: 2,
                        content: content,
                        time: now.toDateString(),
                        listRep: [],
                    },
                };
                setName('');
                setCtent('');
                setEmail('');
                openNotification('success', 'ADD COMMENT SUCSESS');
                dispatch(commentAction.addItemComment(cmtTmp));
                if (closeReply) closeReply();
            }
        else openNotification('notify', 'CONTENT IS NOT EMPTY');
    };
    return (
        <div className="">
            <div className="my-coment">
                <Row gutter={[20, 0]}>
                    <Col xs={24} md={24} lg={12}>
                        <input
                            className="name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Nhập tên của bạn (Bắt buộc)"
                        ></input>
                    </Col>
                    <Col xs={24} md={24} lg={12}>
                        <input
                            className="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="Nhập email của bạn (Bắt buộc nếu bạn chưa đăng nhập)"
                        ></input>
                    </Col>
                </Row>
                <div className="content">
                    <TextArea rows={4} value={content} onChange={(e) => setCtent(e.target.value)} />
                </div>
                <div className="form-input">
                    <button type="button" id="" className="cm-now btn btn-primary " onClick={handelClickSend}>
                        Gửi
                    </button>
                </div>
            </div>
        </div>
    );
}

export function Comment({ CmList }: { CmList: comment }) {
    return (
        <div className="play_comment">
            <BoxComment IdFIlm={CmList.idFilm}></BoxComment>
            <div style={{ padding: '10px' }}>
                <CommentItem listComment={CmList}></CommentItem>
            </div>
            <div className="paginationCustomFilter"></div>
        </div>
    );
}
