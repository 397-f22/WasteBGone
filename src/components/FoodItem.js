const FoodItem = ({name}) => {
    return (
        <div>
            <img src="./icon/favicon.png" />
            <div>
                <div>{name}</div>
                <div>Expiring in ... days</div>
            </div>
            
        </div>
    );
};

export default FoodItem;