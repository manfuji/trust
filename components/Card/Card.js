import Image from "next/image";
import { appState } from "../../pages/context/Context";
import Link from "next/link"
import { ADD_TO_CART, REMOVE_FROM_CART } from "../../pages/context/Types";
const Card = ({ product, prod }) => {
  const {
    user: { cart },
    dispatch,
  } = appState();
  console.log(cart);
  console.log(prod);
  return (
    <div className="w-full md:w-44 flex flex-row md:flex-col rounded-xl bg-gray-200 text-gray-900 m-4 hover:bg-gray-100 shadow-lg hover:scale-105 transition duration-150 ease-in-out cursor-pointer ">
     <Link href={`/product/${prod.id}`}>
       <a>
      <div className="relative h-44 w-44 rounded-md">
        <Image src={product} layout="fill" className=" rounded-t-md z-0" />
      </div>
      
      </a>
      </Link>

<div className=" space-y-3 w-full md:space-x-0 md:w-44 ">
<Link href={`/product/${prod.id}`}>
 <a>
      <div className="text-justify items-center py-4 px-2 ">
        <h1 className="text-pink-600 font-bold text-xl tracking-widest">
          {prod.productName}
        </h1>
        <div>
          {prod.description}
          </div>
        <div className="flex flex-row justify-between">
          <span className="text-md text-gray-50 line-through bg-gray-700 rounded-xl text-sm px-2">
            Ghc {prod.discountPrice}
          </span>
          <span className="text-md text-gray-50 bg-gray-700 rounded-xl text-sm px-2">Ghc {prod.productPrice}</span>
        </div>
      </div></a>
      </Link>

      <div className="flex-col">
        {cart.some((c) => c.id === prod.id) ? (
          <button
            onClick={() => {
              dispatch({
                type: REMOVE_FROM_CART,
                payload: prod,
              });
            }}
            className="bg-red-600 p-2 text-sm w-full hover:bg-red-500 text-white rounded-sm"
          >
            Remove From Cart
          </button>
        ) : (
          <button
            onClick={() => {
              dispatch({
                type: ADD_TO_CART,
                payload: prod,
              });
            }}
            className="bg-green-600 p-2 text-sm w-full hover:bg-green-500 text-white rounded-sm"
          >
            Add To Cart
          </button>
        )}
      </div>


      </div>
    </div>
  );
};

export default Card;
