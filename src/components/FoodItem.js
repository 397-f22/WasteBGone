import checkmark from "./icon/favicon.png";
import xmark from "./icon/Xmark.png";
import dateConverter from "../utilities/ExpirationCalculator.js";
import "bootstrap/dist/css/bootstrap.min.css";
import { useDbData, useDbUpdate, deleteDbData } from "../utilities/firebase.js";
import "bootstrap-icons/font/bootstrap-icons.css";


const FoodItem = ({ name, date }) => {
  var daysTillExp = dateConverter(new Date(), new Date(date));
  var expired = daysTillExp <= 0;
  const readableDate = new Date(date).toLocaleDateString();

  return (
    <div className=" m-3 ">
      {/* {expired ? (
        <img src={xmark} alt="checkmark" height="25px" width="25px"></img>
      ) : (
        <img src={checkmark} alt="checkmark" height="25px" width="25px"></img>
      )} */}
      <div className="container-fluid card pb-2 mx-auto text-center">
        <h4 className="card-title">{name}</h4>
        {expired ? (
          <div className="row pb-2">
            <div className="col-1">
              <img src={xmark} alt="checkmark" height="25px" width="25px"></img>
            </div>
            <div className="col-9">
              <div>
                Expired on <b>{readableDate}</b>
              </div>
            </div>
            <div className="col-1">
              <button onClick={() => deleteDbData(`/${name}`)}>
                <i class="bi bi-trash"></i>
              </button>
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
            <div className="col-9">
              <div>
                Expiring in <b>{daysTillExp} days</b>
              </div>
            </div>
            <div className="col-1">
              <button onClick={() => deleteDbData(`/${name}`)}>
                <i className="bi bi-trash"></i>
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default FoodItem;
