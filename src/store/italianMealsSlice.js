export const italianMealsSlice = (set) => ({
  italianMeals: [],
  fetchItalianMeals: () => {
    fetch("https://www.themealdb.com/api/json/v1/1/filter.php?a=Italian")
      .then((res) => res.json())
      .then((result) => {
        console.log(result.meals);
        set({ italianMeals: result.meals });
      });
  },
});
