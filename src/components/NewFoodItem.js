import { useDbData, useDbUpdate } from "../utilities/firebase";
import { dateConverter } from "./MyFoodsPage"


Date.prototype.addDays = function (days) {
  var date = new Date(this.valueOf());
  date.setDate(date.getDate() + days);
  return date;
}

const addDays = (date, days) => {
  if (days) {
    date.setDate(date.getDate() + days)
    return date;
  }

}

const NewFoodItem = ({ page }) => {
  const [update, result] = useDbUpdate("/");

  const daysToExpire = {
    "Vegetables": 4,
    "Meat": 5,
    "Fruit": 5,
    "Dairy": 7,
    "Grains/Nuts": 90,
    "Seafood": 3,
    "Other": 7,
  };
  const defaultValue = new Date().toISOString().split('T')[0]
  console.log(defaultValue);
  let today = new Date()
  let dd = String(today.getDate()).padStart(2, "0");
  let mm = String(today.getMonth() + 1).padStart(2, "0"); //January is 0!
  let yyyy = today.getFullYear();
  const todayStringDate = yyyy + "-" + mm + "-" + dd;
  //const projectedExpDate = today.addDays(daysToExpire[document.getElementById("catalog").value]);


  const submitData = () => {
    const foodName = document.getElementById("foodName").value;
    const catalog = document.getElementById("catalog").value;
    const purchaseDate = document.getElementById("purchaseDate").value;
    const expDate = document.getElementById("expDate").value;
    const quantity = document.getElementById("quantity").value;
    const jsonObj = {
      [foodName]: {
        catalog: catalog,
        count: quantity,
        expires: expDate,
        in_date: purchaseDate,
      },
    };

    update(jsonObj);
  };
  return (
    <div
      style={{
        textAlign: "center",
        paddingTop: "10px",
        border: "0.5px solid rgb(190, 190, 190)",
      }}
    >
      <form>
        <div className="container d-flex flex-column">
          Name:
          <input id="foodName" type="text" name="foodName" />
          Purchase Date:

          <input id="purchaseDate" type="date" name="purchase-date" defaultValue={todayStringDate} />
          Catalog:
          <select id="catalogsubmit" name="catalog">
            <option value=""></option>
            <option value="Vegetables">Vegetables</option>
            <option value="Meat">Meat</option>
            <option value="Fruit">Fruit</option>
            <option value="Dairy">Dairy</option>
            <option value="Grains/nuts">Grains/Nuts</option>
            <option value="Seafood">Seafood</option>
            <option value="Other">Others</option>
          </select>
          Quantity:
          <input id="quantity" type="number" min="1" name="quantity" />
          Expiration Date:
          <input id="expDate" type="date" name="expire-date" />
          {/* Image:
          <button id="image">Choose Image</button> */}
        </div>
        <button
          type="submit"
          value="Submit"
          onClick={submitData}
          style={{
            textAlign: "center",
            backgroundColor: "green",
            color: "white",
          }}
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default NewFoodItem;
