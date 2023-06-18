function InputField({ id, type, placeholder, className, rows = null }) {
  return (
    <>
      <input
        type={type}
        id={id}
        placeholder={placeholder}
        className={className}
        rows={rows}
      />
    </>
  );
}

export default InputField;
