import { useRoutes, BrowserRouter, Navigate } from 'react-router-dom';
/* importar archivo App.css */
import './App.css';
import Login from '../Login';
import Index from '../Index';
import Nav from '../../components/Nav'
import Footer from '../../components/Footer';

const AppRoute = () => {
    let routes = useRoutes([
        { path: '/', element: localStorage.getItem('token') ? <Index /> : <Navigate to="/login" /> },
        { path: '/login', element: <Login /> },
    ]);
    return routes;
};

function App() {
    return (
        <BrowserRouter>
            <Nav />
            <AppRoute />
            <Footer />
        </BrowserRouter>
    );
}

export default App;