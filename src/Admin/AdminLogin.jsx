import React, { useEffect } from 'react';
import { Link,Outlet } from 'react-router-dom';
function AdminLogin(props) {
  useEffect(() => {
    const handleFocus = (event) => {
      event.target.previousElementSibling.classList.add('glowIcon');
    };

    const handleFocusOut = (event) => {
      event.target.previousElementSibling.classList.remove('glowIcon');
    };

    const inputFields = document.querySelectorAll('.input_text');
    inputFields.forEach((input) => {
      input.addEventListener('focus', handleFocus);
      input.addEventListener('focusout', handleFocusOut);
    });

    return () => {
      inputFields.forEach((input) => {
        input.removeEventListener('focus', handleFocus);
        input.removeEventListener('focusout', handleFocusOut);
      });
    };
  }, []);

  return (<><div className={`gradient ${props.d ? "none" : ""}`}><center>
    <br /><br /><br /><br />
    <div className="login_form_container">
      <div className="login_form">
        <h2 className='Admin-h2'>Admin Pannel</h2>
        <br />
        <div className="input_group">
          <i className="fa fa-user"></i>
          <input
            type="text"
            placeholder="Username"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="input_group">
          <i className="fa fa-unlock-alt"></i>
          <input
            type="password"
            placeholder="Password"
            className="input_text"
            autoComplete="off"
          />
        </div>
        <div className="button_group" id="login_button">
          <Link to="/Admin/AdminDashboard">Login</Link>
        </div>
      </div>
    </div></center></div><Outlet/></>
  );
}

export default AdminLogin;
