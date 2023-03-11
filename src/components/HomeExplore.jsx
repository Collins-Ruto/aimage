import React, { useState } from "react";

const dum1 = [
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    name: "Abstract",
  },
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    name: "Abstract",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    name: "Abstract",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    name: "Abstract",
  },
  {
    url: "https://static.fotor.com/app/features/img/aiimage/advance/a%20beautiful%20girl%20illustration%20style%20image%20created%20by%20ai%20art.jpg",
    name: "Abstract",
  },
  {
    url: "https://cdn.pixabay.com/photo/2023/02/15/17/23/ai-generated-7792328__340.jpg",
    name: "Abstract",
  },
  {
    url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSoZNQBDC3jnVy4c9O5pxNtwpXze6LmzLAZF1-zw6-bg-aZQ1q1cdMzmNJRLDnBESTIyKs&usqp=CAU",
    name: "Abstract",
  },
  {
    url: "https://i.etsystatic.com/40764003/r/il/1c4a71/4578010138/il_340x270.4578010138_3aks.jpg",
    name: "Abstract",
  },
];

function HomeExplore() {
  const [arts, setArts] = useState(dum1);

  const ArtCard = () => {
    return (
      //   <div className="flex gap-3 justify-between flex-wrap">
      <div className=" grid grid-cols-3 md:grid-cols-4 gap-2">
        {arts.map((art, index) => {
          return (
            <div className="relative grow" key={index}>
              <img
                className="w-full h-60 object-cover"
                src={art.url}
                alt={art.name}
              />
              <div className="absolute inset-0 bg-black opacity-0 hover:opacity-50 transition-opacity">
                <div className="text-white absolute inset-0 flex justify-center items-center">
                  <p>{art.name}</p>
                </div>
              </div>
              <div className="absolute flex items-center cursor-pointer font-medium -mt-8 ">
                <img
                  className="ml-3 w-8 h-8 "
                  src="https://img.icons8.com/ios/50/000000/visible--v1.png"
                  alt=""
                />{" "}
                1300
                <img
                  className="ml-3 w-6 h-6"
                  src="https://img.icons8.com/pastel-glyph/64/000000/hearts--v1.png"
                  alt=""
                />{" "}
                246
              </div>
            </div>
          );
        })}
      </div>
    );
  };
  return (
    <div className="p-4">
      <ArtCard />
    </div>
  );
}

export default HomeExplore;