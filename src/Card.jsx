import React from "react";
import { Link } from "react-router-dom";

const Card = ({ meal }) => {
  return (
    <div className="w-60 h-[350px] flex justify-center items-center border-2 flex-col px-4 rounded-lg relative shadow-lg hover:scale-105 transition duration-100">
      <img src={meal.strMealThumb} className="rounded" alt="" />
      <h3 className="text-sm">{meal.strMeal}</h3>
      <button className="text-white bg-blue-500 px-3 py-1 rounded absolute bottom-3">
      <Link to={`/detail/${meal.idMeal}`}>
        Detail
      </Link>
      </button>
    </div>
  );
};

export default Card;
