import {
  BsFillCalendarHeartFill,
  BsPeopleFill,
  BsStickiesFill,
  BsTrello,
} from "react-icons/bs";
import { HiArrowLongRight } from "react-icons/hi2";
import { H1, H5, Paragraph } from "../../components/typography";

function Category() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-between title font-bold">
            <H1>Popular Category</H1>
            <button className="flex py-2 px-6 rounded border hover:bg-[#EEF5FC] hover:border-[#0098db] text-[#0098db]">
              View All Job
              <HiArrowLongRight className="ml-2 bold text-3xl" />
            </button>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            <div className=" group col-span-12 md:col-span-6 lg:col-span-3 ">
              <div className="group-hover:drop-shadow-2xl card bg-white flex p-4  gap-4 rounded-lg w-full h-auto">
                <div className="bg-[#ECF4FC] group-hover:bg-[#0098db] flex items-center rounded-md group-hover:text-white p-4">
                  <BsTrello className="text-3xl text-[#0098db] group-hover:text-white" />
                </div>
                <div className="content px-4">
                  <H5 className="font-bold">Live Job</H5>
                  <div className="flex gap-2">
                    <Paragraph className="text-xs">2</Paragraph>
                    <Paragraph className="text-xs">Open Position</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 md:col-span-6 lg:col-span-3 ">
              <div className="group-hover:drop-shadow-2xl card bg-white flex p-4  gap-4 rounded-lg">
                <div className="bg-[#ECF4FC] group-hover:bg-[#0098db] flex items-center rounded-md group-hover:text-white p-4">
                  <BsFillCalendarHeartFill className="text-3xl text-[#0098db] group-hover:text-white" />
                </div>
                <div className="content px-4">
                  <H5 className="font-bold">Companies</H5>
                  <div className="flex gap-2">
                    <Paragraph className="text-xs">2</Paragraph>
                    <Paragraph className="text-xs">Open Position</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 md:col-span-6 lg:col-span-3 ">
              <div className="group-hover:drop-shadow-2xl card bg-white flex p-4  gap-4 rounded-lg">
                <div className="bg-[#ECF4FC] group-hover:bg-[#0098db] flex items-center rounded-md group-hover:text-white p-4">
                  <BsPeopleFill className="text-3xl text-[#0098db] group-hover:text-white" />
                </div>
                <div className="content px-4">
                  <H5 className="font-bold">Candidates</H5>
                  <div className="flex gap-2">
                    <Paragraph className="text-xs">32</Paragraph>
                    <Paragraph className="text-xs">Open Position</Paragraph>
                  </div>
                </div>
              </div>
            </div>
            <div className=" group col-span-12 md:col-span-6 lg:col-span-3 ">
              <div className="group-hover:drop-shadow-2xl card bg-white flex p-4  gap-4 rounded-lg">
                <div className="bg-[#ECF4FC] flex items-center group-hover:bg-[#0098db] rounded-md group-hover:text-white p-4">
                  <BsStickiesFill className="text-3xl text-[#0098db] group-hover:text-white" />
                </div>
                <div className="content px-4">
                  <H5 className="font-bold">New Jobs</H5>
                  <div className="flex gap-2">
                    <Paragraph className="text-xs">12</Paragraph>
                    <Paragraph className="text-xs">Open Position</Paragraph>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Category;
