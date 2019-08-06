import React from 'react';
import DataSet from './../../static/MOCK.json';
import './styles/datatable.sass';
import Proptypes from 'prop-types'
import colResize from './resize.js';

let Data = DataSet.slice(0)


/**
 * 1. Add proptypes and default value
 */

// test data
const datatable_head = Object.keys(Data[0])
const keys = [...datatable_head]



// proto for sum
Array.prototype.sum = function(){
    return this.reduce((a,b) => a+b, 0)
}

// get the flex for calculated width
Array.prototype.getFlex = function(){
    let min = Math.min(...this)
    return this.map( item => parseInt(item / min ))

}

const DatatableJSX = (props ) =>
    <div className="datatable">
        <div className="dthead">
            <ul className="dtr">
                {/* <li>
                    <input type="checkbox"/>
                </li> */}
                {
                    datatable_head.map( (item, index) =>
                        <li key={index}
                            className={`dtd col-${index}`}
                            style={(props.styles[`col-${index}`]) ? props.styles[`col-${index}`] : {}}
                        >
                            <span>{item}</span>
                            <span className="resize-line" draggable={true} data-col={index}></span>
                        </li>
                    )
                }
            </ul>
        </div>

        <div className="dtbody">
            {
                Data.map( (item, index) =>
                    <ul key={index} className="dtr">
                        {/* <li>
                            <input type="checkbox"/>
                        </li> */}
                        {
                            keys.map( (nested_item, nested_index) =>
                                <li key={nested_index}
                                    className={`dtd col-${nested_index}`}
                                    style={(props.styles[`col-${nested_index}`]) ? props.styles[`col-${nested_index}`] : {}}
                                >
                                    {item[nested_item]}
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

        let coloumns = []

        // get all the coloumns

        for ( let i = 0; i < datatable_head.length; i++) {
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

        console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)


        // add event listener for resize
        this.colResize = new colResize('resize-line', this.pushStyles);
        this.colResize.addEvent()

    }

    componentWillUnmount() {

        // remove event listener
        this.colResize.removeEvent()


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

        console.log(tbody.style.minWidth, tbody.offsetWidth, thead.offsetWidth, thead.style.minWidth)
        this.setState({styles})

    }



    render(){
        return (
            <DatatableJSX styles={this.state.styles}/>
        )
    }
}


// propTypes

DatatableContainer.propTypes = {
    data : Proptypes.array.isRequired,
    width : Proptypes.number,
    height : Proptypes.number
}

export default DatatableContainer;