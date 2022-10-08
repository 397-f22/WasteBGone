import FoodItem from "./FoodItem";
import { useQuery } from '@tanstack/react-query';
import test from "./test.json";
import { useDbData,useDbUpdate } from "../utilities/firebase.js";


const MyFoodsPage = ({ page }) => {
   const data1 = {
      "tomato":
          [{
              "count":1,
              "expired":"10/08/2022",
              "in_date": ["12/12/2022"],
              "catalog":"Vegetable"
          }],
      "milk": [{
        "count":1,
        "expired":"10/12/2022",
        "in_date": ["10/12/2022"],
        "catalog":"dairy"
        }],
      "eggs": [{
        "count":12,
        "expired": "10/22/2022",
        "in_date": ["10/12/2022"],
        "catalog":"dairy"
    }],
      "chicken rotisserie": [{
          "count":1,
          "expired":"10/05/2022",
          "in_date": ["10/12/2022"],
          "catalog":"meat"
}],
  }

  const [data, error] = useDbData('/');
  console.log(data);
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>No data found</h1>;
  return (
    <div>
      {Object.entries(data).map((f, id) =>
        <FoodItem key ={id} name={f[0]} date={f[1][0].expired}/>
       )}
    </div>
    
  );
};

export default MyFoodsPage;
