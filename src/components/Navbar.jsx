import React from "react";
import { useSnackbar } from 'notistack';

import { Link, useNavigate } from "react-router-dom";
const Navbar = () => {
  const { enqueueSnackbar } = useSnackbar();
  const navigate = useNavigate();
  const handleLogout = () => {
    localStorage.removeItem("authToken");
    enqueueSnackbar('LogOut Successfully', { variant: 'warning' });
    navigate('/login');
  }

  return (
    <>
      <nav className="navbar navbar-expand-lg bg-body-tertiary" data-bs-theme="dark">
        <div className="container-fluid">
          <Link className="navbar-brand fs-4">FoodApp</Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" to={'/'} >Home</Link>
              </li>

              {(localStorage.getItem('authToken',)) ?

                <li className="nav-item">
                  <Link className="nav-link active" aria-current="page" to={'/'} >My Order</Link>
                </li> : ""}
            </ul>


            {(!localStorage.getItem('authToken',)) ?
              <div className="d-flex gap-2">
                <Link className="btn bg-white text-success mx-1" to={'/login'} >Login</Link>
                <Link className="btn bg-white text-success mx-1" to={'/signup'} >Sign UP</Link>
              </div>
              :
              <div className="d-flex gap-2">
                <Link className="btn bg-white text-success mx-1" to={'/'} >My Cart</Link>
                <Link className="btn bg-white text-danger mx-1" to={"/login"} onClick={handleLogout} >Logout</Link>
              </div>
            }
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;