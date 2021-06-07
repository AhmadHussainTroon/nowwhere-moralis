import { useState } from 'react';
import { useMoralis } from "react-moralis";
import {useHistory} from 'react-router-dom';

export function SignIn ()
{
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const history = useHistory();
  
     const { login } = useMoralis();


    const signIN=()=>{
      if(validation()){
        if(login(email,password)){
        history.push('/Landing')}
      }
      else {
        alert("invalid email and password!");
      }

    }
    const validation=()=>{
      return true;

    }
    return(
      <div>
          <input placeholder="Sign inEmail" value={email} onChange={event => setemail(event.currentTarget.value)}/>
          <input placeholder="Password" type="password" value={password} onChange={event => setpassword(event.currentTarget.value)}/>

          <button onClick={signIN}>Login</button>
      </div>
    )
  }

  export default SignIn;


