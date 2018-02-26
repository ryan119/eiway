/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react' ;
import { renderRoutes} from 'react-router-config';
import { fetchCurrentUser } from './pages/action' ;
import Header from './components/Header';


const App = ({ route }) =>{
    return (
        <div>
            <Header/>
            { renderRoutes(route.routes) }
        </div>
    )
}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}