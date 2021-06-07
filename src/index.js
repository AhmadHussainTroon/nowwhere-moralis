import React from "react";
import ReactDOM from "react-dom";
import { MoralisProvider } from "react-moralis";
import "./index.css";
import App from "./App";


const appId='GbaIZ8HOQRPikbwD9Mz3Cg7tlt4CV2jPtvTaDqL4';
const serverUrl='https://ckjzmnfmdypf.moralis.io:2053/server';
ReactDOM.render(
  <MoralisProvider appId={appId} serverUrl={serverUrl}>
    <App />
  </MoralisProvider>,
  document.getElementById("root"),
);
