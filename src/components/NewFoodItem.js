const NewFoodItem = ({ page }) => {
  return (
    <div style={{textAlign: "center", paddingTop: "10px", border: "0.5px solid rgb(190, 190, 190)"}}>
      <form>
      <div className="container d-flex flex-column">
        Name:
        <input type="text" name="name" />
        Expiration Date:
        <input type="date" name="expire-date" />
        Purchase Date:
        <input type="date" name="purchase-date" />
        Quantity:
        <input type="number" min="1" name="quantity"/>
        Image:
        <button>Placeholder</button>
      </div>
      <input type="submit" value="Submit" />
    </form>
    </div>
    
  )
};

export default NewFoodItem;
