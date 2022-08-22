import React, {useState} from "react";
import Web3Modal from 'web3modal';
import {ethers} from 'ethers';


//  import files form other folders (internal import)

import {toDolistAddress, toDolistABI} from "./constants";

const  fetchContract = (signerOrProvider) =>
new ethers.Contract(toDolistAddress, toDolistABI, signerOrProvider);

export const ToDolistContext= React.createContext();
export const ToDolistProvider= ({children})=>{
                // some use-state variables \\

    const [currentAccount, setcurrentAccount] = useState('');
    const [error, seterror] = useState('');
    const [allToDolist, setallToDolist] = useState([]);
    const [mylist, setmylist] = useState([]);

    const [AllAddress, setAllAddress] = useState([]);
  
/*

  ********************************Connecting MetaMask**********************************

 */

  const checkifwalletisconnected = async() =>{
    
  }

    return(
        <ToDolistContext.Provider value={{}}>
            {children}
        </ToDolistContext.Provider>
    );
};
const ToDolistApp=() =>{
    return (
        <div>
            TODOLISTAPP
        </div>

    );
}
export default ToDolistApp