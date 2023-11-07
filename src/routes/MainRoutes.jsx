import { lazy } from 'react';
import { Navigate } from 'react-router-dom';
import Loadable from '../ui-component/Loadable';

// sample page routing
const DefaultPage = Loadable(lazy(() => import('../views/DefaultPage')));
// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    children: [
        {
            path: '/',
            element: <DefaultPage />
        },
        {
            path: '*',
            element: <Navigate to="/" />
        }
    ]
};

export default MainRoutes;
