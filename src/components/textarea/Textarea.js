import React from "react";
import "./textarea.styles.scss";

const Textarea = () => {
    return (
        <div className="input-form">
            <label className="input-label">
                {label}
                <div className="textarea-field">
                    <textarea row="20" cols="50" name={name} value={value} placeholder={placeholder} onChange={onChange} />
                </div>
            </label>
        </div>
    )
}

export default Textarea
