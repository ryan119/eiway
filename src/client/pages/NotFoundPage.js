/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react' ;

const NotFoundPage = ({ staticContext = {} }) => {
    staticContext.notFound = true ;
    return (
        <div>
            <h1>Ooops, route not found. </h1>
        </div>
    );
}


export default {
    component: NotFoundPage
};