import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Autoplay, Navigation } from "swiper/modules";
import LoaderSpinner from "../components/shared/LoaderSpinner";

const Details = () => {
  const [post, setPost] = useState({});
  const [loading, setLoading] = useState(true);
  const { id } = useParams();

  useEffect(() => {
    axios.get(`${import.meta.env.VITE_Server_URL}/post/${id}`).then((res) => {
      setPost(res.data);
      setLoading(false);
    });
  }, [id]);

  return (
    <div className="container mx-auto mb-20 p-4 md:p-8 lg:p-12">
      <div className="">
        {loading ? (
          <LoaderSpinner></LoaderSpinner>
        ) : (
          <div className="">
            {/* slider */}
            <div className="">
              <Swiper
                navigation={true}
                modules={[Navigation, Autoplay]}
                className="mySwiper"
                autoplay={{
                  delay: 3000,
                  disableOnInteraction: false,
                }}
                speed={1000}
              >
                <SwiperSlide>
                  <img
                    src={post?.allImage?.photo1}
                    alt=""
                    className="w-full object-cover h-[450px] md:h-[550px] lg:h-[700px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={post?.allImage?.photo2}
                    alt=""
                    className="w-full object-cover h-[450px] md:h-[550px] lg:h-[700px]"
                  />
                </SwiperSlide>
                <SwiperSlide>
                  <img
                    src={post?.allImage?.photo3}
                    alt=""
                    className="w-full object-cover h-[450px] md:h-[550px] lg:h-[700px]"
                  />
                </SwiperSlide>
              </Swiper>
            </div>
            {/*text  */}
            <div className="">
                <div 
                data-aos="zoom-in"
                data-aos-duration="1200"
                className="">
                    <h1 className="text-center text-3xl font-semibold my-6">{post?.title}</h1>
                    <p className="text-center my-4 text-[#ff014f] uppercase text-xl font-semibold">{post?.type}</p>
                    <p className="text-center font-medium text-gray-300 text-xl">{post?.description}</p>
                </div>
                <div
                data-aos="fade-up"
                data-aos-duration="1200"
                 className="mt-8 flex flex-col gap-3">
                    <p 
                    onClick={() =>
                        window.open(
                          `${post?.liveUrl}`,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    className="text-center hover:text-blue-600 text-xl md:text-2xl cursor-pointer text-gray-400">
                      <span className="font-semibold">LiveUrl: </span> 
                      <span className=""> {post?.liveUrl}</span> 
                    </p>

                    <p 
                    onClick={() =>
                        window.open(
                          `${post?.
                            clientUrl}`,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    className="text-center hover:text-blue-600 text-xl md:text-2xl cursor-pointer text-gray-400">
                      <span className="font-semibold">Client-Repo: </span> 
                      <span className=""> {post?.clientUrl}</span> 
                    </p>
                    
                    <p 
                    onClick={() =>
                        window.open(
                          `${post?.serverUrl}`,
                          "_blank",
                          "noopener,noreferrer"
                        )
                      }
                    className="text-center hover:text-blue-600 text-xl md:text-2xl cursor-pointer text-gray-400">
                      <span className="font-semibold">Server-Repo: </span> 
                      <span className=""> {post?.serverUrl || "Not MERN Project"}</span> 
                    </p>
                </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default Details;
