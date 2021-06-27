import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import React from "react";
import ModalWindows from "./components/ModalWindows/ModalWindows";
import Order from "./components/Order/Order";
import {UseOpenItem} from "./Hooks/useOpenItem";
import UseOrder from "./Hooks/useOrder";



const App = () => {

  const getOpenItem = UseOpenItem();
  const getOrders = UseOrder();

  return (
    <div className="App">
      <NavBar/>
      <Order {...getOrders} {...getOpenItem}/>
      <Menu {...getOpenItem} />
      {getOpenItem.hookOpenItem && <ModalWindows {...getOpenItem} {...getOrders}/>}}
    </div>
  );
}

export default App;
