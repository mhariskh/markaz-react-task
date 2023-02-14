import React, { useState } from "react";

const InputField = ({
  label,
  type,
  placeholder,
  error,
  name,
  value,
  isDisabled,
  onChange,
}) => {
  return (
    <>
      <label
        htmlFor={name}
        className="block pb-2 text-sm font-medium text-gray-700"
      >
        {label}
      </label>
      <div className="mt-1">
        <input
          type={type}
          name={name}
          id={name}
          autoComplete="email"
          className="block w-full rounded-md border-gray-300 py-3 shadow-sm transition duration-200 ease-in focus:border-accent-3 focus:ring-accent-3 disabled:bg-gray-100 sm:text-sm"
          placeholder={placeholder}
          value={value}
          disabled={isDisabled}
          onChange={onChange}
        />
        {error && (
          <span className="text-md mt-2 inline-block text-red-600">
            {error}
          </span>
        )}
      </div>
    </>
  );
};

InputField.defaultProps = {
  isDisabled: false,
};

export default InputField;
