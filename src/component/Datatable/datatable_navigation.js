import React from 'react';
import './datatable_navigation.sass';
import {NavLink} from 'react-router-dom';

const data = ['Terminal', 'Divisions', 'Category', 'Equipment Type', 'Payment Terms']


const activeZIndex = (e) => {
    // arbitrary to set the index 
        let len = data.length
    // element that should be above all
        let el = e.target.parentElement

    // parent of that element
        let parentEl = el.parentElement

        for ( let child of parentEl.children) {
            child.style.zIndex = `${len}`;
            len--;
        }

    // set the z-index of clicked item
        el.style.zIndex = `${data.length + 1}`;

}

const DtNavs = () => 
    <div className="dtnavs">
        <ul>
            {
                data.map((item, index) => 
                    <li key={index} style={{zIndex: `${data.length - index}`}} onClick={activeZIndex}>
                        <NavLink to={`/${index}`} activeClassName="dtn-active">
                            {item}
                        </NavLink>
                    </li>    
                )
            }
        </ul>
    </div>

export default DtNavs