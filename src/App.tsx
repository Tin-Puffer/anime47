import './App.css';
import { Routes, Route } from 'react-router-dom';
import DefaultLayout from './components/Layouts/DefaultLayout';
import Login from './features/auth/page/Login';
import Register from './features/auth/page/Register';

function App() {
    return (
        <div className="App">
            <Routes>
                <Route path="" element={<Login></Login>}></Route>
                <Route
                    path="/login"
                    element={
                        <DefaultLayout>
                            <Login></Login>
                        </DefaultLayout>
                    }
                ></Route>
                <Route
                    path="/register"
                    element={
                        <DefaultLayout>
                            <Register></Register>
                        </DefaultLayout>
                    }
                ></Route>

                <Route path="/*" element={<Register></Register>}></Route>
            </Routes>
        </div>
    );
}

export default App;
