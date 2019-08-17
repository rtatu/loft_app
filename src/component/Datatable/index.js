import DatatableContainer from './datatable';
import DtNavs from './datatable_navigation';
import Header from '../header';
import React from 'react';
import DtConfig from './datatable_config';
import { ArchiveContext } from '../../context/archiveContext';

Array.prototype.cameltoLabel = function(){
    let regExp = /[A-Z]/g
    
    let tempArray = []

    for (let item of this){
        let pushData = []
        let tempString = item;
        let match;
        while( (match = regExp.exec(item))!=null) {
            let splittedString = tempString.split(match[0])[0]

            pushData.push(splittedString.charAt(0).toLocaleUpperCase() + splittedString.slice(1))

            tempString = tempString.slice(splittedString.length)

        }

        pushData.push(tempString.charAt(0).toLocaleUpperCase() + tempString.slice(1))

        tempArray.push(pushData.join(' '))
    }

    return tempArray
}

const style = {
    width:'100%',
    height:'100%',
    flex: 1,
    overflow:"hidden",
    display:'flex',
    flexDirection:'column'
}

Array.prototype.toUppperCase = function(){
    let tempArray = []
    for (let string of this){
        tempArray.push(string.charAt(0).toLocaleUpperCase() + string.slice(1))
    }
    return tempArray
}

const Datatable = (props) => 
    <ArchiveContext.Consumer>
        {
            context =>  {
                let navigateData;
                if(context.datastore[props.navigate]) {
                    navigateData = context.datastore[props.navigate].data
                    console.log('navigateData', navigateData)
                }
                let data;
                if(props.tableName) {
                    data = Object.values(navigateData[props.tableName])
                }

                return(
                    <div style={style}>
                        <Header />
                        {
                        (navigateData) ? 
                        <React.Fragment>
                            <DtNavs 
                                data={Object.keys(navigateData).toUppperCase()} 
                                baseLink={`/database-maintenance/${props.navigate}`}
                                key={props.navigate}
                            />
                        {
                         (data) ?
                         <DatatableContainer 
                            data={data}
                            tableName={props.tableName}
                            key={props.tableName}
                            header={(data[0]) ? Object.keys(data[0]).cameltoLabel() : null}
                            table_prop_type={(data[0]) ? Object.keys(data[0]) : null}
                        />
                        : null
                        }
                            
                        </React.Fragment>
                        : null
                        }
                    </div>
            )}
        }
    </ArchiveContext.Consumer>

export default Datatable;