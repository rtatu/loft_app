import React from 'react';

const Date = ({label, handleChange}) =>
    <div className="field">
        <label>
            {label}
        </label>
        <input type="date" />
    </div>

export default Date