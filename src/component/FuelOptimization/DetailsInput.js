import React from 'react'

const DetailsInput = ({ label, name, value, handleChange, type = "text" }) => (
    <div className="fo-input">
        <label style={{ marginBottom: '5px' }}>{label}</label>
        <input
            type={type}
            name={name}
            onChange={handleChange}
            value={value}
            onChange={(e) => handleChange(e, name)}
        />
    </div>
);

export default DetailsInput