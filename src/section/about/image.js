import React from "react";
import About1 from "../../assets/about1.jpg";
import About2 from "../../assets/about2.jpg";
import About3 from "../../assets/about3.jpg";
import About4 from "../../assets/about4.jpg";

function Image() {
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-4 pt-6 pb-20 ">
            <div className="col-span-12 lg:col-span-4">
              <img src={About1} alt="" className="h-full" />
            </div>
            <div className="col-span-12 lg:col-span-4 flex flex-col gap-4">
              <div>
                <img src={About2} alt="" />
              </div>
              <div>
                <img src={About3} alt="" />
              </div>
            </div>
            <div className="col-span-12 lg:col-span-4 ">
              <img src={About4} alt="" className="h-full" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Image;
