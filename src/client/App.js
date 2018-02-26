/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react' ;
import { renderRoutes} from 'react-router-config';
import { fetchCurrentUser } from './pages/action' ;
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/index.css';

const App = ({ route }) =>{
    return (
        <div id="eiway_wrapper">
            <Header/>
            { renderRoutes(route.routes) }
            <Footer/>
        </div>
    )
}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}