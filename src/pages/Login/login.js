import './login.css'
import { useRef } from "react";

import { useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo_new.png'
import { Link } from 'react-router-dom/cjs/react-router-dom.min';

function Login(){
    const [setToken] = useAuth(true);
    const history = useHistory()
   let email = useRef()
   let password = useRef()
   const formSubmit = async(e)=>{
    e.preventDefault()
    const formData = {
        email:email.current.value,
        password:password.current.value
    };
    const DATA = await fetch(`http://localhost:8000/login`,{
        method:"POST",
        headers: {
          "Content-Type": "Application/json",
        },
        body: JSON.stringify(formData),
    })
    
    const user = await DATA.json();
    console.log(user);
    if (user.token) {
        setToken(user.token);
        history.push("/");
      } else {
        setToken(false);

      }
}
    return(
        <>
        <div id='main'>
            <div id='content'>
            <img alt='img' src={logo} width={200} id='logo'/>
            <form className="loginform" onSubmit={formSubmit} >
            <label for="email">Email : </label>
            <input ref={email} type="email" id="email" />
            <label for="password">Password : </label>
        <input ref={password} type="password" id="password" />
            <button type="submit" id="btn">
            Submit
            </button>
            <Link to='/register' id='registerlink' >Ro'yxatdan o'tish</Link>
        </form>
            </div>
            

        </div>
        </>
    )
}
export default Login