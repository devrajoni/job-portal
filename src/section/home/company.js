import { HiArrowLongRight } from "react-icons/hi2";
import { IoBriefcaseOutline, IoLocationOutline } from "react-icons/io5";
import Logo2 from "../../assets/logo2.jpg";
import { H1, H5, Paragraph } from "../../components/typography";

const content = [
  {
    logo: Logo2,
    title: "AddTek Software Co.",
    address: "Trend",
    description: "Digital Point",
    position: "Open position",
  },
  {
    logo: Logo2,
    title: "AddTek Software Co.",
    address: "Trend",
    description: "Digital Point",
    position: "Open position",
  },
  {
    logo: Logo2,
    title: "AddTek Software Co.",
    address: "Trend",
    description: "Digital Point",
    position: "No position",
  },
];
function Company() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-between title font-bold">
            <H1>
              <span className="text-[#0098db]">Top </span>Companies
            </H1>
            <button className="flex font-bold py-2 px-6 rounded border hover:bg-[#EEF5FC] hover:border-[#0098db] text-[#0098db]">
              View All
              <HiArrowLongRight className="ml-2 bold text-3xl" />
            </button>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12">
            {content.map((item) => (
              <div
                className=" group col-span-12 md:col-span-6 lg:col-span-4 "
                key={item}
              >
                <div className="group-hover:drop-shadow-2xl card bg-white flex justify-center items-center border group-hover:border-[#0098db] gap-4 rounded-lg w-full h-full">
                  <div className=" px-4 py-6">
                    <div className="flex gap-4 items-center">
                      <div className="">
                        <img
                          src={item.logo}
                          alt="logo1"
                          height="50"
                          width="50"
                        />
                      </div>
                      <div className="content px-4 w-full">
                        <H5 className="font-bold text-xl">{item.title}</H5>
                        <div className="flex gap-2 mt-2">
                          <div className="flex gap-2">
                            <IoLocationOutline className="text-xl text-[#0098db]" />
                            <Paragraph className="text-xs">
                              {item.address}
                            </Paragraph>
                          </div>
                          <div className="flex gap-2">
                            <IoBriefcaseOutline className="text-xl text-[#0098db]" />
                            <Paragraph className="text-xs w-full">
                              {item.description}
                            </Paragraph>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="pt-8">
                      <button
                        className={`${
                          item.position == "Open position"
                            ? "py-2 font-bold flex w-full justify-center font-bold px-4 md:px-16 rounded border bg-[#EEF5FC]  hover:bg-[#0098db] text-[#0098db] hover:text-white"
                            : "py-2 font-bold w-full font-bold px-4 md:px-16 flex justify-center rounded border bg-[#EEF5FC]   text-[#0098db]"
                        }`}
                      >
                        {item.position}
                        {item.position == "Open position" && (
                          <HiArrowLongRight className="ml-2 text-3xl" />
                        )}
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Company;
