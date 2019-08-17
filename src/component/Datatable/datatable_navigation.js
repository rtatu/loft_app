import React from 'react';
import './datatable_navigation.sass';
import {NavLink} from 'react-router-dom';


const DtNavs = (props) => 
    <div className="dtnavs">
        <ul>
            {
                props.data.map((item, index) => 
                    <li key={index} >
                        <NavLink 
                            style={{zIndex: `${props.data.length - index}`}} 
                            to={`${props.baseLink}/${item.toLocaleLowerCase()}`} 
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