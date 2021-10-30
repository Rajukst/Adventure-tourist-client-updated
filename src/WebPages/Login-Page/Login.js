import React from 'react';
import { Button } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../Hooks/useAuth';
import "./Login.css"

const Login = () => {
    const {signWithGoogle}= useAuth()
    const location= useLocation()
    const history= useHistory()
    const redirectURL=location.state?.from || '/'
    const googleLogIn=()=>{
        signWithGoogle()
        .then(result=>{
            history.push(redirectURL)
        })
    }
    return (
        <div>

            <form className="login-form">
            <h1 className="mb-5">Please Login</h1>
            <label htmlFor="email">Enter Your email:</label>
            <input  type="email" name="email" id="" placeholder="enter your email"  />
            <br /><br />
            <label htmlFor="password">Enter Password:</label>
            <input type="password" name="password" id="" placeholder="enter your password"  />
            <br /><br />
            
            <br /><br />
            <input type="submit" value="Sign In" name="Sign In" />
            <br /><br />
            <Button onClick={googleLogIn} >Sign With Google</Button>
            </form>
     
      <br /><br />
   
        </div>
    );
};

export default Login;