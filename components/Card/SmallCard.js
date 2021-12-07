import Image from "next/image";
const SmallCard = ({ title, image, cat }) => {
  return (
    <div className=" w-56 h-full cursor-pointer flex flex-row hover:bg-gray-100 hover:ring-1 hover:ring-pink-300 rounded-md hover:scale-90 transition duration-150 ease-out">
      <div className="relative h-16 w-16 rounded-md hover:shadow-md drop-shadow-md">
        <Image
          src={image}
          layout="fill"
          objectFit="contain"
          className="rounded-md  z-0"
        />
      </div>
      <span className="flex flex-col justify-center p-2 font-medium">
        <h1 className="font-semibold text-pink-600">{title}</h1>{" "}
        <h2 className="text-gray-500">{cat}</h2>
      </span>
    </div>
  );
};

export default SmallCard;
