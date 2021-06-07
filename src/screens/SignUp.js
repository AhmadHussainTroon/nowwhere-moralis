import { useState } from 'react';
import { useMoralis } from "react-moralis";
import {useHistory} from 'react-router-dom'

export function SignUp ()
{
    const [email, setemail] = useState();
    const [password, setpassword] = useState();
    const history = useHistory();
  
    const {signup} =useMoralis();
    const signUP=()=>{
      console.log("button clicked!");
      if(validation()){
        signup(email,password,email);
      }else {
        alert("invalid email and password!");
      }

    }
    const gotoSignIn=()=>{
       
    history.push('/SignIn')
  
    }
    const validation=()=>{
      return true;

    }
    return(
      <div>
          <input placeholder="Email" value={email} onChange={event => setemail(event.currentTarget.value)}/>
          <input placeholder="Password" type="password" value={password} onChange={event => setpassword(event.currentTarget.value)}/>

          <button onClick={signUP}>Sign Up</button>
          <button onClick={gotoSignIn}>Already have an account, SignIn</button>
      </div>
    )
  }

  export default SignUp;