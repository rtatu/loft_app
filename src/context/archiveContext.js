import React from 'react'


// creating context
const ArchiveContext = React.createContext();


// creating provider

class ArchiveProvider extends React.Component {
    // define the state
   

    constructor(props){
        super(props)

        console.log(props)

        this.state = {...this.props.yolo}

    }

    /* actions */
    /* add to data store */
    /**
     * @params {path, data}
     * @return {true -> on added, ErrorMessage -> on errorMessage}
     */
    addToStore = (path, data) => {
        console.log("added")
    }


    // remove from data store
    /**
     * @param {path, id}
     * @return {true, ErrorMessage}
     */
    removefromStore = (path, id) => {
        console.log("removed")
    }


    // update in data store
    /**
     * @param {path, id, data}
     * @return {true, ErrorMessage}
     */
    updateInStore = (path, id, data) => {
        console.log("updated")
    }


    changeSomething = () => {
        
        this.setState({datastore : {
            list : {
                vendor : {

                }
            }
        }})
    }


    render(){
        return(
            <ArchiveContext.Provider
                value = {{
                    datastore : this.state.datastore,
                    addToStore : this.addToStore,
                    removefromStore : this.removefromStore,
                    updateInStore : this.updateInStore,
                    changeSomething : this.changeSomething
                }}
            >
                {
                    this.props.children
                }
            </ArchiveContext.Provider>
        )
    }

}


export default ArchiveProvider;
export {ArchiveContext}

