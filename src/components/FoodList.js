import FoodItem from "./FoodItem";
import { useQuery } from '@tanstack/react-query';

const fetchJson = async(url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};
export const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
  return [ data, isLoading, error ];
};


const NewFoodPage = ({ page }) => {
  const [data, isLoading, error] = useJsonQuery("./data.json");
  console.log(data);
  return (
    // data = useJsonQuery("./data.json");
    <div>
      <FoodItem name={"Tomato"} expires={"2022-10-07"}/>
      <FoodItem name={"Lettuce"} expires={"2022-10-07"}/>
      <FoodItem name={"Apple"} expires={"2022-10-07"}/>
      <FoodItem name={"Milk"} expires={"2022-10-07"}/>
    </div>
    
  );
};

export default NewFoodPage;
