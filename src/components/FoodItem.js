import checkmark from "./icon/favicon.png";
import xmark from "./icon/Xmark.png";
const FoodItem = ({name, date}) => {
    const checkExpired = (date) => {
        return true;
    };

    const expired = false;
    const today = new Date();
    const exp = new Date(date);
    const diff = (exp.getDate() - today.getDate());
    
    return (
        <div className="container d-flex justify-content-center">
            {expired ? <img src={xmark} alt="checkmark" height="30px" width="30px"></img> : <img src={checkmark} alt="checkmark" height="30px" width="30px"></img>}
            <div style={{paddingLeft:"10px"}}>
                <div>{name}</div>
                <div>Expiring in {diff} days</div>
            </div>
            
        </div>
    );
};

export default FoodItem;