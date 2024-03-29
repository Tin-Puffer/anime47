import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import { Login } from './features/auth/page';
import Register from './features/auth/page/Register';
import { FilterAnime, FilterInput, Home, AnimeDetail } from './features/anime/page';
import { useEffect } from 'react';
import { AnimeWatch } from './features/anime/page/AnimeWatch';
import { Crumb } from './components/Beadcrumb/BreadCrumb';
import DetailAcount from './features/auth/page/DedtailAcount';
import { CarouselHome } from './components/Carousel/Carousel';

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
                    element={
                        <DefaultLayout
                            header={<Crumb></Crumb>}
                            offSelectCol={'off'}
                            main={<Login></Login>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/deltailaccount"
                    element={
                        <DefaultLayout
                            header={<Crumb></Crumb>}
                            offSelectCol={'off'}
                            main={<DetailAcount></DetailAcount>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <DefaultLayout
                            header={<Crumb></Crumb>}
                            offSelectCol={'off'}
                            main={<Register></Register>}
                        ></DefaultLayout>
                    }
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
                            header={<FilterInput movieCabinet={false}></FilterInput>}
                            main={<FilterAnime detailAccount={false}></FilterAnime>}
                        ></DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/moviecabinet/:id"
                    element={
                        <DefaultLayout
                            offSelectCol={'off'}
                            header={<FilterInput movieCabinet={true}></FilterInput>}
                            main={<FilterAnime detailAccount={true}></FilterAnime>}
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
