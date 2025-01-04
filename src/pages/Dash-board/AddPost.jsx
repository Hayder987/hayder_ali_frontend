import { useState } from "react";
import { uploadImage } from "../../api/imageUpload";
import axios from "axios";
import Swal from "sweetalert2";

const AddPost = () => {
  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [img3, setImg3] = useState(null);

  const addProjectHandler = async (e) => {
    e.preventDefault();
    const form = e.target;
    const title = form.title.value;
    const type = form.type.value;
    const description = form.description.value;
    const liveUrl = form.liveUrl.value;
    const clientUrl = form.clientUrl.value;
    const serverUrl = form.serverUrl.value;
    const postDate = new Date();

    const photo1 = await uploadImage(img1);
    const photo2 = await uploadImage(img2);
    const photo3 = await uploadImage(img3);

    const project = {
      title,
      type,
      description,
      liveUrl,
      clientUrl,
      serverUrl,
      allImage: {
        photo1,
        photo2,
        photo3,
      },
      postDate,
    };

    try {
      await axios.post(`${import.meta.env.VITE_Server_URL}/project`, project);
      Swal.fire({
        position: "top-end",
        icon: "success",
        title: "Project added SuccessFully!",
        showConfirmButton: false,
        timer: 1500,
      });
      form.reset()
      setImg1(null)
      setImg2(null)
      setImg3(null)
    } catch (error) {
      Swal.fire({
        title: error?.message,
        icon: "error",
        draggable: true,
      });
    }
    
  };

  return (
    <div className="p-10">
      <div className="max-w-[1100px] mx-auto overflow-scroll bg-white p-8 rounded-lg">
        <h1 className="text-2xl text-center font-semibold mb-4 text-black">
          Add Project
        </h1>
        <form onSubmit={addProjectHandler} className="flex flex-col gap-4">
          {/* title and Type */}
          <div className="flex gap-4">
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <input
                type="text"
                placeholder="Title"
                name="title"
                className="input text-black input-bordered"
                required
              />
            </div>
            <div className="form-control w-full">
              <label className="label">
                <span className="label-text">Types</span>
              </label>
              <select
                name="type"
                className="select select-bordered w-full text-black"
              >
                <option disabled>Who shot first?</option>
                <option value="mern">MERN</option>
                <option value="frontend">Frontend</option>
                <option value="backend">Backend</option>
              </select>
            </div>
          </div>
          {/* desc */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Description</span>
            </label>
            <textarea
              name="description"
              className="textarea text-black textarea-bordered resize-none"
              placeholder="description"
            ></textarea>
          </div>
          {/* live Url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Live Url</span>
            </label>
            <input
              type="url"
              placeholder="Enter a live URL"
              name="liveUrl"
              className="input text-black input-bordered"
              required
            />
          </div>
          {/* Client Url */}
          <div className="form-control w-full">
            <label className="label">
              <span className="label-text">Client Repo Url</span>
            </label>
            <input
              type="url"
              placeholder="Enter a Client URL"
              name="clientUrl"
              className="input text-black input-bordered"
              required
            />
          </div>
          {/* Server Url */}
          <div className="form-control w-full overflow-hidden">
            <label className="label">
              <span className="label-text">Server Repo Url</span>
            </label>
            <input
              type="url"
              placeholder="Enter a server URL"
              name="serverUrl"
              className="input text-black input-bordered"
              
            />
          </div>
          <div className="flex justify-between gap-4">
            {/* upload-1 */}
            <div className="">
              <div className="flex flex-col overflow-hidden gap-2 py-5">
                <label className="font-semibold">
                  <input
                    type="file"
                    name="photo1"
                    onChange={(e) => setImg1(e.target.files[0])}
                    required
                    accept="images/*"
                    className="hidden w-full h-full"
                  />
                  <div className="p-3 overflow-hidden border-dashed border-2 border-gray-500 cursor-pointer">
                    <p className="text-center overflow-hidden bg-orange-500 text-white p-2">
                      {img1 ? img1.name : "Upload Photo 1"}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            {/* upload-2 */}
            <div className="">
              <div className="flex flex-col overflow-hidden gap-2 py-5">
                <label className="font-semibold">
                  <input
                    type="file"
                    name="photo2"
                    onChange={(e) => setImg2(e.target.files[0])}
                    required
                    accept="images/*"
                    className="hidden w-full h-full"
                  />
                  <div className="p-3 overflow-hidden border-dashed border-2 border-gray-500 cursor-pointer">
                    <p className="text-center overflow-hidden bg-orange-500 text-white p-2">
                      {img2 ? img2.name : "Upload Photo 2"}
                    </p>
                  </div>
                </label>
              </div>
            </div>
            {/* upload-3 */}
            <div className="">
              <div className="flex overflow-hidden flex-col gap-2 py-5">
                <label className="font-semibold">
                  <input
                    type="file"
                    name="photo3"
                    onChange={(e) => setImg3(e.target.files[0])}
                    required
                    accept="images/*"
                    className="hidden w-full h-full"
                  />
                  <div className="p-3 overflow-hidden border-dashed border-2 border-gray-500 cursor-pointer">
                    <p className="text-center overflow-hidden  bg-orange-500 text-white p-2">
                      {img3 ? img3.name : "Upload Photo 3"}
                    </p>
                  </div>
                </label>
              </div>
            </div>
          </div>
          <div className="">
            <button
              type="submit"
              className={`text-white  bg-[#ff014f] font-semibold p-3 rounded-lg w-full`}
            >
              Add Post
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddPost;
