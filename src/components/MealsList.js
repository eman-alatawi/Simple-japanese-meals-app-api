import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";
export default function MealsList() {
  const [meals, setMeals] = useState([]);

  useEffect(() => {
    fetchMeals();
  }, []);

  function fetchMeals() {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Japanese")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.meals);
        setMeals(result.meals);
      });
  }

  return (
    <>
      <div className="meals-container">
        {meals.map((meal) => (
          <MealCard
            key={meal.idMeal}
            name={meal.strMeal}
            picture={meal.strMealThumb}
          />
        ))}
      </div>
    </>
  );
}
