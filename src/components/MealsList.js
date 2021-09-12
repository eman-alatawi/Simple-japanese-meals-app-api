import React, { useState, useEffect } from "react";
import MealCard from "./MealCard";
import useStore from "../store/useStore";

export default function MealsList() {
  const [meals, setMeals] = useState([]);

  const egyptianMeals = useStore((state) => state.egyptianMeals)
  const italianMeals = useStore((state) => state.italianMeals)
  const indianMeals = useStore((state) => state.indianMeals)

  const fetchEgyptianMeals = useStore((state) => state.fetchEgyptianMeals)
  const fetchItalianMeals = useStore((state) => state.fetchItalianMeals)
  const fetchIndianMeals = useStore((state) => state.fetchIndianMeals)

  useEffect(() => {
    fetchEgyptianMeals();
    fetchItalianMeals();
    fetchIndianMeals();
  }, []);

  function egyptianMealsHandler() {
    setMeals(egyptianMeals);
  }

  function italianMealsHandler() {
    setMeals(italianMeals);
  }
  function indianMealsHandler(){
    setMeals(indianMeals)
  }


  return (
    <>
      <div class="categories-container">
        <h3>Filter by Area</h3>
        <button onClick={egyptianMealsHandler}>Egyptian Meals</button>
        <button onClick={italianMealsHandler}>Italian Meals</button>
        <button onClick={indianMealsHandler}>Indian Meals</button>
      </div>

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
