/**
 * Created by ryan on 2018/2/21.
 */
import App from './App';
import HomePage from './pages/HomePage';
import ProductsIntro from './pages/products';
import News from './pages/news';
import About from './pages/about';
import Contact from './pages/contact';
import Search from './pages/search';
import SearchProduct from './pages/search/Product';
import Item from './pages/search/Item';
import User from './pages/user';
import Login from './pages/user/Login';
import Register from './pages/user/Register';
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
                ...ProductsIntro,
                path: '/products'
            },
            {
                ...News,
                path: '/news'
            },
            {
                ...About,
                path: '/about'
            },
            {
                ...Contact,
                path: '/contact'
            },
            {
                ...User,
                path: '/user'
            },
            {
                ...Login,
                path: '/login'

            },
            {
                ...Register,
                path: '/register'
            },
            {
                ...Search,
                routes:[
                    {
                        ...SearchProduct,
                        path: '/search/',
                        exact: true,
                    },
                    {
                        ...Item,
                        path: '/search/:itemId'
                    },
                    {
                        ...NotFoundPage
                    }
                ]
            },

        ]
    }
];