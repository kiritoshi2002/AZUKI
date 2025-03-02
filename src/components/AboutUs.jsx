import React from "react";

function AboutUs () {
return (
    <div
      id="section2" 
      className="py-5 min-h-[500px] flex items-center justify-center relative bg-cover bg-center"
      style={{ backgroundImage: `url('https://images2.alphacoders.com/132/1322098.png')` }}
    >
    
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>

      <div className="relative z-10 p-8 rounded-lg text-white max-w-full">
        <h2 className="text-4xl mb-5">About Us</h2>
        <p className="text-lg mb-5">
          Welcome to <strong>Azuki Japanese Restaurant</strong>, where we bring the authentic flavors of Japan right to your table. 
          Our restaurant is renowned for its exquisite sushi, traditional ramen, and the warm, inviting ambiance that makes every meal a special occasion.
        </p>
        <p className="text-lg">
          At Azuki, we pride ourselves on using only the freshest ingredients and traditional techniques to deliver an unparalleled dining experience. 
          Our team of skilled chefs is dedicated to crafting dishes that honor the rich culinary heritage of Japan.
        </p>
      </div>
    
  </div>
);
}
export default AboutUs