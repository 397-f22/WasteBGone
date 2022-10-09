import { useDbData, useDbUpdate } from "../utilities/firebase";

const NewFoodItem = ({ page }) => {
  const [update,result] = useDbUpdate("/");
  const submitData = () => {
    const foodName = document.getElementById("foodName").value;
    const catalog = document.getElementById("catalog").value;
    const purchaseDate = document.getElementById("purchaseDate").value;
    const expDate = document.getElementById("expDate").value;
    const quantity = document.getElementById("quantity").value;
    
    const jsonObj = {
      [foodName]: {
        "catalog": catalog,
        "count":quantity,
        "expires":expDate,
        "in_date": purchaseDate
      }
    }

    update(jsonObj)
    
  }
  return (
    <div style={{textAlign: "center", paddingTop: "10px", border: "0.5px solid rgb(190, 190, 190)"}}>
      <form>
        <div className="container d-flex flex-column">
          
          Name:
          <input id="foodName" type="text" name="foodName" />
          Purchase Date:
          <input id="purchaseDate" type="date" name="purchase-date" />
          Expiration Date:
          <input id="expDate" type="date" name="expire-date" />
          Quantity:
          <input id="quantity" type="number" min="1" name="quantity"/>
          Catalog:
          <input id="catalog" type="text" name="catalog" />
          {/* Image:
          <button id="image">Choose Image</button> */}
        </div>
        <button type="submit" value="Submit" onClick={submitData} style={{textAlign: "center", backgroundColor: "green", color:"white"}}>Submit</button>
      </form>
    </div>
    
  )
};

export default NewFoodItem;
