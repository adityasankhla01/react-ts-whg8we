// SPDX-License-Identifier: GPL-3.0

pragma solidity ^0.8.11;

contract Lottery{
  
  address  payable[] public players;
  address payable public manager;
  constructor(){
      manager= payable(msg.sender);

  }

   receive() external payable{
     
        players.push(payable(msg.sender));



   }

   function getBalance() public view returns(uint){
       return address(this).balance;

   }

  function random() public view returns(uint){

    return uint(keccak256(abi.encodePacked(block.difficulty, block.timestamp, players.length)));

}

function selectWinner()public view  returns (address){
 
   require(msg.sender==manager && players.length>=3);
  return players[random()% (players.length)];  

}

  function sendPrize() public{

         require(manager==msg.sender, "Sorry,you are not the manager");
        players[random()%(players.length)].transfer((address(this).balance)*9/10);
        manager.transfer((address(this).balance)*1/10)  ;  
  }



 










}