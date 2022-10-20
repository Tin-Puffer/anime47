import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Login } from './features/auth/page';
import Register from './features/auth/page/Register';
import { SliderTop } from './components/Slider/Slider';
import CarouselHome from './features/auth/page/Home';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<CarouselHome></CarouselHome>}></Route>
                <Route
                    path="/login"
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            main={<Login></Login>}
                            // header={<CarouselHome></CarouselHome>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={<DefaultLayout offSelectCol={'off'} main={<Register></Register>}></DefaultLayout>}
                ></Route>

                <Route path="/*" element={<CarouselHome></CarouselHome>}></Route>
            </Routes>
        </div>
    );
}

export default App;
