import React from 'react';
import './styles/sidebar.sass'


String.prototype.image_format = function(){
    let arr = this.split('_')

    arr = arr.map( item => item.replace(item.charAt(0), item.charAt(0).toUpperCase()))

    return arr.join(' ')
}

function importAll(r) {

    let image_name = r.keys().map(item => item.slice(2).split('.')[0]) // remove './' from the image name

    image_name = image_name.map( item => {
        if(item == 'ar_pr') {
            return 'AR/PR'
        }

        if(item == 'ifta'){
            return 'IFTA'
        }

        return item.image_format()
    })

    let hash_value = r.keys().map(r);

    let image_obj = {}

    image_name.map( (item, index) => {
        image_obj[item] = hash_value[index]
    })

    return image_obj
  }

const images = importAll(require.context('./../../static/icon/svg/', false, /\.(png|jpe?g|svg)$/));

const nav_bar = [
    {
        LOGISITCS : [
            'Order Entry',
            'Planner',
            'Dispatch Board'
        ]
    },
    {
        ACCOUNTING : [
            'Taxes',
            'IFTA',
            'AR/PR',
            'Driver Payroll'
        ]
    },
    {
        SERVICES : [
            'Purchase Order',
            'Maintenance',
            'Quotation',
            'Vendor Management',
            'Database Maintenance'
        ]
    }
]
const SidebarJSX = () =>
    <div className="sidebar">
        <div className="sidebar_logo sidebar_hide">
             <h1>Logo</h1>
        </div>
        <div className="sidebar_navs">
            <ul>
                <li><img src={images['Dashboard']}/><span className="sidebar_hide">Dashboard</span></li>
            </ul>
            {
                nav_bar.map( (item, index) =>
                    <ul key={index}>
                        <span className="nav_head sidebar_hide"  >{Object.keys(item)[0]}</span>
                        {
                            item[Object.keys(item)[0]].map( (nested_item, index) =>
                                <li key={index}>
                                    <img src={images[nested_item]}/>
                                    <span className="sidebar_hide">{nested_item}</span>
                                </li>
                            )
                        }
                    </ul>
                )
            }

            <ul className="more_options">
                <li id="collapse">
                    <img src={images["Collapse"]} />
                    <span className="sidebar_hide">Collapse Panel</span>
                </li>
                <li className="base_options">
                    <img src={images["Setting"]} />
                    <span className="sidebar_hide">Setting</span>
                </li>
                <li>
                    <img src={images["Logout"]} />
                    <span className="sidebar_hide">Log Out</span>
                </li>
            </ul>

        </div>
    </div>


class Sidebar extends React.Component {
    render(){
        return(
            <SidebarJSX />
        )
    }
}

export default Sidebar;