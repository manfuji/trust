import { BadgeCheckIcon, FingerPrintIcon, GlobeIcon, KeyIcon } from "@heroicons/react/solid";
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
const BuyersAndsellers = () => {
  useEffect(() => {
    AOS.init({
      offset: 200,
      duration: 600,
      easing: "ease-in-sine",
      delay: 100,
    });
  }, []);
  return (
    <div className="bg-gray-50 rounded-md p-8">
      <h1 className="font-bold text-3xl text-center  uppercase text-pink-600">Buyers, sellers <br /> and manufacturers</h1>
      <h3 className="text-center font-light text-xl capitalize mb-4"> expand Your market and increase your Income</h3>
      <div className="flex flex-col md:flex-row space-x-4 lg:space-y-10 space-y-4 text-center ">
        <div className="mt-6" 
        data-aos={"fade-left"}
        data-aos-easing={"linear"}
        data-aos-duration={"2000"}
        >
          {" "}<h1 className="font-bold capitalize text-center text-base mt-4">Total security <KeyIcon className="h-8 w-8 inline-flex text-red-600" /></h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div data-aos={"fade-right"}
            data-aos-easing={"linear"}
            data-aos-duration={"2000"}>
          {" "}
          <h1 className="font-bold capitalize text-center text-base">Strong protection  <FingerPrintIcon className="h-8 w-8 inline-flex text-red-400 m-1" /> </h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div data-aos={"flip-left"}
            data-aos-easing={"linear"}
            data-aos-duration={"2000"}>
          {" "}
          <h1 className="font-bold capitalize text-center text-base">Professional expertise  <BadgeCheckIcon className="h-8 w-8 text-green-400 inline-flex" /> </h1>
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
        <div className="" data-aos={"flip-right"}
            data-aos-easing={"linear"}
            data-aos-duration={"2000"}>
          {" "} <h1 className="font-bold capitalize text-center text-base">24/7 quality products  <GlobeIcon className="h-8 w-8 text-blue-400 inline-flex " /> </h1> 
          nulla tempor voluptate sunt reprehenderit. Fugiat commodo voluptate
          cupidatat velit ex cillum. Veniam minim commodo nulla nostrud cillum
        </div>
      </div>
    </div>
  );
};

export default BuyersAndsellers;
