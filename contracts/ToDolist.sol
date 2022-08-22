// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract ToDolist{

    /* here are some state variables required in further application*/
    uint256 public id_user;  /* Every user will be assigned an identity*/
    address public ownerofContract;  /*Whosoever will deploy, will be th eownwer of the contract*/
    address[] public creator;  /* address array to store the address of all the users who'll create the todo list here */
    string[] public message; /* string array to store all the messages */
    uint256[] public messageId; /* array to hold all the ids of the users*/



    /* Now construct a strcuture to provide a set of properties to individual user */

    struct ToDolistApp{
        address account;
        uint256  user_id;
        string message;
        bool completed;   /*contains the status => true or False*/
    } 

/* Create an event  */

        event ToDoevent(
            address indexed account,
            uint256 indexed user_id,
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

       constructor(){
        ownerofContract=msg.sender;
/* whoever will deploy the smart contract, i.e. whoever is the sender or that address will be the owner of the contract */
   
   
       }    



/* Functions start for creating todo list */

/*  Function to increment the number user id  */
        function inc() internal{
            id_user++;
        }

        /* function create */
        function createList(string calldata _message) external {
        inc();

        uint256 idnumber = id_user; 
        ToDolistApp storage toDo = toDolistApps[msg.sender];

        toDo.account=msg.sender;
        toDo.message=_message;
        toDo.completed=false;
        toDo.user_id=idnumber;


        creator.push(msg.sender);
        message.push(_message);
        messageId.push(idnumber);

       /*emit ToDoevent(msg.sender, idnumber, _message, toDo.completed);*/ 
       emit ToDoevent(msg.sender, toDo.user_id, _message, toDo.completed);
        }


        /* this function fetches complete details of an individual by passing the address of the user  */
        /* passing the address and in return passed all the data we want back, i.e. address for account, string for message (memory is used because we are not changing/creating data, we are using the stored data or copying the stored data from memory
        similarly for other variables*/
     /* This is type of get data function */
     
        function getCreatorData(address _address) 
        public view
         returns 
         (address, uint256, string memory, bool){

            /* Now creating the copy of the state variables */
            ToDolistApp memory singleUserData = toDolistApps[_address];

            /* ( Mapping is used here ) |upside|*/

            /* now return the parametres */

            return (
        singleUserData.account,
        singleUserData.user_id,
        singleUserData.message,
        singleUserData.completed
        );
        }




/* In this getaddress function we pass the entire address array to get the address  */
            function getaddress() external view returns (address[] memory){
                return creator;

                    }

/*  This function returns the messages */
            function getMessage() external view returns (string[] memory){

                        return message;
                            }

/* This functionn changes the user state variable */
            function toggle (address _creator) public{
                    ToDolistApp storage singleUserData = toDolistApps[_creator];
                    singleUserData.completed= !singleUserData.completed;

            }



}

