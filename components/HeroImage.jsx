
import cover from "../public/assets/bg.jpg";
import Image from "next/image"
function HeroImage() {
  return (
    <div>
      <div className=" relative h-[200px] md:h-[350px] w-[350px] sm:w-[600px] md:w-[800px]  lg:w-[1000px] xl:w-[1200px] mx-auto ">
        <Image src={cover} layout="fill" objectFit="cover"  alt="Trust faith compapny " />
        <div className="absolute z-30 lg:top-1/2 w-full top-3/4 text-white">
          <div className=" space-y-1">
            {" "}
            <div className="relative md:hidden flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-pink-900 uppercase font-bold text-xs">
                          Agriculture
                        </h5>
                        <span className="font-semibold text-xl text-pink-400">
                          TOTAL STOCKS 350,897
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-900 mt-4">
                      <span className="text-emerald-500 mr-2 text-gray-400">
                        <i className="fas fa-arrow-up "></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        OFF Since last month
                      </span>
                    </p>
                  </div>
                </div>
            <div className="md:flex md:flex-wrap hidden">
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-pink-900 uppercase font-bold text-xs">
                          Agriculture
                        </h5>
                        <span className="font-semibold text-xl text-pink-400">
                          TOTAL STOCKS 350,897
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-pink-500">
                          <i className="far fa-chart-bar"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-gray-900 mt-4">
                      <span className="text-emerald-500 mr-2 text-gray-400">
                        <i className="fas fa-arrow-up "></i> 3.48%
                      </span>
                      <span className="whitespace-nowrap">
                        OFF Since last month
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-yellow-700 uppercase font-bold text-xs">
                          Export And Import
                        </h5>
                        <span className="font-semibold text-xl text-yellow-400">
                          AVAILABLE STOCKS 2,356
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-yellow-500">
                          <i className="fas fa-chart-pie"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-gray-500 mr-2">
                        <i className="fas fa-arrow-down"></i>DISCOUNT 3.48%
                      </span>
                      <span className="whitespace-nowrap">Off Products</span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-blue-800 uppercase font-bold text-xs">
                          Marketing And Trade
                        </h5>
                        <span className="font-semibold text-xl text-blue-400">
                          AVAILABLE STOCK 924
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-blue-500">
                          <i className="fas fa-users"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-gray-500 mr-2">
                        <i className="fas fa-arrow-down"></i> 1.10%
                      </span>
                      <span className="whitespace-nowrap">
                        Off Since yesterday
                      </span>
                    </p>
                  </div>
                </div>
              </div>
              <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                <div className="relative flex flex-col min-w-0 break-words bg-white rounded mb-6 xl:mb-0 shadow-lg">
                  <div className="flex-auto p-4">
                    <div className="flex flex-wrap">
                      <div className="relative w-full pr-4 max-w-full flex-grow flex-1">
                        <h5 className="text-purple-800 uppercase font-bold text-xs">
                          Manufacturing and Recycling
                        </h5>
                        <span className="font-semibold text-xl text-purple-500">
                          99.9% QUALITY
                        </span>
                      </div>
                      <div className="relative w-auto pl-4 flex-initial">
                        <div className="text-white p-3 text-center inline-flex items-center justify-center w-12 h-12 shadow-lg rounded-full bg-purple-800">
                          <i className="fas fa-percent"></i>
                        </div>
                      </div>
                    </div>
                    <p className="text-sm text-blueGray-400 mt-4">
                      <span className="text-emerald-500 mr-2">
                        <i className="fas fa-arrow-up text-purple-400"></i> FAST
                        DELIVERY
                      </span>
                      <span className="whitespace-nowrap">GLOBALLY</span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="absolute z-0 -top-0 -left-0 h-full w-full bg-black opacity-10" />
      </div>
    </div>
  
  );
}

export default HeroImage;
