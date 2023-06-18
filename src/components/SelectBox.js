function SelectBox({ options }) {
  return (
    <>
      <div className="">
        <select className="px-20 py-3">
          {options.map((option) => (
            <option value={option.value}>{option.label}</option>
          ))}
        </select>
      </div>
    </>
  );
}

export default SelectBox;
