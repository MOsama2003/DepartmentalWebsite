import React from 'react';
import './Dash.css';
import { useNavigate,Link, Outlet } from 'react-router-dom';

function AdminDash() {
    const navigate = useNavigate();
      const LogOut = () =>{
        const a = confirm("Do you want to Logout your Account?")
        if(a){
            navigate('/');
        }
    }
  return (<><div className='sidebar-parent'>
    <div className="sidebar-container">
      <ul className="sidebar-menu">

        <li>
          <Link to="/Admin/AdminDashboard/Option1" className="sidebar-link">
            Option 1
          </Link>
        </li>
        <li>
          <Link to="/Admin/AdminDashboard/Option2" className="sidebar-link">
            Option 2
          </Link>
        </li>
        <li>
          <Link to="/Admin/AdminDashboard/Option3" className="sidebar-link">
            Option 3
          </Link>
        </li>
        <li>
          <Link to="/Admin/AdminDashboard/Option4" className="sidebar-link">
            Option 4
          </Link>
        </li>
        <li>
          <Link to="/Admin/AdminDashboard/Option5" className="sidebar-link">
            Option 5
          </Link>
        </li>
      </ul>
      <button onClick={LogOut} className='LogOut'><i class='bx bx-log-out-circle'></i> &nbsp;LogOut</button>
    </div>
    <div className='div-section'>
    <section>
        Welcome To Admin's Portal</section>
        <Outlet/> </div></div></>
  );
}

export default AdminDash;
