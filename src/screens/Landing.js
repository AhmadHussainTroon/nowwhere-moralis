import React from "react";
import {useHistory} from 'react-router-dom'
import { useMoralis } from "react-moralis";
import Uniswap from '../components/Uniswap';


export function Landing(props) {
  const history = useHistory();
  const { authenticate,   isAuthenticated}= useMoralis();

  const gotoTransactionList=()=>{
      history.push('./TransactionList')
  }
  return (
  <>
      <button onClick={()=>authenticate()}> Authenticate </button>
      <button onClick={gotoTransactionList}>Open Transaction List</button>
      <Uniswap />
      
  </>
  );
}

export default Landing;