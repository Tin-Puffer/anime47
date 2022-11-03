import { CSSProperties } from "react";
import "./skeletonStyle.css"


function Skeleton({props}:{props: CSSProperties}) {
    // const { style = {} } = props;
    return (
        <div className="skeleton-container" style={{...props}}>
            <div className="skeleton-inner"></div>
        </div>
    );
}
export default Skeleton;
