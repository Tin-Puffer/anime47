import Header from "../Header/Header";
function Bottom() {
    return <div> This iss Sidebar </div>;
}

function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            <div className="container">
                <div className="content">{children}</div>
            </div>
            <Bottom />
        </div>
    );
}
export default DefaultLayout;
