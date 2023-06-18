import { BsFillCalendarHeartFill } from "react-icons/bs";
import { H1, H5, Paragraph } from "../../components/typography";

const content = [
  {
    icon: <BsFillCalendarHeartFill />,
    title: "Create Account",
    description:
      "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
  },
  {
    icon: <BsFillCalendarHeartFill />,
    title: "Create Account",
    description:
      "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
  },
  {
    icon: <BsFillCalendarHeartFill />,
    title: "Create Account",
    description:
      "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
  },
  {
    icon: <BsFillCalendarHeartFill />,
    title: "Create Account",
    description:
      "Aliquam facilisis egestas sapien, nec tempor leo tristique at.",
  },
];

function Work() {
  return (
    <>
      <div className="bg-[#F1F2F4] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-center font-bold">
            <H1>
              <span className="text-[#0098db]">Jobpilot</span> Working Process
            </H1>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12 ">
            {content.map((item) => (
              <div className=" group col-span-6 lg:col-span-3 ">
                <div className="group-hover:bg-white card text-center flex h-full  p-6 gap-4 rounded-lg">
                  <div>
                    <div className="flex justify-center  items-center font-bold">
                      <span
                        className="bg-white group-hover:bg-[#0098db]"
                        style={{
                          borderRadius: "100%",
                          height: "80px",
                          width: "80px",
                        }}
                      >
                        <div className="flex justify-center h-full items-center text-3xl text-[#0098db] group-hover:text-white">
                          {item.icon}
                        </div>
                      </span>
                    </div>
                    <div className="content pt-2 ">
                      <H5 className="font-bold">{item.title}</H5>
                      <Paragraph className="pt-2">{item.description}</Paragraph>
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

export default Work;
