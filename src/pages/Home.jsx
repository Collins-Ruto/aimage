import React, { useState } from "react";
import HomeExplore from "../components/HomeExplore";
import { Link } from "react-router-dom";

const cards = [
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    text: "Abstract",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    text: "Photo",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    text: "Anime",
  },
];

function Home() {
  const [prompt, setPrompt] = useState({});
  const [select, setSelect] = useState()

  console.log("prompt", prompt);

  const ImageCard = () => {
    return (
      <div className=" text-justify mb-4">
        <span className="">Choose a Preset Theme</span>
        <div className="flex justify-between py-2">
          {cards.map((card, index) => {
            const style = {
              backgroundImage: `url(${card.url})`,
              backgroundPosition: "top",
              backgroundSize: "cover",
              backgroundRepeat: "no-repeat",
              filter: select === index ? "brightness(80%)" : "brightness(40%)",
              width: window.innerWidth <= 768 ? "6rem" : "7.7rem",
              height: window.innerWidth <= 768 ? "4.5rem" : "5rem",
              backgroundBlendMode: "darken",
              borderRadius: "3px",
              border: select === index && "2px solid white",
              color: select === index ? "blue" : "white",
            };
            return (
              <div className="focus:border-4 border-red-500" key={index}>
                <div
                  onClick={(e) => {
                    setPrompt({ ...prompt, style: card.text });
                    setSelect(index);
                  }}
                  className="cursor-pointer relative rounded hover:opacity-80 focus:opacity-90 hover:bg-black hover:ring-blue-500 "
                >
                  <div
                    className="absolute -z-10 hover:border-4 focus:border-4 border-blue-500"
                    style={style}
                  ></div>
                  <div
                    className={` ${
                      select === index ? "text-white" : "text-gray-300"
                    } pt-12 min-w-[7rem] md:pt-14 px-2`}
                  >
                    {card.text}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className=" text-white overflow-hidden">
      <div className="bg-local h-[90vh] md:h-screen relative">
        <div
          className="absolute -z-10"
          style={{
            backgroundImage: `url("https://static.fotor.com/app/features/img/aiimage/advance/a%20beautiful%20girl%20illustration%20style%20image%20created%20by%20ai%20art.jpg")`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(30%)",
            width: "100vw",
            height: window.innerWidth >= 768 ? "100vh" : "90vh",
            backgroundBlendMode: "darken",
            
          }}
        ></div>
        <div className="md:h-full flex justify-around">
          <div className="text-center p-4 pt-[25%] md:pt-[10%] md:w-[35rem]">
            <span className="text-5xl font-bold py-4">
              AI Art Image Generator
            </span>
            <h2 className="text-xl font-medium py-6">
              Transform your thoughts to amazing and even award-wining works of
              art, All by Ai
            </h2>
            <div className=" w-[20rem] md:w-[25rem] mx-auto">
              <h1 className="text-justify pt-2 font-medium">
                What do you have in mind ?
              </h1>
              <div className="text-justify pb-4">
                <input
                  onChange={(e) => {
                    setPrompt({ ...prompt, text: e.target.value });
                  }}
                  type="text"
                  id="description"
                  className="bg-transparent border shadow-md border-white text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Eg. Master Kung-Fu Cat "
                  required
                />
              </div>
              <ImageCard />
              <Link
                to="/generate"
                state={{ prompt: prompt }}
                className="px-[7.5rem] mt-4 md:px-40 py-2.5 cursor-pointer rounded bg-pink-600 hover:bg-pink-500"
              >
                GENERATE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div id="explore" className=" hidden text-center p-4  text-black">
        <span className="text-3xl md:text-4xl text-bold">
          Explore AI Generated Art
        </span>
        <HomeExplore />
      </div>
    </div>
  );
}

export default Home;
