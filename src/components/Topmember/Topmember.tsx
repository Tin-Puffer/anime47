import { StarTiTle } from '../MenuSelect';

import './topMember.scss';
export function TopMemberItem({ value, rank }: { value: topMember; rank: number }) {
    return (
        <div className="top-member-item">
            <span className="txt-rank">{rank}</span>
            <div className="t-item">
                <img src={value.img} style={{ width: '50px', height: '50px' }} className="avatar" />
                <div className="member-decript">
                    <h3 className="title">{value.name}</h3>
                    <span className="member-lv">
                        cấp
                        <img src={value.lever} alt="" />
                    </span>
                </div>
            </div>
        </div>
    );
}
 export interface topMember {
    id: string;
    name: string;
    img: string;
    lever: string;
}
interface PropMember {
    title: string;
    list: topMember[];
}
export function TopMember(props: PropMember) {
    const { title, list } = props;
    return (
        <div className="top-member-container">
            <StarTiTle lable={title}></StarTiTle>
            <div className="top-member-content">
                <div className="top-member-list">
                    {list.map((value, i) => (
                        <TopMemberItem key={i} value={value} rank={i + 1}></TopMemberItem>
                    ))}
                </div>
            </div>
        </div>
    );
}
