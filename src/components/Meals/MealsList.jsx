import MealsItem from "./MealsItem";

const meals = [
  {
    id: "m1",
    title: "Crispy Tofu Salad",
    description: "Green beans, pickled carrot, fennel, onion",
    price: 25.55,
  },
  {
    id: "m2",
    title: "Katsu Chicken",
    description: "Panko chicken, shredded cos, pickles",
    price: 23.55,
  },
  {
    id: "m3",
    title: "Lumberjack Burger",
    description: "Double beef, double cheese, lettuce",
    price: 32.99,
  },
  {
    id: "m4",
    title: "Roasted Pumpkin",
    description: "Farro, radicchio, spiced pumpkin seeds",
    price: 28.55,
  },
];

const MealsList = () => {

  const mealslist = meals.map((meal) => (
    <MealsItem
        key={meal.id}
        id={meal.id}
        title={meal.title}
        description={meal.description}
        price={meal.price}
      />
    ));

  return (
    <ul className="list">
      {mealslist}
    </ul>
  );
};

export default MealsList;
