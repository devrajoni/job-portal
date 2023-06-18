import { ImQuotesLeft } from "react-icons/im";
import { IoIosStar, IoIosStarHalf } from "react-icons/io";
import Logo2 from "../../assets/logo2.jpg";
import { H1, H3, Paragraph } from "../../components/typography";

function Testimonial() {
  return (
    <>
      <div className="bg-[#F1F2F4] w-full">
        <div className="h-auto py-24 px-6 md:px-12 lg:px-32">
          <div className="flex justify-center font-bold">
            <H1>Clients Testimonial</H1>
          </div>
          <div className="grid grid-cols-12 gap-6 mt-12 ">
            {[1, 2, 3].map((item) => (
              <div
                className=" group col-span-12 md:col-span-6 h-full  lg:col-span-4"
                key={item}
              >
                <div className="card bg-[#FFFFFF] border-[#0098db] rounded-lg px-4 py-8">
                  <div className="flex gap-2 text-[#FFAA00] text-2xl">
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStar />
                    <IoIosStarHalf />
                  </div>
                  <Paragraph className="mt-4">
                    Lorem ipsum was conceived as filler text, formatted in a
                    certain way to enable the presentation of graphic elements
                    in documents, without the need for formal copy. Using Lorem
                    Ipsum allows designers to put together layouts and the form
                    of the content before the content has been created, giving
                    the design and production process more freedom.
                  </Paragraph>
                  <div className="flex gap-6 mt-6">
                    <img src={Logo2} alt="logo1" height="12" width="72" />
                    <div className="flex gap-10 mt-6">
                      <div>
                        <H3 className="font-bold">Mis Brookee Langworth</H3>
                        <Paragraph>Food Server</Paragraph>
                      </div>
                      <ImQuotesLeft className="text-6xl text-[#DADDE6]" />
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

export default Testimonial;
