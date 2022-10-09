import FoodItem from "./FoodItem";
import { useDbData,useDbUpdate } from "../utilities/firebase.js";

const MyFoodsPage = ({ page }, openModal) => {

  const [data, error] = useDbData('/');
  if (error) return <h1>Error loading data: {error.toString()}</h1>;
  if (data === undefined) return <h1>Loading data...</h1>;
  if (!data) return <h1>Oops, nothing to see here. Press the 'Add' button to add new items to your list.</h1>;
  console.log(Object.entries(data));
  return (Object.entries(data).sort((a,b)=> new Date(a[1].expires) - new Date(b[1].expires)).map((f, id) =><FoodItem key ={id} name={f[0]} date={f[1].expires}/>));
};

export default MyFoodsPage;
