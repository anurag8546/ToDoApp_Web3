import React, {useState, useEffect, useContext, useCallback} from "react";

// internal imports => Import the todo list context
import ToDolistContext from "../context/ToDolistApp";

const Home =()=>{
const {checkifwalletisconnected} = useContext(ToDolistContext);


useEffect(()=>{
  checkifwalletisconnected();
},[]);
  return <div>
    Hello  there
  </div>
};

export default Home;