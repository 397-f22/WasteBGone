import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import MyFoodsPage from "./components/MyFoodsPage";
import NewFoodPage from "./components/NewFoodPage";

const App = () => {
  const [page, setPage] = useState(false);
  return (
    <div>
      <h1 className="text-center">Waste Be Gone</h1>
      <button onClick={() => setPage(!page)}> Switch </button>
      <MyFoodsPage page={page} />
      <NewFoodPage page={page} />
    </div>
  );
};

export default App;
