export const egyptianMealsSlice = (set) => ({
  egyptianMeals: [],

  fetchEgyptianMeals: () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Egyptian")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.meals);
        set({ egyptianMeals: result.meals });
      });
  },
});
