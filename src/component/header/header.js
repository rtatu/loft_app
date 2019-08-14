import React from 'react';
import './header.sass'

// add images

import search from './../../static/icon/search.svg';
import notification from './../../static/icon/notification.svg';
import profile from '../../static/avatar_user.jpg';



const Header = () => 
    <div className="header">
        <div className="header-search">
            <img src={search}/>
            <input placeholder="Search for lists name, tables and help..." type="text"/>
        </div>

        <div className="header-profile">
            <img src={profile}/>    
            <div className="user-info">
                <p className="user-name">Rohit Tatu</p>
                <p className="user-role">Database Administrator</p>
            </div>
        </div>

        <img src={notification}/>

    </div>


export default Header