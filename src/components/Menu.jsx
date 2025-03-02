import React from "react";
import Button from "../layouts/Button";

function Menu() {
  return (
    <div>
      <div className="bg-black px-3 py-3">
        <div className="h-[750px] flex justify-center items-center lg:px-32 px-5 relative bg-[url('./assets/images/nhere.jpg')] bg-cover bg-no-repeat">
          <div className="absolute inset-0 bg-black bg-opacity-50"></div>

          <div className="w-full lg:w-2/3 flex items-center justify-center relative">
            <h1 className="text-white font-semibold text-6xl text-center">
              Menu
            </h1>
          </div>
        </div>
      </div>

      <div className="w-[1160px] mx-auto py-12 text-center">
        <h1 className="text-4xl font-bold mb-4">
          Journey Through the Flavors of Japan
        </h1>
        <div className="flex justify-center">
          <img
            src="https://c0.wallpaperflare.com/preview/1008/448/856/bowl-chopsticks-cuisine-delicious.jpg"
            alt="Main Dish"
            className="w-[1150px]"
          />
        </div>
        <p className="text-lg text-gray-700 mx-auto my-8 max-width: 1150px;">
          <b>
            A Journey Through Japan is inspired by the harmony of nature and the
            art of simplicity, bringing together seasonal ingredients and
            timeless techniques. This Autumn/Winter menu showcases a feast of
            delicate flavors and bold textures, highlighting the finest
            artisanal products from our kitchen. In the first stages, you will
            savor an array of handmade gyoza and yakitori, featuring
            locally-sourced, organic ingredients. A true highlight is the
            introduction of our exclusive Kurobuta pork, a free-range breed
            known for its exceptional marbling and flavor, grilled to perfection
            in traditional Robatayaki style.For a fully immersive experience,
            enjoy the harmonized version of our menu, featuring specially
            curated sake flights, artisanal shochu cocktails, and our
            house-brewed Japanese craft beer. Whether you're a lover of Japanese
            cuisine or a first-timer, this gastronomic experience promises an
            unforgettable journey for your palate.
          </b>
        </p>
      </div>

      <div className="w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-12 ">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://pixelz.cc/wp-content/uploads/2018/12/sushi-uhd-4k-wallpaper.jpg"
              alt="Porco San Zé"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Sushi</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Vinegared rice paired with seafood, vegetables, or egg, often
              wrapped in seaweed.
            </strong>
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center ">
            <img
              src="https://www.wallpaperflare.com/static/518/476/855/shrimps-sauce-mushrooms-seafood-wallpaper-preview.jpg"
              alt="Comendo com as mãos"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"

            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Tempura</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Lightly battered and deep-fried seafood or vegetables.
            </strong>
          </p>
        </div>
      </div>

      <div className="w-[520px] mx-auto py-12 text-center">
        <div className="flex justify-center">
          <img
            src="https://images7.alphacoders.com/106/thumb-1920-1063997.jpg"
            alt="Para Começar"
            className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Yakitori</h1>
        <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
          <strong>
            Grilled chicken skewers often seasoned with salt or tare sauce.
          </strong>
        </p>
      </div>

      <div className="w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-12 ">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://chefjacooks.com/wp-content/uploads/2023/07/soba-vs-udon-2.jpg"
              alt="Porco San Zé"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Soba & Udon</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Buckwheat (soba) or thick wheat (udon) noodles served hot or cold
              with various toppings.
            </strong>
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://c1.wallpaperflare.com/path/480/808/2/korea-koreanfood-noodle-noodles-food-dining-c19c33bfe977c17a54dbb92a1fcf1787.jpg"
              alt="Comendo com as mãos"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Donburi</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Bowls of rice topped with meat, seafood, or vegetables.
            </strong>
          </p>
        </div>
      </div>

      <div className="w-[520px] mx-auto py-12 text-center">
        <div className="flex justify-center">
          <img
            src="https://assets.epicurious.com/photos/582cc7b2ab5fdf6f143612b8/1:1/w_1920,c_limit/sweet-potato-and-brussels-sprout-okonomiyaki-BA-111516.jpg"
            alt="Para Começar"
            className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
          />
        </div>
        <h1 className="text-3xl font-bold mb-4">Okonomiyaki</h1>
        <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
          <strong>
            Savory pancakes with ingredients like cabbage, pork, or seafood,
            often topped with mayonnaise and sauce.
          </strong>
        </p>
      </div>

      <div className="w-[1160px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 py-12 ">
        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://c1.wallpaperflare.com/path/981/101/80/shabu-shabu-shabu-japanese-food-1b547ce729b608d2019d34fa6f08aebf.jpg"
              alt="Porco San Zé"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Sukiyaki & Shabu-Shabu</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Hot pot dishes where thinly sliced meat and vegetables are cooked
              and dipped in sauces.
            </strong>
          </p>
        </div>

        <div className="text-center">
          <div className="flex justify-center">
            <img
              src="https://c0.wallpaperflare.com/path/541/534/472/mexico-guadalajara-food-gyoza-0e450f8f37d200ee7f34f6ed95dc6266.jpg"
              alt="Comendo com as mãos"
              className="mb-4 w-[600px] h-[400px] object-cover rounded-lg"
            />
          </div>
          <h1 className="text-3xl font-bold mb-4">Gyoza</h1>
          <p className="text-lg text-gray-700 mx-auto max-width: 350px;">
            <strong>
              Japanese-style dumplings, usually filled with pork and vegetables.
            </strong>
          </p>
        </div>
      </div>
      <div className="w-4/5 mx-auto bg-white py-12">
        <div className="text-center">
          <div className="flex justify-center flex-col items-center">
            <div className="w-full border-t-2 border-gray-300"></div>

            <div className="my-0.5"></div>

            <div className="w-full border-t-2 border-gray-300"></div>
          </div>

          <div className="mt-8">
            <p
              className="font-sans text-lg text-gray-600 mx-auto"
              style={{ fontSize: "20px", width: "83%" }}
            >
              Acess Our Menu.
            </p>
            <Button title="Order" />
          </div>

          <div className="flex justify-center mt-8 flex-col items-center">
            <div className="w-full border-t-2 border-gray-300"></div>

            <div className="my-0.5"></div>

            <div className="w-full border-t-2 border-gray-300"></div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Menu;
