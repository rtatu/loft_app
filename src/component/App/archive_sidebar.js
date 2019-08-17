import React from 'react';
import Collapse from './../../static/icon/svg/collapse.svg';
import './sidebar.sass'
import {NavLink} from 'react-router-dom'
import {archiveNav} from './navbar_data'

function importAllImages(r) {
    let image_obj = r.keys().map(r);
    return image_obj
}

// import all sidebar icon

const sidebarImages = importAllImages(require.context(
    './../../static/icon/svg/archive',
    false,
    /\.(png|jpe?g|svg)$/
))





const ArchiveSidebarJSX = () =>
    <div className="sidebar">
        <div className="sidebar_logo sidebar_hide">
            <h1>Logo</h1>
        </div>
        <div className="sidebar_navs">
            <ul style={{marginTop : "10px"}}>
                <span className="archive_nav_head sidebar_hide"  >DATA MAINTENANCE</span>
                {
                    archiveNav.map( (item, index) =>
                        <li key={index}>
                            <NavLink activeClassName="active" to={`${item.path}`}>
                                <img src={sidebarImages[index]} style={{width : "10px"}}/>
                                <span className="sidebar_hide">{item.label}</span>
                            </NavLink>
                        </li>
                    )
                }
            </ul>

            <ul className="more_options">
                <li id="collapse">
                    <img src={Collapse} />
                    <span className="sidebar_hide">Collapse Panel</span>
                </li>
            </ul>
        </div>
    </div>

export default ArchiveSidebarJSX