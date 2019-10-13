import React from 'react';
import add from "../../static/icon/svg/add.svg"

const AddDestination = (props) =>
    <div style={flexEnable} onClick={props.onAdd}>
        <img src={add} style={addImage} />
        <label
            style={{
                color: '#507DF0',
                fontWeight: '500',
                marginLeft: '5px',
                pointerEvents: 'none'
            }}
        >
            Add Via Route
        </label>
    </div>

const flexEnable = {
    display: 'flex',
    alignItems: 'center',
    marginBottom: '5px',
    cursor: 'pointer'
}

const addImage = {
    height: '10px',
    marginLeft: '5px'
}

export default AddDestination