import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { Paragraph } from "../../components/typography";
function Search() {
  return (
    <>
      <div className=" bg-[#F7F7F8] py-20 px-6 md:px-12 lg:px-32">
        <div className="bg-white">
          <div className="grid grid-cols-12  h-auto py-1 px-4 flex items-center gap-0">
            <div className="col-span-12 lg:col-span-4  rounded-md ">
              <div className="flex gap-3  px-6 pt-4 md:pt-0 ">
                <ImSearch className="text-[#0098db] font-bold mt-1" />
                <Paragraph className="text-black opacity-30">
                  Candidate Title
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
                <button className=" gap-0 py-3  rounded  px-8 font-bold bg-[#0098db] text-white">
                  Filter
                </button>
              </div>
              <div className=" h-full flex items-center  ">
                <button className=" gap-0 py-3 px-8 rounded font-bold bg-[#0098db] text-white">
                  Find Candidate
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
