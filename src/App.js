import React, { Fragment,useState } from "react";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Header from "./Header"
import Sidebar from "./Sidebar";
import Feed from "./Feed";
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from './StateProvider';
export const App=()=> {
  const [{ user }, dispatch] = useStateValue()
  return (
    <div className="app">
    {!user?<Login/> :
  <>
    <Header/>
    <div className="app-body">
    <Sidebar/>
    <Feed/>
    <Widgets/>
    </div>
    </>
  }
   
      </div>
  );
}

export default App;
