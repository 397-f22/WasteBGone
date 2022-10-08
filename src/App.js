import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import NewFoodItem from "./components/NewFoodItem";
import FoodList from "./components/FoodList";
import Navbar from "./components/Navbar";
import Modal
 from "./components/Modal";
const App = () => {
  const [page, setPage] = useState(true);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  return (
    <div>
      <Navbar title={"Waste Be Gone"}/>
      <FoodList page={1}/>
      <button onClick={openModal}>Add item</button>
      <Modal open={open} close={closeModal}>
        <NewFoodItem />
      </Modal>
    </div>
  );
};

export default App;
