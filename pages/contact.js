import { appState } from "../components/context/Context";

const contact = () => {
  const {user:{userDetails} ,dispatch} = appState()
  console.log(userDetails)
  return (
    <div className="bg-gray-50 w-full h-full py-10">
      <div className="bg-gray-100 max-w-2xl mx-auto mb-3 p-10 rounded-lg">
        <h1 className="text-4xl font-bold text-pink-900 text-center">
          Contact Us:
        </h1>
        <div className="text-xl text-center text-gray-600 mb-5">
          <p className="font-bold text-pink-600  text-lg ">Africa</p>
          Tel: 0218838283 0234829832 283823923892
          <p className="font-bold text-pink-600  text-lg ">Europe</p>
          Tel: 0218838283 0234829832 283823923892
          <p className="font-bold text-pink-600  text-lg ">Asia</p>
          Tel: 0218838283 0234829832 283823923892
          <p className="font-bold text-pink-600  text-lg ">WhatsAPP</p>
          0218838283 0234829832 283823923892
        </div>
      </div>
      <div className="max-w-3xl mx-auto bg-gray-100 shadow-lg p-10 rounded-lg">
        <form className="flex flex-col space-y-2 py-4">
          <h1 className="text-4xl font-bold text-pink-900 text-center">
            Contact Form
          </h1>
          <input
            type="text"
            required
            placeholder="Fullname eg John Doe"
            className="px-10 py-2 outline-none focus:ring-1 ring-pink-900 rounded-md placeholder-pink-900"
          />
          <input
            required
            type="email"
            placeholder="Email eg John@doe.com"
            className="px-10 py-2 outline-none focus:ring-1 ring-pink-900 rounded-md placeholder-pink-900"
          />
          <input
            required
            type="number"
            placeholder="Number (+233-540-000-000)"
            className="px-10 py-2 outline-none focus:ring-1 ring-pink-900 rounded-md placeholder-pink-900"
          />

          <textarea
            required
            cols="3"
            type="text"
            placeholder="Your Message"
            className="px-10  outline-none focus:ring-1 ring-pink-900 rounded-md placeholder-pink-900"
          />
          <button className="mt-2 px-8 py-2 text-lg text-white bg-green-500 rounded-lg hover:bg-green-400 active:bg-green-300 focus:ring-1 ring-green-900">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default contact;
