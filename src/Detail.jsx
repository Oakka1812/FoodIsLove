import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Loading from "./Loading";
import {RiYoutubeFill} from "react-icons/ri"

const Detail = () => {
  const { id } = useParams();
  const [meal, setMeal] = useState({});
  const [loading, setLoading] = useState(true);

  const getSingleMeal = async () => {
    const { data } = await axios.get(
      `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`
    );
    console.log(data.meals[0]);
    setMeal(data.meals[0]);
    setLoading(false);
  };

  useEffect(() => {
    getSingleMeal();
  }, []);

  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-col gap-2">
          <img
            src={meal.strMealThumb}
            width="300px"
            className="rounded-xl"
            alt=""
          />
          <div className="bg-orange-500 w-[80px] rounded-xl text-center text-white text-sm mb-3">
            {meal.strCategory}
          </div>
          <h1 className="font-bold text-lg">{meal.strMeal}</h1>
          <div>
            <h2 className="font-semibold text-base mb-2">Instruction</h2>
            <p className="text-gray-500 leading-5 text-sm tracking-wider">
              {meal.strInstructions}
            </p>
          </div>
          <div className="flex items-center gap-3">
            <RiYoutubeFill className="text-3xl text-red-600"/>
            <a href={meal.strYoutube} target="_blank" className="text-gray-500 text-sm">Watch on YouTube</a>
          </div>
        </div>
      )}
    </>
  );
};

export default Detail;
