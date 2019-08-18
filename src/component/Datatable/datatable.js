import React from 'react'
import './datatable.sass'
import colResize from '../resize.js'
import DtConfig from './datatable_config'
import DTHEADER from './datatable_header'

// proto for sum
Array.prototype.sum = function(){
    return this.reduce((a,b) => a+b, 0)
}

// get the flex for calculated width
Array.prototype.getFlex = function(){
    let min = Math.min(...this)
    return this.map( item => parseInt(item / min ))

}

function getIn(data, prop) {
    let path = prop.split('.')
    let temp = data;
    // console.log(path)
    for (let p of path) {
        if(temp[p] != undefined && temp[p] != null && temp != "") {
            temp = temp[p]
        }
    }

    if(typeof temp == 'object') {
        return ""
    }

    if(typeof temp == 'boolean') {
        return temp ? 'True' : 'False'
    }

    // console.log(path, temp)
    return temp
}


const DatatableJSX = (props ) =>
    <div className="datatable">
        <div className="dthead">
            <ul className="dtr">
                {/* <li>
                    <input type="checkbox"/>
                </li> */}
                {
                    props.datatable_head.map( (item, index) =>
                        <li key={index}
                            className={`dtd col-${index}`}
                            style={(props.styles[`col-${index}`]) ? props.styles[`col-${index}`] : {}}
                        >
                            <span>{item.label}</span>
                            {/* <span className="resize-line" draggable={true} data-col={index}></span> */}
                        </li>
                    )
                }
            </ul>
        </div>

        <div className="dtbody">
            {
                props.data.map( (item, index) =>
                    <ul key={index} className="dtr">
                        {/* <li>
                            <input type="checkbox"/>
                        </li> */}
                        {
                            props.datatable_head.map( (nested_item, nested_index) =>
                                <li key={nested_index}
                                    className={`dtd col-${nested_index}`}
                                    style={(props.styles[`col-${nested_index}`]) ? props.styles[`col-${nested_index}`] : {}}
                                >
                                    {getIn(item, nested_item.prop)}
                                </li>
                            )
                        }
                    </ul>
                )
            }
        </div>

    </div>

class DatatableContainer extends React.Component {


    constructor(props) {
        super(props)
        this.state = {
            styles : {}
        }
    }

    componentDidMount() {

        if(this.props.data) {
            this.resizeEvent()
        }

    }

    componentWillUnmount() {

        // remove event listener
        if(this.colResize){
            this.colResize.removeEvent()
        }


    }

    resizeEvent = () => {

        let coloumns = []

        // get all the coloumns

        for ( let i = 0; i < DTHEADER[this.props.tableName].length; i++) {
            coloumns.push(document.getElementsByClassName(`col-${i}`))
        }

        // calculate autoWidth given by browser
        let colWidth = []

        // for every coloumn of columns get the maximum width
        for ( let coloumn of coloumns) {
            let width = 0
            for ( let cell of coloumn) {
                if(cell.offsetWidth  > width) {
                    width = cell.offsetWidth
                }
            }
            colWidth.push(parseInt(width))
        }

        // create styles used by calculated width
        /**
         * set the flex basis
         * set the min width
         * and flex property
         */
        let ind = 0
        let style = {}
        let flexValues = colWidth.getFlex()
        for ( let col of colWidth) {
            style[`col-${ind}`] = {
                flexBasis: `${col}px`,
                minWidth : `${col + 16}px`,
                flex: flexValues[ind]
            }
            ind++
        }

        this.setState({styles : {...style}})

        let thead = document.getElementsByClassName('dthead')[0]
        let tbody = document.getElementsByClassName('dtbody')[0]

        thead.style.minWidth = `${colWidth.sum() + (16*colWidth.length)}px`

        tbody.style.minWidth = `${colWidth.sum() + (16*colWidth.length)}px`

        // console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)


        // add event listener for resize
        this.colResize = new colResize('resize-line', this.pushStyles);
        this.colResize.addEvent()
    }

    pushStyles = (data, diffX, col) => {
        let styles = {...this.state.styles}
        styles[`col-${col}`] = {
            ...styles[`col-${col}`],
            // flexBasis : data + 'px',
            minWidth : data + 'px'
        }


        let thead = document.getElementsByClassName('dthead')[0]
        let tbody = document.getElementsByClassName('dtbody')[0]


        thead.style.minWidth = `${thead.offsetWidth + diffX}px`

        tbody.style.minWidth = `${tbody.offsetWidth + diffX}px`

        // console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)
        this.setState({styles})

    }



    render(){
        return (
            <div className="dt_container">
                {
                    this.props.data ?
                        <React.Fragment>
                            <DtConfig name={this.props.tableName}/>
                            <DatatableJSX
                                styles={this.state.styles}
                                datatable_head = {DTHEADER[this.props.tableName]}
                                data = {this.props.data}
                            />
                        </React.Fragment>
                    : null
                }
            </div>
        )
    }
}


export default DatatableContainer;