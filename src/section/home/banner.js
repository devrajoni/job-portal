import "aos/dist/aos.css";
import {
  BsFillCalendarHeartFill,
  BsPeopleFill,
  BsStickiesFill,
  BsTrello,
} from "react-icons/bs";
import { ImSearch } from "react-icons/im";
import { IoLocationOutline } from "react-icons/io5";
import image from "../../assets/banner3.jpg";
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
    description: "Companies",
  },
  {
    icon: <BsPeopleFill />,
    number: "4",
    description: "Candidates",
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
      <div
        className="header-section relative w-full  bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div
          class="w-full h-full flex  justify-center items-center
          bg-[#000000]/30 backdrop-brightness-50"
        >
          <div className=" py-32  ">
            <div className="text-white   px-6 md:px-12 lg:px-60">
              <div
                data-aos="fade-down"
                data-aos-easing="linear"
                data-aos-duration="1500"
              >
                <H1 className="font-bold md:text-6xl  text-center">
                  Find a job that suits your interest & skills.
                </H1>
                <H5 className="py-8 text-center">
                  Find the Perfect Jobs, Employment & Career Opportunities.
                </H5>
                <div className="">
                  <div className="   bg-white ">
                    <div className="grid grid-cols-12  h-auto  flex items-center gap-0">
                      <div className="col-span-12 md:col-span-4  rounded-md ">
                        <div className="flex gap-3  px-6 pt-4 md:pt-0 ">
                          <ImSearch className="text-[#0098db] font-bold mt-1" />
                          <Paragraph className="text-black opacity-30">
                            Job Title
                          </Paragraph>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-4">
                        <div className="flex gap-3 py-2 px-6">
                          <IoLocationOutline className="text-[#0098db] font-bold text-xl mt-1" />
                          <Paragraph className="text-black mt-1 opacity-30">
                            Enter Location
                          </Paragraph>
                        </div>
                      </div>
                      <div className="col-span-12 md:col-span-4 gap-0  flex justify-end">
                        <div className=" h-full pb-4 pt-2 md:pt-0 pr-20 md:pr-0 md:pb-0  flex items-center  ">
                          <button className="py-3 md:py-6 gap-0 rounded-3xl md:rounded-l-full text-xl  px-12 font-bold bg-[#0098db] text-white">
                            Find Job
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="pt-6">
                  <Paragraph className="text-xs text-center">
                    Suggestion: Others , IT & Telecommunication ,
                    Garments/Textile , Engineer/Architects
                  </Paragraph>
                </div>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-6 pt-20 px-6 md:px-12 lg:px-32">
              {content.map((item) => (
                <div className=" group col-span-12 md:col-span-6 lg:col-span-3 ">
                  <div className="group-hover:drop-shadow-2xl bg-white  p-4  gap-4 rounded-lg flex h-full w-full">
                    <div className="text-3xl text-[#0098db] group-hover:text-white  bg-[#ECF4FC] group-hover:bg-[#0098db]  flex items-center rounded-md group-hover:text-white p-4">
                      {item.icon}
                    </div>
                    <div className="content">
                      <H5 className="font-bold ">{item.number}</H5>
                      <Paragraph className=" w-full">
                        {item.description}
                      </Paragraph>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Banner;
