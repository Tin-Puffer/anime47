import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Login } from './features/auth/page';
import Register from './features/auth/page/Register';
import { SliderTop } from './components/Slider/Slider';
import { CarouselHome, Home } from './features/anime/Home';
import { FilterAnime, FilterInput } from './features/anime/FilterAnime';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route
                    path=""
                    element={
                        <DefaultLayout main={<Home></Home>} header={<CarouselHome></CarouselHome>}></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/login"
                    element={<DefaultLayout offSelectCol={'off'} main={<Login></Login>}></DefaultLayout>}
                ></Route>
                <Route
                    path="/register"
                    element={<DefaultLayout offSelectCol={'off'} main={<Register></Register>}></DefaultLayout>}
                ></Route>

                <Route
                    path="/filter/*"
                    // action={({ params }) => {
                    //     console.log(params['*']);
                    // }}
                    // loader={({ params }) => {
                    //     console.log(params['*']); // "one/two"
                    // }}
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            header={<FilterInput></FilterInput>}
                            main={<FilterAnime></FilterAnime>}
                        ></DefaultLayout>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
