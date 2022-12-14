import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import { useJsonQuery } from './components/FoodList';
import NewFoodItem from "./components/NewFoodItem";
import MyFoodsPage from "./components/MyFoodsPage";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modal";
import { useQuery } from "@tanstack/react-query";
import { useAuthState } from "./utilities/firebase";

const Main = () => {
  const [page, setPage] = useState(true);
  const [open, setOpen] = useState(false);
  const openModal = () => setOpen(true);
  const closeModal = () => setOpen(false);
  const [user] = useAuthState();
  return (
    <div>
      <div className="pb-4">
        <Navbar title={"Waste B Gone"} openModal={openModal} />
        {user ? <></> : <h2 className="d-flex justify-content-center">Please sign in to start adding items</h2>}
      </div>
      <MyFoodsPage page={1} />
      {/* <div className="d-flex justify-content-center pb-4">
        <button
          type="button"
          className="btn btn-success position-static
      "
          onClick={openModal}
        >
          Add item
        </button>
      </div> */}
      <Modal open={open} close={closeModal}>
        <NewFoodItem />
      </Modal>
    </div>
  );
};

const fetchJson = async (url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
  return [data, isLoading, error];
};
const queryClient = new QueryClient();
const App = () => {
  return (
    // <QueryClientProvider client={queryClient}>
    <Main />
    // </QueryClientProvider>
  );
};

export default App;
