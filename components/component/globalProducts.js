import cover from "../../public/assets/bg2.jpg";
import Image from "next/image";
const GlobalProducts = () => {
  return (
    <div className=" relative object-center h-[200px] md:h-[350px] w-[350px] sm:w-[300px] md:w-[450px]  lg:w-[500px] xl:w-[700px] mx-auto ">
      <Image
        src={cover}
        layout="fill"
        objectFit="cover"
        alt="Trust faith compapny "
      />
      <div className="bg-black left-0 h-full opacity-40 top-0 w-full" />
      <div className="absolute top-0 md:top-1/2  justify-center items-center">
          <h1 className="font-bold text-3xl justify-center uppercase md:mb-3 text-center text-gray-200">Delivery and payment</h1>
        <p className="text-gray-100 text-sm mx-2 md:text-lg capitalize text-justify md:mx-14">
          consequat adipisicing nulla minim qui qui. Nulla irure cillum nostrud
          anim sint. Dolor amet adipisicing eiusmod ex. Exercitation
          exercitation velit duis dolor anim aliqua qui qui sit enim. Amet
        </p>
      </div>
    </div>
  );
};

export default GlobalProducts;
