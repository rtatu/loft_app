import React from 'react';
import down from '../../../static/icon/down.svg'

const values = ['ACTIVE', 'INACTIVE']

class Select extends React.Component{
    // constructor

    constructor(props) {
        console.log(props)
        super(props)

        // create refs

        this.state = {
            show : false
        }

        this.input = React.createRef()
        this.list = React.createRef()
    }

    componentDidMount(){
        document.addEventListener('mousedown', this.handleClick, false)
    }

    componentWillUnmount(){
        document.removeEventListener('mousedown', this.handleClick, false)
    }

    handleClick = (e) => {
        if(e.target == this.input.current){
            e.preventDefault()
            this.input.current.focus()
            return
        }

        this.setState({show : false})

    }

    onDownClick = (e) => {

        e.preventDefault()

        if(!this.state.show){
                this.input.current.focus()
        }else{
                this.input.current.blur()    
        }

    }


    onInputFocus = (e) => {
        this.setState({show : true}, () => console.log(this.state))
    }

    onInputBlur = (e) => {
        this.setState({show : false})
    }



    render(){
        if(this.state.show){
            console.log('1')
        }
        return(
            <div className="field">
                <label>
                    {this.props.label}
                </label>
                <input 
                    type="text" 
                    ref={this.input}
                    onBlur={this.onInputBlur}
                    onFocus={this.onInputFocus}
                />
                <img 
                    src={down} 
                    className="select-down" 
                    onClick={this.onDownClick}
                />
                {
                    (this.state.show)
                    ?
                    <ul className="select" ref={this.list}>
                        {
                            values.map( (value, index) => 
                                <li key={index}>
                                    {value}
                                </li>
                            )
                        }
                    </ul>
                    : 
                    null
                    
                }
            </div>
        )
    }
}

export default Select