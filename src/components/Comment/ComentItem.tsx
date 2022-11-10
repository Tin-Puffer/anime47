import { useState } from 'react';
import { comment } from '../../model';
import { BoxComment } from './Coment';

export function CommentItem({ reply = true, listComment }: { reply?: boolean; listComment?: comment }) {
    const [boxComent, SetBoxComent] = useState('');
    function close() {
        SetBoxComent('');
    }
    function handleReply(e: string) {
        if (boxComent !== '') SetBoxComent('');
        else SetBoxComent(e);
    }
    return (
        <div className="comment-item">
            {listComment &&
                listComment.listComentAll.map((e, i) => {
                    const dateComment: Date = new Date(e.time);

                    return (
                        <div key={i} className="container-coment-itme">
                            <div className="comment-item-left">
                                <div
                                    className="cmt-user-avatar-wrap"
                                    style={{
                                        backgroundImage: `url(${
                                            !!e.img.length ? e.img : 'https://iili.io/pwDwp2.jpg'
                                        })`,
                                    }}
                                ></div>
                                <div className="cmt-btns">
                                    {reply && (
                                        <span className="cmt-reply" onClick={() => handleReply(e.id)}>
                                            Trả lời
                                        </span>
                                    )}
                                </div>
                            </div>
                            <div className="comment-item-right">
                                <div className="cmt-meta-data">
                                    <span className="cmt-username">{e.name}</span>
                                    {e.type === 2 ? (
                                        <span className="user-type user-type-user">Khách vãng lai</span>
                                    ) : (
                                        <span className="user-type user-type-user-member">Thành Viên</span>
                                    )}
                                    <span className="cmt-datetime">{dateComment.toDateString()}</span>
                                </div>
                                <div className="content-cmt">{e.content}</div>
                            </div>
                            {boxComent === e.id && (
                                <div style={{ marginLeft: '30px' }}>
                                    <BoxComment
                                        childID={e.id}
                                        IdFIlm={listComment.idFilm}
                                        closeReply={() => close()}
                                    ></BoxComment>
                                </div>
                            )}
                            {!!e.listRep.length &&
                                e.listRep.map((item, i) => {
                                    const dateComment: Date = new Date(item.time);
                                    return (
                                        <div key={i} style={{ marginLeft: '30px', marginTop: '20px' }}>
                                            <div className="comment-item-left">
                                                <div
                                                    className="cmt-user-avatar-wrap"
                                                    style={{
                                                        backgroundImage: `url(${
                                                            !!item.img.length ? item.img : 'https://iili.io/pwDwp2.jpg'
                                                        })`,
                                                    }}
                                                ></div>
                                                <div className="cmt-btns"></div>
                                            </div>
                                            <div className="comment-item-right">
                                                <div className="cmt-meta-data">
                                                    <span className="cmt-username">{item.name}</span>
                                                    {item.type === 2 ? (
                                                        <span className="user-type user-type-user">Khách vãng lai</span>
                                                    ) : (
                                                        <span className="user-type user-type-user-member">
                                                            Thành Viên
                                                        </span>
                                                    )}
                                                    <span className="cmt-datetime">{dateComment.toDateString()}</span>
                                                </div>
                                                <div className="content-cmt">{item.content}</div>
                                            </div>
                                        </div>
                                    );
                                })}
                        </div>
                    );
                })}
        </div>
    );
}
