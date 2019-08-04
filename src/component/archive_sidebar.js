import React from 'react';
import Collapse from './../../static/icon/svg/collapse.svg';

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

const archiveNav = [
    'Customers',
    'Prospects',
    'Shippers/Consignees',
    'OutSide Carriers',
    'Misc. Vendors',
    'Customs Broker',
    'Standard Charges',
    'Jurisdictions',
    'Resources',
    'Payroll Schedules',
    'Standard Templates',
    'Lists',
    'Comissions',
    'Master Orders',
    'Travel Times'
]

const SidebarJSX = () =>
    <div className="sidebar">
        <div className="sidebar_logo sidebar_hide">
            <h1>Logo</h1>
        </div>
        <div className="sidebar_navs">
            <ul style={{marginTop : "10px"}}>
                <span className="archive_nav_head sidebar_hide"  >DATA MAINTENANCE</span>
                {
                    archiveNav.map( (nested_item, index) =>
                        <li key={index}>
                            <img src={sidebarImages[index]} style={{width : "10px"}}/>
                            <span className="sidebar_hide">{nested_item}</span>
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

export default SidebarJSX