import "aos/dist/aos.css";
import { H1, H3, Paragraph } from "../../components/typography";

const content = [
  {
    post: "Team Leader",
    vacancy: "7",
  },
  {
    post: "Administrator",
    vacancy: "0",
  },
  {
    post: "Assistant Manager",
    vacancy: "4",
  },
  {
    post: "Director",
    vacancy: "0",
  },
  {
    post: "Executive",
    vacancy: "4",
  },
  {
    post: "Manager",
    vacancy: "3",
  },
];

function Vacancies() {
  return (
    <>
      <div className="bg-[#FFFFFF] w-full divide-y ">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="title font-bold">
            <H1>Most Popular Vacancies</H1>
          </div>
          <div data-aos="zoom-out">
            <div className="grid grid-cols-12 gap-6 mt-12">
              {content.map((item) => (
                <div className="col-span-6 lg:col-span-3 ">
                  <div className="">
                    <H3 className="font-bold">{item.post}</H3>
                    <div className="flex gap-2 pt-2">
                      <Paragraph>{item.vacancy}</Paragraph>
                      <Paragraph className="text-xs">Open position</Paragraph>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <hr className="w-full" />
    </>
  );
}

export default Vacancies;
