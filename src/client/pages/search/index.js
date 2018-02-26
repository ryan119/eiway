/**
 * Created by ryan on 2018/2/26.
 */
import React, { Component } from 'react';
import { renderRoutes } from 'react-router-config' ;

const Search = ({route}) => {
    return (
        <div>
            {renderRoutes(route.routes)}
        </div>
    )
}


export default {
    component: Search
}