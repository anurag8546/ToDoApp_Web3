// contract address: 0x5FbDB2315678afecb367f032d93F642f64180aa3


// We've to access the abi from the json file. for that first we import the file having ABI 

import ToDolist from "./ToDolist.json"

// now we'll export the address and the abi

export const toDolistAddress = "0x5FbDB2315678afecb367f032d93F642f64180aa3";
export const toDolistABI = toDolist.abi;
// now as we exported the ABI, we've all the access of the functions and data inside the abi

