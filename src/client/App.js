/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react' ;
import { renderRoutes} from 'react-router-config';
import { fetchCurrentUser } from './pages/action' ;
import Header from './components/Header';
import Footer from './components/Footer';
import '../styles/index.css';
import styled, { css } from 'styled-components';
import media from '../styles/components/media' ;
import theme from '../styles/components/theme' ;

const Content = styled.div`
     /* 設定高度最小為100%, 如果內容區塊很多, 可以長大 */
    min-height: 100%;
    /* 位置設為relative, 作為footer區塊位置的參考 */
    position: relative;
    
    
    /* Now we have our methods on media and can use them instead of raw queries */
    ${media.desktop`background: ${theme.colors.blue};`}
    ${media.phablet`background: mediumseagreen;`}
    ${media.mobile`background: palevioletred;`}
`


const App = ({ route }) =>{
    return (
        <Content>
            <Header/>
            { renderRoutes(route.routes) }
            <Footer/>
        </Content>
    )
}

export default {
    component: App,
    loadData: ({ dispatch }) => dispatch(fetchCurrentUser())
}