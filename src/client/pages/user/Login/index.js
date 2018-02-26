/**
 * Created by ryan on 2018/2/26.
 */
import React, { Component } from 'react';
import { Link } from 'react-router-dom'

class Login extends Component {
    render() {
        return (
            <div id="eiway_content">
                <div>Login Page</div>

                <div>
                    <Link to="/register">註冊</Link>
                </div>
            </div>

        )
    }
}

export default {
    component: Login
}