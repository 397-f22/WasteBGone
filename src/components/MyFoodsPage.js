import FoodItem from "./FoodItem";
import { useDbData, useDbUpdate, useAuthState } from "../utilities/firebase.js";
import { useState } from "react";

const MyFoodsPage = ({ page }, openModal) => {
  const [data, error] = useDbData("/");
  const [catalog, setCatalog] = useState("");
  const [user] = useAuthState();
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data)
    return (
      <h1>
        Oops, nothing to see here. Press the 'Add' button to add new items to
        your list.
      </h1>
    );
  let today = new Date();
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  today = mm + "/" + dd + "/" + yyyy;
  return (
    <div className="container">
      <div className="d-flex justify-content-around">
        <h3>
          <b> Today's Date: {today}</b>
        </h3>
        <select
          id="catalog"
          name="catalog"
          onChange={(e) => {
            setCatalog(e.target.value);
          }}
        >
          <option value="">No Filter</option>
          <option value="Vegetables">Vegetables</option>
          <option value="Meat">Meat</option>
          <option value="Fruit">Fruit</option>
          <option value="Dairy">Dairy</option>
          <option value="Grains/Nuts">Grains/Nuts</option>
          <option value="Seafood">Seafood</option>
          <option value="Other">Other</option>
        </select>
      </div>
      {user && Object.entries(data)
        .filter((f) => (f[1].uid == user.uid))
        .filter((f) => (catalog == "" ? true : f[1].catalog == catalog))
        .sort((a, b) => new Date(a[1].expires) - new Date(b[1].expires))
        .map((f, id) => (
          <FoodItem key={id} name={f[0]} date={f[1].expires} />
        ))}
    </div>
  );
};

export default MyFoodsPage;
