 import { Link, Outlet, useNavigate } from "react-router-dom";
import {useRef} from 'react';
import "boxicons/css/boxicons.min.css";
const TeacherLogin = (props) => {
  const navigate = useNavigate();
  const ref1 = useRef("")
  const ref2 = useRef("")
  const HomePage = () =>{
    navigate('/')
  }
  const Login = () =>{
    if( ref1.current.value === "se21092" && ref2.current.value === "123"){
      navigate("/Login/Dashboard")
    }else{
      alert("You entered wrong id or password")
    }
  }
  return (
   <> <div className={`std-body ${props.b ? "none" : ""}`}>
       <button className='HomePageBtn' onClick={HomePage}> <i className="bx bx-home-alt"></i></button>  <br />
    <div className={`box-form ${props.b ? "none" : ""}`}>
    <div className={`left`}>
      <div className="overlay">
        <h1>Welcome to Teacher Portal</h1>
      </div>
    </div>
    <div className={`right `}>
      <h5>Login</h5>
      <div className="inputs">
        <input ref={ref1} type="text" placeholder="Teacher id" />
        <br />
        <input ref={ref2} type="password" placeholder="password" />
      </div>
        
      <div className='login-btn'><button onClick={Login}><Link className="Login-Link" to="">Login</Link></button>
      <br /><br />
      <p>Want to Login as a <Link to="/Login/Student">Student</Link></p></div>
    </div>
    
  </div></div><Outlet/></>
  );
};

export default TeacherLogin;
