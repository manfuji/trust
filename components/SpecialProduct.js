import Image from "next/image";
import image from "../public/Trust/PEANUT.jpg";
const SpecialProduct = () => {
  return (
    <div className="flex flex-col md:flex-row w-full rounded-md shadow-md">
      <div className="w-full  md:h-[400px] md:w-[400px]">
        <Image src={image} layout="responsive" objectFit="contain" />
      </div>
      <div className="w-full md:w-1/2 p-2">
        <h1 className=" text-pink-600 font-bold text-4xl mb-4 md:mb-8 text-center mt-1">
          Special Pea Nut
        </h1>
        <p className="text-justify ml-8 text-gray-600 p-4 md:p-0">
          Anim irure dolore fugiat exercitation incididunt aute sunt cupidatat
          tempor. Dolor ad est laboris consectetur ea. Est sit officia
          consectetur id incididunt dolore ullamco. Deserunt cupidatat cillum
          ullamco amet labore occaecat ullamco consectetur. Consectetur ullamco
          cillum deserunt velit. In sunt officia voluptate reprehenderit velit
          duis adipisicing aliqua do. Magna cillum cupidatat amet occaecat
          laboris consectetur sint enim ipsum exercitation do. Velit id
          excepteur qui nisi aliqua cupidatat sit. Nostrud eiusmod proident
          labore mollit Lorem adipisicing pariatur ipsum sint.
        </p>
      </div>
    </div>
  );
};

export default SpecialProduct;
