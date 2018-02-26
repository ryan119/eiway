/**
 * Created by ryan on 2018/2/26.
 */
import React, { Component } from 'react';

class Item extends Component {
    constructor(props){
        super(props);
    }

    componentDidMount() {

    }


    render() {
        console.log("params : " , this.props.match.params);
        const { itemId } = this.props.match.params
        return (
            <div>
                Item id : {itemId}
            </div>
        )
    }
}


export default {
    component: Item
}