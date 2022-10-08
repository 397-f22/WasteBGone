import checkmark from "./icon/favicon.png";
import xmark from "./icon/Xmark.png";
import dateConverter from "../utilities/ExpirationCalculator.js";

const FoodItem = ({name, date}) => {
    
    var daysTillExp = dateConverter(new Date(), new Date(date));
    var expired = daysTillExp <= 0;

    return (
        <div className="container d-flex justify-content-center">
            {expired ? <img src={xmark} alt="checkmark" height="25px" width="25px"></img> : <img src={checkmark} alt="checkmark" height="25px" width="25px"></img>}
            <div style={{margin: 5}}>
                {expired ? <div> {name}: Expired</div> : <div>{name}: Expiring in {daysTillExp} days</div>}
            </div>
        </div>
    );
};

export default FoodItem;