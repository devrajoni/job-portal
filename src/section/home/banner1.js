import "aos/dist/aos.css";
import {
  BsFillCalendarHeartFill,
  BsPeopleFill,
  BsStickiesFill,
  BsTrello,
} from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import { H1, H5, Paragraph } from "../../components/typography";

const content = [
  {
    icon: <BsTrello />,
    number: "4",
    description: "Live Job",
  },
  {
    icon: <BsFillCalendarHeartFill />,
    number: "4",
    description: "Companies sdfghdxfcgvhbjzdfxgcvhbjxfcgn",
  },
  {
    icon: <BsPeopleFill />,
    number: "4",
    description: "hjkhgffppiourtytupiouygfdgklk.lj,mnb vvb",
  },
  {
    icon: <BsStickiesFill />,
    number: "4",
    description: "New Jobs",
  },
];
function Banner() {
  return (
    <>
      <div className="bg-[#F7F7F8] w-full">
        <div className="py-32">
          <div className="grid grid-cols-12 gap-4 h-auto px-6 md:px-12 lg:px-32">
            <div className="col-span-12 md:col-span-6 ">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <H1 className="font-bold md:text-6xl">
                  Find a job that suits your interest & skills.
                </H1>
                <H5 className="pt-6">
                  Find the Perfect Jobs, Employment & Career Opportunities.
                </H5>
                <div className="gap-4 lg:flex justify-end  rounded-md bg-[#FFFFFF] border border-[#F7F7F8] p-6 lg:p-2 mt-6">
                  <div className="lg:flex gap-4">
                    <div className="flex gap-2 items-center">
                      <ImSearch className="text-[#2DB24A]" />
                      <input
                        type="search"
                        placeholder="Job Title"
                        className=""
                      />
                    </div>
                    <div className="flex gap-2 items-center mt-3 lg:mt-0">
                      <IoLocationOutline className="text-[#2DB24A]" />
                      <input
                        type="search"
                        placeholder="Enter Location"
                        className=""
                      />
                    </div>
                  </div>
                  <div className=" h-full  flex items-center right-0 mt-4 lg:mt-0 ">
                    <button className="py-3 px-4 rounded-lg bg-[#2DB24A] text-white">
                      Find Job
                    </button>
                  </div>
                </div>
                <div className="pt-6">
                  <Paragraph className="text-xs">
                    Suggestion: Others , IT & Telecommunication ,
                    Garments/Textile , Engineer/Architects
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="col-span-12 md:col-span-6"></div>
          </div>
          <div className="grid grid-cols-12 gap-6 pt-20 px-6 md:px-12 lg:px-32">
            {content.map((item) => (
              <div className=" group col-span-6 lg:col-span-3 w-full h-full">
                <div className="group-hover:drop-shadow-2xl card bg-white flex p-4  gap-4 rounded-lg ">
                  <div className="text-3xl text-[#2DB24A] group-hover:text-white bg-[#ECF4FC] group-hover:bg-[#2DB24A] flex items-center rounded-md group-hover:text-white p-4">
                    {item.icon}
                  </div>
                  <div className="content px-4">
                    <H5 className="font-bold opacity-30">{item.number}</H5>
                    <Paragraph className="opacity-30">
                      {item.description}
                    </Paragraph>
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

export default Banner;
