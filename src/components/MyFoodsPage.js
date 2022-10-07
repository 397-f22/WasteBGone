const MyFoodsPage = ({ page }) => {
  return (
    <div style={{textAlign: "center", paddingTop: "10px", border: "0.5px solid rgb(190, 190, 190)"}}>
      <form>
      <label>
        Name:
        <input type="text" name="name" />
        Type:
        <input type="text" name="type" />
        Expiration date:
        <input type="text" name="expire-date" />
      </label>
      <input type="submit" value="Submit" />
    </form>
    </div>
    
  )
};

export default MyFoodsPage;
