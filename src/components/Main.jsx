import React from "react";
import Banner from "./banner";
import { NavLink } from "react-router-dom";

function MainHome() {
  return (
    <div className="">
      <main className="dark:bg-neutral-900">
        <div>
          <Banner />
        </div>

        {/* Main Section */}
        <div className="px-1 pt-1 pb-20 dark:bg-neutral-900">
          <div className="relative w-full flex flex-col justify-center items-center text-center bg-[url('./assets/images/ramen.jpg')] bg-center bg-no-repeat py-16 pb-1 min-h-[600px]">
            <div className="absolute inset-0 bg-black bg-opacity-50"></div>
            <h1 className="text-4xl lg:text-6xl font-serif font-bold mb-4 text-white relative z-10">
              Elevated Izakaya Dining
            </h1>
            <p className="text-lg lg:text-xl italic max-w-prose mx-auto mb-6 text-white relative z-10">
              "A harmony of flavors, tradition, and innovation. Welcome to
              Azuki, where every dish tells a story of Japan’s rich culinary
              heritage."
              <br />– Chef Sato and Yuki.
            </p>
            <p className="text-md lg:text-lg max-w-prose mx-auto text-white relative z-10">
              From the finest sashimi to hand-rolled maki, explore Japanese
              cuisine in its purest and most exquisite form.
            </p>
            <NavLink to="/menu">
              <button className="mt-6 px-6 py-3 bg-black text-white uppercase tracking-widest hover:bg-gray-800 relative z-10">
                Explore Our Full Menu
              </button>
            </NavLink>
          </div>
        </div>

        {/* Second Section */}
        <div className="relative w-full pt-1 flex flex-col justify-center items-center text-center bg-[url('./assets/images/banner.jpg')] bg-center bg-no-repeat py-16 min-h-[600px]">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>
          <div className="max-w-screen-lg mx-auto px-5 relative z-10">
            <div className="w-full text-center">
              <h5 className="text-3xl font-bold text-white mb-4">
                #DiscoverOurRoots
              </h5>
              <p className="text-lg lg:text-xl text-white leading-relaxed">
                Azuki welcomes everyone to experience authentic Japanese
                cuisine. We work with reservations or walk-ins. Take time to
                explore the cultural heart of the area while you wait.
              </p>
            </div>
          </div>
        </div>

        {/* Quick Bite Section */}
        <div className="w-full dark:bg-neutral-900 py-16">
          <div className="max-w-screen-xl mx-auto px-5">
            <div className="flex flex-col lg:flex-row">
              <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
                <img
                  src="https://feeds.oddle.me/wp-content/uploads/2021/09/Season-Special-Omaase-Bento-Yoshi-and-the-Horses-Mouth-759x500.jpg"
                  alt="Comida Rápida"
                  className="w-full h-auto"
                />
              </div>
              <div className="w-full lg:w-1/2 flex items-center lg:pl-10">
                <div className="text-left">
                  <h5 className="text-3xl font-bold leading-tight text-gray-800 dark:text-neutral-300 mb-6">
                    "Quick Bite" Window
                  </h5>
                  <p className="text-lg text-gray-700 font-semibold dark:text-neutral-300 leading-7">
                    Feeling the rush but still craving something delicious?
                    Visit us at our "Quick Bite" window, serving mouthwatering
                    Japanese treats on the go.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Discover Section */}
        <div className="w-full py-16 dark:bg-neutral-900 text-black dark:text-white">
          <div className="max-w-screen-xl mx-auto px-5 text-center">
            <h1 className="text-3xl font-bold">Discover Our New Additions:</h1>
            <h1 className="text-3xl font-bold mt-2">
              Sushi Express, Matcha Sweets, and Bento Corner
            </h1>
            <div className="mt-4 w-full h-0.5 bg-gray-300 mx-auto dark:bg-neutral-600"></div>
          </div>
        </div>

        {/* Sushi Express Section */}
        <div className="w-full py-16 dark:bg-neutral-800">
          <div className="max-w-screen-xl mx-auto px-5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://sushiincorporated.com/wp-content/uploads/2024/02/Futomaki-sushi.png"
                alt="Sushi Express"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center lg:pl-10">
              <div className="text-left">
                <h1 className="text-3xl font-bold mb-4">#SushiExpress</h1>
                <p className="text-lg dark:text-neutral-300">
                  Sushi Express offers quick and delicious sushi, perfect for
                  those on the go. We also have vegetarian options like avocado
                  rolls, cucumber maki, and tofu inari sushi.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Matcha Sweets Section */}
        <div className="w-full py-16 dark:bg-neutral-900">
          <div className="max-w-screen-xl mx-auto px-5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://prtimes.jp/i/16207/621/resize/d16207-621-424841-1.jpg"
                alt="Matcha Sweets"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center lg:pl-10 dark:text-neutral-300">
              <div className="text-left">
                <h1 className="text-3xl font-bold mb-4">#MatchaSweets</h1>
                <p className="text-lg">
                  Located next to Sushi Express, Matcha Sweets offers desserts
                  infused with matcha green tea. Our seasonal menu highlights
                  the best flavors of Japan.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bento Corner Section */}
        <div className="w-full py-16 dark:bg-neutral-800">
          <div className="max-w-screen-xl mx-auto px-5 flex flex-col lg:flex-row">
            <div className="w-full lg:w-1/2 mb-8 lg:mb-0">
              <img
                src="https://subarashi.nl/wp-content/uploads/2021/06/Z2.jpg"
                alt="Bento Corner"
                className="w-full h-auto"
              />
            </div>
            <div className="w-full lg:w-1/2 flex items-center lg:pl-10">
              <div className="text-left">
                <h1 className="text-3xl font-bold mb-4">#BentoCorner</h1>
                <p className="text-lg dark:text-neutral-300">
                  Bento Corner offers hearty Japanese meals, including chicken
                  teriyaki, salmon, and more. Each meal is prepared with organic
                  vegetables and comes with miso soup and pickled vegetables.
                </p>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default MainHome;
