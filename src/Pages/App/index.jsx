import { useRoutes, BrowserRouter } from 'react-router-dom';
import './App.css'
import { Index } from '../Index';
import Nav from '../../components/Nav';
import Footer from '../../components/Footer';

const AppRoute = () => {
    let route = useRoutes([
        { path: '/', element: <Index /> },
    ]);
    return route
}

function App() {
    return (
        <>
            <BrowserRouter>
                <Nav />
                <AppRoute />
                <Footer />
            </BrowserRouter>
        </>
    )
}

export default App