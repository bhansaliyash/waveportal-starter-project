import * as React from "react";
import { useEffect } from "react";
import { ethers } from "ethers";
import './App.css';

const App = () => {
  const checkIfWalletIsConnected = () => {
    const {ethereum} = window;

    if (!ethereum) {
      console.log("Not logged");
    }
    else{
      console.log("Connected ", ethereum);
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
          I am farza and I worked on self-driving cars so that's pretty cool right? Connect your Ethereum wallet and wave at me!
        </div>

        <button className="waveButton" onClick={null}>
          Wave at Me
        </button>
      </div>
    </div>
  );

}

export default App

