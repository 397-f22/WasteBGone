import checkmark from "./icon/favicon.png";
import xmark from "./icon/Xmark.png";
import dateConverter from "../utilities/ExpirationCalculator.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDbData,useDbUpdate, deleteDbData } from "../utilities/firebase.js";



const FoodItem = ({ name, date }) => {
  var daysTillExp = dateConverter(new Date(), new Date(date));
  var expired = daysTillExp <= 0;
  const readableDate = new Date(date).toLocaleDateString();

  return (
    <div className=" m-3">
      {/* {expired ? (
        <img src={xmark} alt="checkmark" height="25px" width="25px"></img>
      ) : (
        <img src={checkmark} alt="checkmark" height="25px" width="25px"></img>
      )} */}
      <div className="container-fluid card pb-2 mx-auto text-center">
        <h4 className="card-title">{name}</h4>
        {expired ? (
          <div className="row">
            <div className="col-1">
              <img src={xmark} alt="checkmark" height="25px" width="25px"></img>
            </div>
            <div className="col-10">
              <div>
                Status: Expired on <b>{readableDate}</b>
              </div>
            </div>
          </div>
        ) : (
          <div className="row">
            <div className="col-1">
              <img
                src={checkmark}
                alt="checkmark"
                height="25px"
                width="25px"
              ></img>
            </div>
            <div className="col-10">
              <div>
                Status: Expiring in <b>{daysTillExp} days</b>
              </div>
            </div>
          </div>
        )}
        <div className="pt-1">
          <button type="button" onClick = {() => deleteDbData(`/${name}`)} class="btn btn-outline-secondary">
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default FoodItem;
