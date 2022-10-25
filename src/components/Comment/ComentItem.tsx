import { ReactNode } from "react";





export function CommentItem({ children }:{children?:ReactNode}) {
    return (
        <div className="comment-item">
            <div className="comment-item-left">
                <div className="cmt-user-avatar-wrap"></div>
                <div className="cmt-btns">
                    <span className="cmt-reply" data-parent_id="17087">
                        Trả lời
                    </span>
                </div>
            </div>
            <div className="comment-item-right">
                <div className="cmt-meta-data">
                    <span className="cmt-username">Tus</span>
                    <span className="user-type user-type-user">Khách vãng lai</span>
                    <span className="cmt-datetime">khoảng 7 ngày trước</span>
                </div>
                <div className="content-cmt">má sạn có vũ khí mời à =))))</div>
            </div>
            <div style={{ marginLeft: '30px', marginTop: '20px' }}>{children}</div>
        </div>
    );
}
