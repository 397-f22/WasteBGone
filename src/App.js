import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyFoodsPage from "./components/MyFoodsPage";
import NewFoodPage from "./components/NewFoodPage";
import Navbar from "./components/Navbar";

const App = () => {
  const [page, setPage] = useState(true);

  return (
    <div>
      <Navbar title={"Waste Be Gone"}/>
      <MyFoodsPage page={1}/>
      <NewFoodPage page={1} />
    </div>
  );
};

export default App;
