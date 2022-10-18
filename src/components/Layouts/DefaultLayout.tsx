import Footer from '../Footer/Footet';
import Header from '../Header/Header';

function DefaultLayout({ children }: any) {
    return (
        <div>
            <Header />
            <div>
                <div className="content">{children}</div>
            </div>
            <Footer></Footer>
        </div>
    );
}
export default DefaultLayout;
