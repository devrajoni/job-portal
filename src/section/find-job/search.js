import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import Drawer from "react-modern-drawer";
import Radio from "../../components/Radio";
import { H3, Paragraph } from "../../components/typography";

//import styles 👇
import React from "react";
import "react-modern-drawer/dist/index.css";

function Search() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        className="bla bla bla"
      >
        <div className="px-6">
          <H3 className="font-bold py-3 mt-6 text-[#0098db]">Category</H3>
          <Radio name="All Category" id="cat" type="radio" value="cat" />
          <Radio name="Engineer/Architects" id="cat" type="radio" value="cat" />
          <Radio name="Garments/Textile" id="cat" type="radio" value="cat" />
          <Radio name="Design/Creative" id="cat" type="radio" value="cat" />
        </div>

        <div className="px-6">
          <H3 className="font-bold py-3 text-[#0098db]">Job Type</H3>
          <Radio name="Full Time" id="type" type="radio" value="job" />
          <Radio name="Part Time" id="type" type="radio" value="job" />
          <Radio name="Contractual" id="type" type="radio" value="job" />
          <Radio name="Intern" id="type" type="radio" value="job" />
        </div>
      </Drawer>
      <div className=" bg-[#F7F7F8] py-20 px-6 md:px-12 lg:px-32">
        <div className="bg-white">
          <div className="grid grid-cols-12  h-auto py-1 px-4 flex items-center gap-0">
            <div className="col-span-12 lg:col-span-4  rounded-md ">
              <div className="flex gap-3  px-6 pt-4 md:pt-0 ">
                <ImSearch className="text-[#0098db] font-bold mt-1" />
                <Paragraph className="text-black opacity-30">
                  Job Title
                </Paragraph>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4">
              <div className="flex gap-3 py-2 px-6">
                <IoLocationOutline className="text-[#0098db] font-bold text-xl mt-1" />
                <Paragraph className="text-black mt-1 opacity-30">
                  Enter Location
                </Paragraph>
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 gap-2 py-3 flex justify-end">
              <div className=" h-full flex items-center  ">
                <button
                  onClick={toggleDrawer}
                  className=" gap-0 py-3  rounded  px-8 font-bold bg-[#0098db] text-white"
                >
                  Filter
                </button>
              </div>
              <div className=" h-full flex items-center  ">
                <button className=" gap-0 py-3 px-8 rounded font-bold bg-[#0098db] text-white">
                  Find Job
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Search;
