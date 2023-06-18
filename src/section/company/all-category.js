import SelectBox from "../../components/SelectBox";
function Category() {
  const organization = [
    {
      label: "Government",
      value: "government",
    },
    {
      label: "Public",
      value: "public",
    },
    {
      label: "Private",
      value: "private",
    },
  ];

  const industry = [
    {
      label: "Agro Based",
      value: "agrobased",
    },
    {
      label: "Auto Mobile",
      value: "automobile",
    },
  ];

  const team = [
    {
      label: "Only me",
      value: "onlyme",
    },
    {
      label: "10 Members",
      value: "members",
    },
  ];
  return (
    <>
      <div className="bg-[#F7F7F8] pb-12 px-6 md:px-12 lg:px-32">
        <div className="">
          <div className="grid grid-cols-12  justify-end">
            <div className="col-span-12 lg:col-span-3 ">
              <div className="justify-end">
                <SelectBox options={organization} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3">
              <div className="justify-end">
                <SelectBox options={industry} />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-3 ">
              <div className="justify-end">
                <SelectBox options={team} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
