import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
const Navbar = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  // Load user from localStorage
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }
  }, []);

  // Logout function
  const handleLogout = () => {
    localStorage.removeItem("user");
    setUser(null);
    navigate("/signin");
  };

  return (
    <div>
      <nav className='m-2 navbar navbar-expand-md navbar-light bg-light' >
    <Link to="/"  href='#'className=' ms-2 nav-bar brand nav-link' id='navlink'>Explore Event</Link>
    <button className="navbar-toggler" data-bs-target="#navbarcollapse" data-bs-toggle="collapse">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarcollapse">
      <div className="navbar-nav ms-auto">
    <Link to="/addevent"  className=' ms-2 nav-bar brand nav-link text-dark'  id='navlink'>Create Event</Link>
    {user ? (
      <>
        {/* Username */}
        
          <span className="nav-link text-dark fw-bold">
            👋 {user.username}
          </span>

        {/* Logout */}
        
          <button
            onClick={handleLogout}
            className="btn btn-sm btn-primary ms-2 text-dark"
            id='button'
          >
            Logout
          </button>
      </>
    ) : (
<>
        <li className="nav-item">
          <Link to="/signup" className="nav-link text-dark" id='navlink'>
            Signup
          </Link>
        </li>

        <li className="nav-item">
          <Link to="/signin" className="nav-link text-dark" id='navlink'>
            Signin
          </Link>
        </li>
      </>
    )}
    </div>
    </div>
    </nav>
    </div>
  )
}

export default Navbar
