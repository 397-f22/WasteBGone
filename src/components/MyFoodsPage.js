import FoodItem from "./FoodItem";
import { useDbData,useDbUpdate } from "../utilities/firebase.js";
import { useState } from "react";

const MyFoodsPage = ({ page }, openModal) => {

  const [data, error] = useDbData('/');
  const [catalog, setCatalog] = useState("");
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>Oops, nothing to see here. Press the 'Add' button to add new items to your list.</h1>;
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, '0');
  let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + '/' + dd + '/' + yyyy;
  return (
    <div>
      <div className="d-flex justify-content-around">
      <div><b> Today's Date: {today}</b></div>
      <select id="catalog" name="catalog" onChange={(e) => {setCatalog(e.target.value)}}>
          <option value="">No Filter</option>
          <option value="vegetables">Vegetables</option>
          <option value="meat">Meat</option>
          <option value="fruit">Fruit</option>
          <option value="dairy">Dairy</option>
          <option value="grains/nuts">Grains/Nuts</option>
          <option value="seafood">Seafood</option>
          <option value="others">Others</option>
      </select>
      </div>
    {Object.entries(data).filter((f) => catalog == "" ? true : f[1].catalog == catalog)
    .sort((a,b)=> new Date(a[1].expires) - new Date(b[1].expires))
        .map((f, id) =><FoodItem key ={id} name={f[0]} date={f[1].expires}/>)}
      
    </div>
  );
};

export default MyFoodsPage;
