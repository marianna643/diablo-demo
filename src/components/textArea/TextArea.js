import React from "react";
import "./TextArea.css"

function TextArea({ children, type, id, value, onChange, accept, rows}) {
    return (
        <>
            <div className="form-item">
                <label htmlFor={id}
                       className="form-title"
                >
                    {children}
                    <textarea
                        className="form-comment"
                        type={type}
                        id={id}
                        value={value}
                        rows={rows}
                        onChange={onChange}
                        accept={accept}
                        required
                    />
                </label>
            </div>
        </>
    );
}

export default TextArea;