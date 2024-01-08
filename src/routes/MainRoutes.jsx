import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// sample page routing
const Clients = Loadable(lazy(() => import('../views/clients/Clients')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <Clients />
        },
        {
            path: '*',
            element: <Navigate to="/" />
        }
    ]
};

export default MainRoutes;
