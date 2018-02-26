/**
 * Created by ryan on 2018/2/21.
 */
import React from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';

const Header = ({ auth }) => {

    return (
            <div id="eiway_header">
                <ul>
                    <li><Link to="/"> EI-WAY Logo</Link></li>
                    <li><Link to="/products">產品介紹</Link></li>
                    <li><Link to="/news">最新消息</Link></li>
                    <li><Link to="/about">關於我們</Link></li>
                    <li><Link to="/contact">聯絡資訊</Link></li>
                    <li><Link to="/search">產品搜尋</Link></li>
                    <li><Link to="/login">登入</Link></li>
                </ul>
            </div>
    )
};

function mapStateToProps({ auth }) {
    return { auth }
}

export default connect(mapStateToProps, null)(Header);
