// SPDX-License-Identifier: UNLICENSED

pragma ToDolist{

    /* here are some state variables required in further application*/
    unit256 public user_id;/* Every user will be assigned an identity*/
    address public ownerofContract; /* the one who'll deploy thee contract */
    address[] public creator;/* address array to store the address of all the users who'll create the todo list here */
    string[] public message; /* string array to store all the messages */
    uint256 public messageId; /* array to hold all the ids of the users*/



    /* Now construct a strcuture to provide a set of properties to individual user */

    struct ToDolist{
        address account;
        uint256  user_id;
        string message;
        bool completed;   /*contains the status */
    } 

/* Create an event  */

        event ToDoevent(
            address indexed account,
            uint indexed user_id,
            string message,
            bool completed
        );

/* Now create a mapping that will hold all the information about the user with the help of the address */


/* 
1) Here ToDolistapp contains information about a single user, while 
 ToDolistApps contains information of all users;
 
 So, we pass address to the TodolisApp to get the entire details about the individual
 */
mapping (address => ToDolistApp) public toDolistApps;



}
