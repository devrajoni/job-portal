import React, { useState } from "react";
import Brand1 from "../../assets/brand-1.png";
import Brand2 from "../../assets/brand-2.png";
const brands = [
  {
    logo: Brand1,
  },
  {
    logo: Brand2,
  },
  {
    logo: Brand1,
  },
  {
    logo: Brand2,
  },
];
function Brand() {
  const [color, setColor] = useState("");
  const changeColor = () => {
    const colors = ["red", "black", "blue"];
    const result = colors[Math.floor(Math.random() * colors.length)];
    return result;
  };
  return (
    <>
      <div className="bg-[#FBFCFE]">
        <div className=" px-6 md:px-12 lg:px-32">
          <div className="grid grid-cols-12 gap-8 pt-6 pb-20">
            {brands.map((brand) => (
              <div className="col-span-12 lg:col-span-3 ">
                <div>
                  <img
                    src={brand.logo}
                    alt=""
                    onClick={() => setColor(changeColor())}
                    style={{ color: color }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}

export default Brand;
