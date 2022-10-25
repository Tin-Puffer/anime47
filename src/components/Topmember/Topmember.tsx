import { StarTiTle } from '../MenuSelect';

import './topMember.scss';
export function TopMemberItem() {
    return (
        <div className="top-member-item">
            <span className="txt-rank">01</span>
            <div className="t-item">
                <img
                    src="https://media.tenor.com/9dSDFGuqO00AAAAd/dddd.gif"
                    style={{ width: '50px', height: '50px' }}
                    className="avatar"
                />
                <div className="member-decript">
                    <h3 className="title">hoangtuqlns</h3>
                    <span className="member-lv">
                        cấp
                        <img src="https://anime47.com/skin/24032017/img/gb_rank/02.png" alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
}
export function TopMember() {
    return (
        <div className="top-member-container">
            <StarTiTle lable="??"></StarTiTle>
            <div className="top-member-content">
                <div className="top-member-list">
                    <TopMemberItem></TopMemberItem>
                    <TopMemberItem></TopMemberItem>
                    <TopMemberItem></TopMemberItem>
                    <TopMemberItem></TopMemberItem>
                    <TopMemberItem></TopMemberItem>
                </div>
            </div>
        </div>
    );
}
