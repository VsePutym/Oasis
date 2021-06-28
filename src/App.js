import './App.css';
import NavBar from "./components/NavBar/NavBar";
import Menu from "./components/Menu/Menu";
import React from "react";
import ModalWindows from "./components/ModalWindows/ModalWindows";
import Order from "./components/Order/Order";
import {UseOpenItem} from "./Hooks/useOpenItem";
import UseOrder from "./Hooks/useOrder";
import firebase from "firebase";
import useAuth from "./Hooks/useAuth";
import useTitle from "./Hooks/useTitle";


const firebaseConfig = {
  apiKey: "AIzaSyB8bakcsAp9XuJe0IdZ2pYTAH0zj_UdOi4",
  authDomain: "oasis-c9daf.firebaseapp.com",
  databaseURL: "https://oasis-c9daf-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "oasis-c9daf",
  storageBucket: "oasis-c9daf.appspot.com",
  messagingSenderId: "392965652813",
  appId: "1:392965652813:web:3e74bb381f11f13a44b704"
};

firebase.initializeApp(firebaseConfig)

const App = () => {

  const auth = useAuth(firebase.auth)
  const getOpenItem = UseOpenItem();
  const getOrders = UseOrder();
  const changeTitle = useTitle(getOpenItem);

  return (
    <div className="App">
      <NavBar {...auth}/>
      <Order {...getOrders} {...getOpenItem} {...auth} firebaseDatabase={firebase.database}/>
      <Menu {...getOpenItem} />
      {getOpenItem.hookOpenItem && <ModalWindows  {...getOpenItem} {...getOrders}/>}}
    </div>
  );
}

export default App;
