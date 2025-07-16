type InputProps = {
    placeholder?: string;
    type:string;
    ariaLabel?: string;
    id?: string;
    value?: string;
    name:string
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
}
function InputComponent({ placeholder, ariaLabel, id, type, value, onChange, name }: InputProps) {
  return (
    <input
      type={type}
      className="form-control"
      placeholder={placeholder}
      aria-label={ariaLabel}
      id={id}
      value={value}
      name={name}
      onChange={onChange}
    />
  );
}

export default InputComponent;
