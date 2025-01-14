import * as React from "react";
import { useEffect, useState } from "react";
import { ethers } from "ethers";
import './App.css';

const App = () => {

  const [currentAccount, setCurrentAccount] = useState("")

  const checkIfWalletIsConnected = async() => {

    try{
      const {ethereum} = window;

      if (!ethereum) {
        console.log("Not logged");
      }
      else{
        console.log("Connected ", ethereum);
      }

      const accounts = await ethereum.request({method: "eth_accounts"});

      if(accounts.length !==0){
        const account = accounts[0];
        console.log("Found account ",account);
        setCurrentAccount(account);
      }
      else{
        console.log("No Authorized user");
      }
    } catch(error){
      console.log(error);
    }
    

  }

  const connectWallet = async() =>{
    try{
      const { ethereum } = window;

      if (!ethereum) {
        alert("Get MetaMask!");
        return;
      }

      const accounts = await ethereum.request({ method: "eth_requestAccounts" });

      console.log("Connected", accounts[0]);
      setCurrentAccount(accounts[0]);

    }catch(error){
      console.log(error);
    }
  }

  useEffect(() => {
    checkIfWalletIsConnected();
  }, [])

  return (
    <div className="mainContainer">
      <div className="dataContainer">
        <div className="header">
        👋 Hey there!
        </div>

        <div className="bio">
          I am yash! Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>

        {!currentAccount && (
          <button className="waveButton" onClick={connectWallet}>
            Connect wallet
          </button>
        )
        }
      </div>
    </div>
  );

}

export default App

