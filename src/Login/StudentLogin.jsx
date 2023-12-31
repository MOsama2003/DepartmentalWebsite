import {React, useRef} from 'react';
import { useNavigate, Link, Outlet} from 'react-router-dom';
const StudentLogin = (props) => {
    const navigate = useNavigate();
    const ref1 = useRef("");
    const ref2 = useRef("")
  const goBack = () => {
    navigate("/Login");
  };
  const HomePage = () =>{
    navigate('/')
  }
  const Login = () =>{
    console.log(ref1.current.value);
    if( ref1.current.value === "se21091" && ref2.current.value === "123"){
      navigate("/Login/Student/Dashboard")
    }else{
      alert("You entered wrong id or password")
    }
  }
  return (<>
    <div className={`std-body  ${props.c ? "none" : ""}`}>
    <button className='HomePageBtn' onClick={HomePage}> <i className="bx bx-home-alt"></i></button>  <br />
    <div className={`box-form ${props.c ? "none" : ""}`}>
    <div className="right">
      <h5>Login</h5>
      <div className="inputs">
        <input type="text" ref={ref1} name="stdid" placeholder="student id" />
        <br />
        <input type="password" ref={ref2} placeholder="password" />
      </div>
      {/* to="/Login/Student/Dashboard" */}
      <div className='login-btn'><button onClick={Login}><Link className="Login-Link">Login</Link></button>
      <br /><br />
      <p>Want to Login as a   <a onClick={goBack}>Teacher</a></p></div>
    </div>
  
    <div className="left">
      <div className="overlay">
        <h1>Welcome to Student Portal</h1>
      </div>
    </div>
  </div></div><Outlet/></>
  );
};

export default StudentLogin;
