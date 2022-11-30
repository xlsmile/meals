import MealsItem from "./MealsItem";

const meals = [
  {
    id: "m1",
    title: "Creamy Grape",
    description: "Chopped pecans, vanilla extract, green grapes",
    price: 25.55,
  },
  {
    id: "m2",
    title: "Pina Colada",
    description: "Almond extract, blueberries, mint, raspberries",
    price: 23.55,
  },
  {
    id: "m3",
    title: "Cranberry Waldorf",
    description: "Marshmallows, whipped cream, nuts, cranberries",
    price: 32.99,
  },
  {
    id: "m4",
    title: "Tropical Fruit",
    description: "Cubed pears, mangoes, strawberries, kiwifruit",
    price: 28.55,
  },
];

const MealsList = () => {
  const mealslist = meals.map((meal) => (
    <MealsItem key={meal.id} id={meal.id} title={meal.title} description={meal.description} price={meal.price} />
  ));

  return <ul className="list">{mealslist}</ul>;
};

export default MealsList;
