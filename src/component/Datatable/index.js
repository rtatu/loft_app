import DatatableContainer from './datatable';
import DtNavs from './datatable_navigation';
import Header from '../header';
import React from 'react';
import DtConfig from './datatable_config';

const Datatable = () => 
    <div style={{width:'100%', height:'100%', flex: 1, overflow:"hidden", display:'flex', flexDirection:'column'}}>
        <Header />
        <DtNavs />
        <DatatableContainer />
    </div>

export default Datatable;