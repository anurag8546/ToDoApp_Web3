import React, { useEffect, useState, useContext } from "react";
import Web3Modal from 'web3modal';
import { ethers } from 'ethers';


//  import files form other folders (internal import)

import { toDolistAddress, toDolistABI } from "./constants";

const fetchContract = (signerOrProvider) =>
    new ethers.Contract(toDolistAddress, toDolistABI, signerOrProvider);

export const ToDolistContext = React.createContext();
export const ToDolistProvider = ({ children }) => {
    // some use-state variables \\

    const [currentAccount, setcurrentAccount] = useState('');
    const [error, seterror] = useState('');
    const [allToDolist, setallToDolist] = useState([]);
    const [mylist, setmylist] = useState([]);

    const [AllAddress, setAllAddress] = useState([]);

    /*
    
      ********************************Connecting MetaMask**********************************
    
     */

    const checkifwalletisconnected = async () => {
        if (!window.ethereum) {
            return seterror("Please Install metamask first and connect");
        }
        const account = await window.ethereum.request({ method: "eth_accounts" }); // this gives the accounts of the user 
        if (account.length) {
            setcurrentAccount(account[0]);  // if the user has more than one accounts then we  need to set the first account
            console.log(account[0]);
        }
        else {
            seterror("Please install metamask, connect and reload!!");  // ask the user to connect the metamask
        }

    }

    //   useEffect (()=>{
    //     checkifwalletisconnected();
    //   },[]);

    return (
        <ToDolistContext.Provider value={{ checkifwalletisconnected }}>
            {children}
        </ToDolistContext.Provider>
    );
};
const ToDolistApp = () => {
    return (
        <div>
            TODOLISTAPP
        </div>

    );
}
export default ToDolistApp;