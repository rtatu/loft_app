import React from 'react';
import './datatable_navigation.sass';
import {NavLink} from 'react-router-dom';

const data = ['Terminal', 'Divisions', 'Category', 'Equipment Type', 'Payment Terms']


const DtNavs = () => 
    <div className="dtnavs">
        <ul>
            {
                data.map((item, index) => 
                    <li key={index} >
                        <NavLink 
                            style={{zIndex: `${data.length - index}`}} 
                            to={`/${index}`} 
                            activeClassName="dtn-active"
                            activeStyle={{zIndex: 100}}
                        >
                            {item}
                        </NavLink>
                    </li>    
                )
            }
        </ul>
    </div>

export default DtNavs