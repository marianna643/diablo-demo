import React from "react";
import './Input.css';


export default function Input({ value, children , id, name, type, errors, register, required, accept, minLength, maxLength, pattern, requiredError, minLengthError, maxLengthError, patternError, validateError, validate}) {

    return (
        <label htmlFor={id}
               className="inputLabel">
            {children}
            <input
                type={type}
                className="textInput"
                name={name}
                id={name}
                value={value}
                accept={accept}
                {...register(
                    name,
                    {
                        required: required,
                        minLength: minLength,
                        maxLength: maxLength,
                        pattern: pattern,
                        validate: validate
                    })}

            />
            {errors[name] && errors[name].type === "required" && <span className="errorMessage">{requiredError}</span>}
            {errors[name] && errors[name].type === "pattern" && <span className="errorMessage">{patternError}</span>}
            {errors[name] && errors[name].type === "validate" && <span className="errorMessage">{validateError}</span>}
            {errors[name] && errors[name].type === "minLength" && <span className="errorMessage">{minLengthError}</span>}
            {errors[name] && errors[name].type === "maxLength" && <span className="errorMessage">{maxLengthError}</span>}
        </label>
    )

}
