import React from 'react';
import './Button.css';

function Button({ children, className, onClick, type, id  }) {

    return (
        <div>
            <button
                className={className}
                onClick={onClick}
                id={id}
                type={type}
            >
                {children}
            </button>
        </div>
    );
}

export default Button;