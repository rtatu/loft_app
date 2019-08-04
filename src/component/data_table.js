import React from 'react';
import Data from './../../static/MOCK_DATA.json';
import './styles/datatable.sass';

// header
const datatable_head = Object.keys(Data[0])
const keys = [...datatable_head]


Array.prototype.sum = function(){
    return this.reduce((a,b) => a+b, 0)
}



console.log(Data)

const DatatableJSX = (props ) =>
    <div className="datatable">
        <div className="dthead">
            <ul className="dtr">
                {
                    datatable_head.map( (item, index) =>
                        <li key={index}
                            className={`dtd col-${index}`}
                            style={(props.styles[`col-${index}`]) ? props.styles[`col-${index}`] : {}}
                        >
                            {item}
                        </li>
                    )
                }
            </ul>
        </div>

        <div className="dtbody">
            {
                Data.map( (item, index) =>
                    <ul key={index} className="dtr">
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
            calculated : true,
            styles : {}
        }
    }

    componentDidMount() {

        let coloumns = []
        // get all the coloumns
        for ( let i = 0; i < datatable_head.length; i++) {
            coloumns.push(document.getElementsByClassName(`col-${i}`))
        }

        let colWidth = []

        for ( let coloumn of coloumns) {
            let width = 0
            for ( let cell of coloumn) {
                if(cell.offsetWidth  > width) {
                    width = cell.offsetWidth
                }
            }
            colWidth.push(parseInt(width))
        }

        let ind = 0
        let style = {}
        for ( let col of colWidth) {
            style[`col-${ind}`] = {
                flexBasis: `${col}px`,
                minWidth : `${col}px`,
                flex: 1
            }
            ind++

        }

        this.setState({styles : {...style}})

        let thead = document.getElementsByClassName('dthead')[0]
        let tbody = document.getElementsByClassName('dtbody')[0]

        console.log(thead)

        thead.style.minWidth = `${colWidth.sum() + (10*colWidth.length)}px`
        console.log('after',thead.style.minWidth)

        tbody.style.minWidth = `${colWidth.sum() + (10*colWidth.length)}px`




        // this.setState({calculated : false})
    }

    render(){
        return (
            (!this.state.calculated) ?
            <h1>Loading</h1>
            : <DatatableJSX styles={this.state.styles}/>
        )
    }
}

export default DatatableContainer;