import React from 'react';

const Textarea = ({label, handleChange}) =>
    <div className="field textarea">
        <label>
            {label}
        </label>
        <textarea />
    </div>

export default Textarea