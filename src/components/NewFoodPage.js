import FoodItem from "./FoodItem";

const NewFoodPage = ({ page }) => {
  return (
    <div>
      <FoodItem name={"Tomato"} expires={"2022-10-07"}/>
      <FoodItem name={"Lettuce"} expires={"2022-10-07"}/>
      <FoodItem name={"Apple"} expires={"2022-10-07"}/>
      <FoodItem name={"Milk"} expires={"2022-10-07"}/>
    </div>
    
  );
};

export default NewFoodPage;
