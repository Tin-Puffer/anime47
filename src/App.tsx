import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import {Login} from './features/auth/page';
import Register from './features/auth/page/Register';
import { SliderTop } from './components/Slider/Slider';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<Login></Login>}></Route>
                <Route
                    path="/login"
                    element={<DefaultLayout offSelectCol={'off'} main={<Login></Login>}></DefaultLayout>}
                ></Route>
                <Route
                    path="/register"
                    element={<DefaultLayout offSelectCol={'off'} main={<Register></Register>}></DefaultLayout>}
                ></Route>

                <Route path="/*" element={<Register></Register>}></Route>
            </Routes>
        </div>
    );
}

export default App;
