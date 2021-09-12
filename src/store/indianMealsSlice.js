export const indianMealsSlice = (set) => ({
  indianMeals: [],
  fetchIndianMeals: () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Indian")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.meals);
        set({ indianMeals: result.meals });
      });
  },
});
