function Radio({ name, id, type, value }) {
  return (
    <>
      <div className="">
        <input
          type={type}
          id={id}
          name="fav_language"
          value={value}
          className="accent-green-900"
        />
        <label className="pl-2" for={name}>
          {name}
        </label>
      </div>
    </>
  );
}

export default Radio;
