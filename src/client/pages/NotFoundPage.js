/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react' ;
import styled from 'styled-components';
import img_tree from '../../assets/images/img_tree.gif';

const NotFoundContainer = styled.div`
     width:200px;
     height:200px;
     background-image:url(${img_tree});
`


const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true ;
    return (
        <div id="imgTree">
            <NotFoundContainer/>
            <h1>Ooops !! route not found. </h1>
        </div>
    );
}


export default {
    component: NotFoundPage
};