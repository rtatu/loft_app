import React from 'react'

const DetailsInput = ({ label, name, value, defaultValue, handleSelect, type = "text" }) => (
    <div className="fo-input">
        <label style={{ marginBottom: '5px' }}>{label}</label>
        <input
            type={type}
            name={name}
            onChange={handleSelect}
            value={value}
            defaultValue={defaultValue}
        />
    </div>
);

export default DetailsInput