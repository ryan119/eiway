/**
 * Created by ryan on 2018/2/21.
 */
import App from './App';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';

export default [
    {
        ...App,
        routes: [
            {
                ...HomePage,
                path: '/',
                exact: true
            },
            {
                ...NotFoundPage
            }
        ]
    }
];