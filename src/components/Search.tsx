import React from "react";

interface InputProps {
  placeholder?: string;
  ariaLabel?: string;
  id?: string;
  value?: string;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onClick?: () => void;
}

function SearchComponent({ placeholder, ariaLabel, id, value, onChange, onClick }: InputProps) {
  return (
    <div className="input-group">
      <input
        type="text"
        className="form-control"
        placeholder={placeholder}
        aria-label={ariaLabel}
        id={id}
        value={value}
        name="search"
        onChange={onChange}
      />
    </div>
  );
}

export default SearchComponent;
