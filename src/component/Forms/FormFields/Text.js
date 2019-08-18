import React from 'react';

const Text = ({label, handleChange}) =>
    <div className="field">
        <label>
            {label}
        </label>
        <input type="text" />
    </div>

export default Text