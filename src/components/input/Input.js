import React from "react";
import "./input.styles.scss";

const Input = ({
  label = "label",
  type = "text",
  textarea = false,
  name = "h",
  placeholder = "placeholder",
  register,
  validation,
  errors,
}) => {
  return (
    <div className="input-form">
      <label className="input-label">
        {label}{validation.required?.value && " *"}
        <div
          className={`input-field${textarea === true ? " textarea-field" : ""}`}
        >
          {textarea ? (
            <textarea
              rows={20}
              cols={50}
              name={name}
              placeholder={placeholder}
              {...register(name, validation)}
            />
          ) : (
            <input
              type={type}
              name={name}
              placeholder={placeholder}
              {...register(name, validation)}
            />
          )}
        </div>
        {errors[name] && <span role="alert" className="input-validation-error" >{errors[name].message}</span>}
      </label>
    </div>
  );
};

export default Input;
