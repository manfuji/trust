import Image from "next/image";
import img1 from "../../public/Trust/MILLET.jpg";
import { BadgeCheckIcon, KeyIcon, ShieldCheckIcon } from "@heroicons/react/solid";
const ExportPortal = () => {
  return (
    <div className="bg-gray-50 rounded-md p-8">
      <div className="flex flex-col justify-center text-center mb-4">
        <h1 className="font-semibold text-3xl text-pink-600">IMPORT AND EXPORT</h1>
        <h3 className="font-light text-xl capitalize">
          {" "}
          secure by blockchain technology
        </h3>
      </div>
      <div className="flex flex-col lg:flex-row space-x-4 items-center justify-center">
        <div className="relative w-full h-full lg:w-[420px] lg:h-[420px]">
          {/* first image */}
          <Image src={img1} layout="responsive" objectFit="contain" />
          <div className="absolute top-3/4 p-4 bg-gray-50 opacity-80">
            <span className=" text-green-500 font-medium uppercase">
              Buy through security{" "}
              <KeyIcon className="h-4 w-4 inline-flex" />
            </span>
            <p className="font-light text-sm">
              nulla tempor voluptate sunt reprehenderit. Fugiat commodo
              voluptate cupidatat velit ex cillum. Veniam minim commodo nulla
              nostrud cillum
            </p>
          </div>
        </div>

        <div className="relative w-full h-full lg:w-[430px] lg:h-[430px]">
          <Image src={img1} layout="responsive" objectFit="contain" />
          <div className="absolute top-3/4 p-4 bg-gray-50 opacity-80">
            <span className=" text-blue-500 font-medium uppercase">
              Sell through security{" "}
              <BadgeCheckIcon className="h-4 w-4 inline-flex" />
            </span>
            <p className="font-light text-sm">
              nulla tempor voluptate sunt reprehenderit. Fugiat commodo
              voluptate cupidatat velit ex cillum. Veniam minim commodo nulla
              nostrud cillum
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExportPortal;
