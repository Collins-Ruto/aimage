import React, { useState, useEffect } from "react";
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

const dum2 = {
  email: "janedoe@gmail.com",
  name: "Jane Doe",
  title: "Jane Doe",
};

const dum3 = {
  title: "Cat and mouse",
  fields: {
    url: "https://thumbs.dreamstime.com/b/cat-mouse-looking-each-other-generative-ai-cat-mouse-looking-each-other-generative-ai-271514770.jpg",
    prompt: "Cat and mouse",
    style: "Abstract",
    creator: 22,
  },
};

function Home() {
  const [prompt, setPrompt] = useState("");
  const [images, setImages] = useState([]);
  const [creators, setCreators] = useState([]);
  
  const [imageData, setImageData] = useState(dum3);

  useEffect(() => {
    async function loadPosts() {
      const res = await fetch("http://aimage.local/wp-json/wp/v2/images");
      const resCreators = await fetch(
        "http://aimage.local/wp-json/wp/v2/creators"
      );
      const images = await res.json();
      const creators = await resCreators.json();

      setImages(images);
      setCreators(creators);

      const response = await fetch(
        "http://aimage.local/wp-json/jwt-auth/v1/token",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            username: "collinsruto48",
            password: "@11339134Word",
          }),
        }
      );

      const data = await response.json();

      console.log("tokens", data);

      if (data.token) {
        return data.token;
      } else {
        throw new Error("Authentication failed");
      }
    }

    loadPosts();
  }, []);

  console.log("images", images);
  console.log("creators", creators);

  const yourAccessToken =
    "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwOi8vYWltYWdlLmxvY2FsIiwiaWF0IjoxNjc4NTQ3NjQ1LCJuYmYiOjE2Nzg1NDc2NDUsImV4cCI6MTY3OTE1MjQ0NSwiZGF0YSI6eyJ1c2VyIjp7ImlkIjoiMSJ9fX0.6svM4-Buvny4gnJcc5UMH111HLHNJbZUtzfMoebYaVw";

  const addImage = () => {
    console.log("adding", imageData);
    fetch(`http://aimage.local/wp-json/wp/v2/images`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${yourAccessToken}`,
      },
      body: JSON.stringify(imageData),
    })
      .then((response) => response.json())
      .then((data) => console.log(data))
      .catch((error) => console.error(error));
  };

  const ImageCard = () => {
    return (
      <div className="text-justify mb-4">
        <span className="">Choose a Preset Theme</span>
        <div className="flex gap-4 py-2">
          {cards.map((card, index) => {
            return (
              <div
                className="w-64 cursor-pointer relative rounded hover:opacity-80 hover:bg-black hover:ring-blue-500 focus:ring-blue-500 focus:border-blue-500"
                key={index}
              >
                <div
                  className="absolute -z-10"
                  style={{
                    backgroundImage: `url(${card.url})`,
                    backgroundPosition: "top",
                    backgroundSize: "cover",
                    backgroundRepeat: "no-repeat",
                    filter: "brightness(40%)",
                    width: "7.7rem",
                    height: "5rem",
                    backgroundBlendMode: "darken",
                    borderRadius: "3px",
                  }}
                ></div>
                <div className="pt-14 px-2">{card.text}</div>
              </div>
            );
          })}
        </div>
      </div>
    );
  };
  return (
    <div className=" text-white overflow-hidden">
      <div className="bg-local h-screen relative">
        <div
          className="absolute -z-10"
          style={{
            backgroundImage: `url("https://static.fotor.com/app/features/img/aiimage/advance/a%20beautiful%20girl%20illustration%20style%20image%20created%20by%20ai%20art.jpg")`,
            backgroundPosition: "top",
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat",
            filter: "brightness(30%)",
            width: "100vw",
            height: "100vh",
            backgroundBlendMode: "darken",
          }}
        ></div>
        <div className="h-full flex justify-around">
          <div className="text-center pt-[10%] md:w-[35rem]">
            <span className="text-5xl font-bold py-4">
              AI Art Image Generator
            </span>
            <h2 className="text-xl font-medium py-6">
              Transform your thoughts to amazing and even award-wining works of
              art, All by Ai
            </h2>
            <div className="md:w-[25rem] mx-auto">
              <h1 className="text-justify pt-2 font-medium">
                What do you have in mind ?
              </h1>
              <div className="text-justify pb-4">
                <input
                  onChange={(e) => {
                    setPrompt(e.target.value);
                  }}
                  type="text"
                  id="description"
                  className="bg-transparent border shadow-md border-white text-gray-900 text-sm rounded focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                  placeholder="Eg. Master Kung-Fu Cat "
                  required
                />
              </div>
              <ImageCard />
              <Link
                to="/generate"
                state={{ prompt: prompt }}
                className="px-40 py-2.5 cursor-pointer rounded bg-pink-600 hover:bg-pink-500"
              >
                GENERATE
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div
        onClick={() => {
          addImage();
        }}
        className="p-4 bg-pink-500 w-20"
      >
        add
      </div>
      <div id="explore" className="h-screen text-center p-4  text-black">
        <span className="text-4xl text-bold">Explore AI Generated Art</span>
        <HomeExplore />
      </div>
    </div>
  );
}

export default Home;