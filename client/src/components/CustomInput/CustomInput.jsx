const CustomInput = ({
    children,
    className,
    disabled,
    name,
    onChange,
    placeholder,
    type,
    value
}) => {
  return (
    <>
    <label htmlFor={name}>
      <input
            aria-label={name}
            data-testid={name}
            type={type}
            name={name}
            onChange={e => onChange(e.target.value)}
            placeholder={placeholder}
            value={value}
            disabled={disabled}
            className={`${className}`}
      />
    </label>
    {children}
    </>
  )
}

export default CustomInput