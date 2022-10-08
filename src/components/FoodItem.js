import checkmark from "./icon/favicon.png";
import xmark from "./icon/Xmark.png";
const FoodItem = ({name, date}) => {
    const checkExpired = (date) => {
        return true;
    };

    const expired = false;
    return (
        <div className="container d-flex justify-content-center">
            {expired ? <img src={xmark} alt="checkmark" height="30px" width="30px"></img> : <img src={checkmark} alt="checkmark" height="30px" width="30px"></img>}
            <div style={{paddingLeft:"10px"}}>
                <div>{name}</div>
                <div>Expiring in ... days</div>
            </div>
            
        </div>
    );
};

export default FoodItem;