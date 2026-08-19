import {Outlet} from 'react-router-dom';    
import MainLayout from './layouts/MainLayout';
import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Login from './pages/Login';

const routes = [
    {//lista de elementos de rutas, la barra tendra el mainlayout y el outlet, el path principal pongo home sino pongo about
        path: '/',
        element: <MainLayout>
            <Outlet /> 
        </MainLayout>,
        children: [
            {
                path: '/',
                element: <Home />,
            },
            {
                path: '/about',
                element: <About />,
            },
            {
                path: '*',
                element: <NotFound/>,
            },
            {
                path: '/login',
                element: <Login/>,
            }
     
],
},
]; 

export default routes;