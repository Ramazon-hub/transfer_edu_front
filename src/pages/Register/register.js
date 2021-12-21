import { useRef } from "react";
import "./register.css";
import { useHistory } from 'react-router-dom'
import useAuth from '../../hooks/useAuth';
import logo from '../../images/logo_new.png'
function Register() {
    const [setToken] = useAuth(true);
  const history = useHistory()
    let fName = useRef()
    let lName = useRef()
    let email = useRef()
    let phone = useRef()
    let age = useRef()
    let password = useRef()

    const formSubmit = async(e)=>{
        e.preventDefault()
        const formData = {
            firstName:fName.current.value,
            lastNAme:lName.current.value,
            email:email.current.value,
            phone:phone.current.value,
            age:age.current.value,
            password:password.current.value
        };
        const DATA = await fetch(`http://localhost:8000/register`,{
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
  return (

    <>
      <div id="container" className="main">
        <div id="main-left">
          <img alt="img" src={logo} width={200} />
        </div>
        <div id="main-right">
        <form className="form" onSubmit={formSubmit} >
        <label for="fName">First Name : </label>
        <input ref={fName} type="text" id="fName" />
        <label for="lName">Last Name : </label>
        <input ref={lName} type="text" id="lName" />
        <label for="email">Email : </label>
        <input ref={email} type="email" id="email" />
        <label for="phone">Phone Number : </label>
        <input ref={phone} type="number" id="phone" />
        <label for="age">Age : </label>
        <input ref={age} type="number" id="age" />
        <label for="password">Password : </label>
        <input ref={password} type="password" id="password" />
        <button type="submit" id="btn">
          Submit
        </button>
      </form>
        </div>
      </div>
     
    </>
  );
}
export default Register;
