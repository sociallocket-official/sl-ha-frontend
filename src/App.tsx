import React, { useState } from "react";
import { TezosToolkit } from "@taquito/taquito";
import "./App.css";
import ConnectButton from "./components/ConnectWallet";
import DisconnectButton from "./components/DisconnectWallet";
import qrcode from "qrcode-generator";
import UpdateContract from "./components/UpdateContract";
import Transfers from "./components/Transfers";
import Navbar from "./components/Header";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";

enum BeaconConnection {
  NONE = "",
  LISTENING = "Listening to P2P channel",
  CONNECTED = "Channel connected",
  PERMISSION_REQUEST_SENT = "Permission request sent, waiting for response",
  PERMISSION_REQUEST_SUCCESS = "Wallet is connected",
}

const App = () => {

return (
  <>
   
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>}/>
      </Routes>
   
  </>
)
};

export default App;





