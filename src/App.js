import logo from "./logo.svg";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
// import { useJsonQuery } from './components/FoodList';
import NewFoodItem from "./components/NewFoodItem";
import MyFoodsPage from "./components/MyFoodsPage";
import Navbar from "./components/Navbar";
import Modal
 from "./components/Modal";
 import { useQuery } from '@tanstack/react-query';


const Main = () =>{
    const [page, setPage] = useState(true);
    const [open, setOpen] = useState(false);
    const openModal = () => setOpen(true);
    const closeModal = () => setOpen(false);

    // const[ data, isLoading, error ] = useJsonQuery("/components/test.json");
    // if (error) return <h1>Error loading user data: {`${error}`}</h1>;
    // if (isLoading) return <h1>Loading user data...</h1>;
    // if (!data) return <h1>No user data found</h1>;
    // console.log(data);

    return (
    <div><Navbar title={"Waste Be Gone"}/>
    <MyFoodsPage page={1}/>
    <button onClick={openModal}>Add item</button>
    <Modal open={open} close={closeModal}>
      <NewFoodItem />
    </Modal></div>);
}


const fetchJson = async(url) => {
  const response = await fetch(url);
  if (!response.ok) throw response;
  return response.json();
};

const useJsonQuery = (url) => {
  const { data, isLoading, error } = useQuery([url], () => fetchJson(url));
  return [ data, isLoading, error ];
};
const queryClient = new QueryClient();
const App = () => {
  return (
    // <QueryClientProvider client={queryClient}> 
        <Main/>
    // </QueryClientProvider>
  );
};

export default App;
