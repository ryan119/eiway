/**
 * Created by ryan on 2018/2/26.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class SearchProduct extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }


    render() {
        console.log("params : " , this.props.match);
        const { itemId } = this.props.match.params
        return (
            <div>
                Search Product Page1111

                <div><Link to="/search/1234566">item</Link></div>
                {itemId}
            </div>
        )
    }
}


export default {
    component: SearchProduct
}