
const hre = require("hardhat");

async function main() {
  const ToDolist= await hre.ethers.getContractFactory("ToDolist");
  const toDolist = await ToDolist.deploy();

  await toDolist.deployed();

  console.log("Lock with 1 ETH deployed to:", toDolist.address);
// console.log(toDolist);

}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
