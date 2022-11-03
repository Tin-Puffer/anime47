import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Login } from './features/auth/page';
import Register from './features/auth/page/Register';
import { FilterAnime, FilterInput, CarouselHome, Home, AnimeDetail } from './features/anime';
import { AnimeWatch } from './features/anime/AnimeWatch';
import { Crumb } from './components/Beadcrumb/BreadCrumb';

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
                    path="/anime/:id"
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            header={<Crumb></Crumb>}
                            main={<AnimeDetail></AnimeDetail>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/filter/*"
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            header={<FilterInput></FilterInput>}
                            main={<FilterAnime></FilterAnime>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/watch/*"
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            main={<AnimeWatch></AnimeWatch>}
                            header={<Crumb></Crumb>}
                        ></DefaultLayout>
                    }
                ></Route>
            </Routes>
        </div>
    );
}

export default App;
