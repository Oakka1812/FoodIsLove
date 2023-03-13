import axios from "axios";
import React, { useEffect, useState } from "react";
import Card from "./Card";
import Loading from "./Loading";

const Meals = () => {
  const [meals, setMeals] = useState([]);
  const [loading, setLoading] = useState(true);
  const getMeals = async () => {
    const { data } = await axios.get(
      "https://www.themealdb.com/api/json/v1/1/filter.php?c=Seafood"
    );
    setMeals(data.meals);
    setLoading(false);
  };
  useEffect(() => {
    getMeals();
  }, []);
  return (
    <>
      {loading ? (
        <Loading />
      ) : (
        <div className="flex flex-wrap gap-5">
          {meals?.map((meal) => (
            <Card key={meal.idMeal} meal={meal} />
          ))}
        </div>
      )}
    </>
  );
};

export default Meals;
