import axios from "axios";
import { useEffect, useState } from "react";
import { appState } from "../../components/context/Context";
import { FormData } from "formdata-node";
import { Fragment } from "react";
function CreateProduct() {
  const [categories, setCategories] = useState([]);
  useEffect(() => {
    axios
      .get("/api/product/category")
      .then((res) => {
        setCategories(res.data);
        console.log(res.data);
      })
      .catch((err) => alert(err.response.data.msg));
  }, []);

  const { user, dispatch } = appState();

  const [file, setFile] = useState(null),
    [imgUrl, setImgUrl] = useState("");

  const initialState = {
    productName: "",
    productPrice: 0,
    description: "",
    discountPrice: 0,
    slug: "",
    createdBy: user.username,
    category: "",
    published: true,
    token: user.token,
  };
  const [formdata, setFormdata] = useState(initialState);

  let form = new FormData();

  form.append("file", file);

  const onChange = (e) => {
    setFormdata({
      ...formdata,
      [e.target.name]: e.target.value,
    });
  };
  const {
    productName,
    productPrice,
    description,
    discountPrice,
    slug,
    createdBy,
    category,
    published,

    token,
  } = formdata;

  const onSubmit = (e) => {
    e.preventDefault();

    const body = {
      productName,
      productPrice,
      description,
      discountPrice,
      slug,
      createdBy,
      category,
      published,
      imgUrl,
      token,
    };

    axios
      .post("/api/product/imgUpload", form)
      .then((res) => {
        alert(res.data.data);
      })
      .catch((err) => {
        alert(err.response.data.error);
      });
    console.log(formdata.imageUrl);
    const config = {
      headers: {
        "content-type": "application/json",
      },
    };
    axios
      .post("/api/product/product", body, config)
      .then((res) => {
        console.log(res.data);
      })
      .catch((err) => {
        alert(err.response.data.msg);
      });
  };
  console.log(categories);
  return (
    <div className="bg-blue-600 py-20">
      <div className="w-full sm:max-w-2xl sm:mx-auto max-h-full  p-10 bg-gray-100 shadow-lg rounded-lg">
        <h1 className="text-4xl font-bold tracking-widest text-blue-600 text-center">
          Create Product
        </h1>
        <div className=" items-center justify-center">
          <form onSubmit={onSubmit} className="flex flex-col space-y-2 py-4">
            <input
              type="text"
              placeholder="product Name"
              name="productName"
              value={formdata.productName}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="product Price"
              name="productPrice"
              value={formdata.productPrice}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="number"
              placeholder="discount Price"
              name="discountPrice"
              value={formdata.discountPrice}
              onChange={onChange}
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />
            <input
              type="text"
              name="description"
              value={formdata.description}
              onChange={onChange}
              placeholder="description"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />

            <div className="">
              <select
                className="px-10 py-1 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
                name="category"
                id=""
                onChange={onChange}
              >
                {categories.map((cats) => (
                  <Fragment key={cats.key}>
                    <option>
                      select Categories
                    </option>
                    <option  value={cats.id}>
                      {cats.catName}
                    </option>
                  </Fragment>
                ))}
              </select>
            </div>
            <input
              type="file"
              onChange={(e) => {
                setFile(e.target.files[0]);
                setImgUrl(e.target.files[0].name);
              }}
              name="imageUrl"
              className="px-10 py-2 outline-none focus:ring-1 ring-pink-400 rounded-md placeholder-gray-400"
            />

            <button
              type="submit"
              className="mt-2 px-8 py-2 text-lg text-white bg-green-700 rounded-lg hover:bg-green-600 active:bg-green-500 focus:ring-1 ring-green-200"
            >
              Create Product
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default CreateProduct;
