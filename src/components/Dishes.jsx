import React from "react";
import DishesCard from "../layouts/DishesCard";
import kushikatsu from "../assets/img/kushikatsu.jpg";
const Dishes = () => {
  return (
    <div className=" min-h-screen flex flex-col justify-center items-center lg:px-32 px-5">
      <h1 className=" text-4xl font-semibold text-center pt-24 pb-10">
        Our Dishes
      </h1>
      <div className=" flex flex-wrap gap-8 justify-center">
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
        <DishesCard img={kushikatsu} title="Tasty Dish" price="$10.23" />
      </div>
    </div>
  );
};
export default Dishes;
