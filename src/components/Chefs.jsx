import React from "react";

function Chefs() {
  return (
    <div>
      <div className="bg-black px-3 py-3">
        <div className="h-[750px] flex justify-center items-center lg:px-32 px-5 relative bg-[url('./assets/images/nhere.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="w-full lg:w-2/3 flex items-center justify-center relative">
            <h1 className="text-white font-semibold text-6xl text-center">
              The Azuki
            </h1>
          </div>
        </div>
      </div>

      <div className="bg-white py-12 ">
        <div className="max-w-6xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start">
            <div className="w-full h-[931px] bg-black flex justify-center items-center">
              <img
                className="rounded-lg object-cover max-w-full max-h-[931px] md:max-h-full"
                src="https://wallpapercave.com/wp/wp1882340.jpg"
                alt="azuki"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Gorden Ramsey
              </h1>
              <div className="text-lg text-gray-800 space-y-4">
                <p>
                  <span className="font-normal">
                    Born and raised in the culinary world, Gorden Ramsey
                    commands four renowned establishments. His first venture,
                    Gorden's Bar, opened in 2008 and quickly became a staple in
                    the food scene. He also manages several successful family
                    businesses, including Gorden's Grill, Ramsey's Ice Cream,
                    and Gorden's Bistro, ranked among the top restaurants
                    worldwide.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    From 2015 to 2019, Gorden partnered with local government
                    initiatives to improve school meals by replacing processed
                    ingredients with fresh, locally sourced products. This
                    project benefited over two million students and
                    significantly improved the quality of school lunches across
                    the city.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    In 2020, Gorden received the Culinary Icon Award, recognized
                    for his efforts in using his platform to drive positive
                    change in the culinary community. His work continues to
                    inspire chefs and food lovers around the globe.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    In June 2021, Gorden took on the role of President of the
                    Global Taste Institute, a foundation promoting the
                    appreciation of quality ingredients worldwide. He is also
                    the co-author of "50 Dishes That Defined a Generation" and,
                    in 2022, was named Culinary Ambassador representing modern
                    cuisine.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-white py-12">
        <div className="max-w-6xl mx-auto pt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
            <div className="w-[full] h-[931px] bg-black relative overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-cover"
                src="https://t4.ftcdn.net/jpg/06/29/07/85/360_F_629078540_iJCavQcj1p8VtbqwLM9G7fM9W4yjiuhX.jpg"
                alt="azuki"
              />
            </div>

            <div>
              <h1 className="text-4xl font-bold text-gray-900 mb-6">
                Haruto Yamamoto
              </h1>
              <div className="text-lg text-gray-800 space-y-4">
                <p>
                  <span className="font-normal">
                    Born and raised in Tokyo, Haruto Yamamoto leads four
                    celebrated establishments in the city. His first venture,
                    Yamamoto Sushi Bar, opened in 2008 and quickly became a
                    pivotal part of the area's culinary scene. He also oversees
                    family-run businesses including Haruto's Ramen, Tokyo Ice
                    Cream, and Azuki, ranked among the top 20 restaurants in
                    Japan.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    From 2015 to 2019, Yamamoto worked closely with the local
                    government to develop the “Chefs for Education” project,
                    replacing processed foods in public schools with fresh,
                    locally sourced ingredients. This initiative benefited over
                    one million students across Tokyo, significantly elevating
                    the quality of school meals.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    In 2020, Yamamoto received the Japan Culinary Icon Award,
                    recognized for his role in promoting sustainable practices
                    and for using his platform to inspire change in the culinary
                    world. His work has had a lasting impact on the gastronomic
                    community in Japan and beyond.
                  </span>
                </p>
                <p>
                  <span className="font-normal">
                    In June 2021, Yamamoto was appointed president of the Japan
                    Culinary Institute, which champions the use of traditional
                    Japanese ingredients and ensures their availability for
                    future generations. He is also the author of the book “50
                    Restaurants Shaping Japan’s Future,” and in 2022, he became
                    a culinary ambassador, representing modern Japanese cuisine
                    internationally.
                  </span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Chefs;
