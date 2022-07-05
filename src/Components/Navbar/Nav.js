import React from 'react'
import { Link, useNavigate } from 'react-router-dom';



const Nav = () => {
  const auth = localStorage.getItem('user');
  const Navigate = useNavigate()
  const logout = () => {
    localStorage.clear();
    Navigate('/signup');

  }
  return (
    <>
      <div className='nav-ul'>
        <div className="container">

          {
            auth ?

              <ul className='nav-itam'>
                <li><Link to="/">Products</Link></li>
                <li><Link to="/addProducts">Products Add</Link></li>
                <li><Link to="/update/:id">Products Update</Link></li>
                <li><Link to="/profile">Profile</Link></li>
                <li><Link onClick={logout} to="/signup">Logout ({JSON.parse(auth).data.name})</Link></li>
              </ul>
              :
              <ul className='lsohufsjh'>
                <li><Link to="/signup">Signup</Link></li>
                <li><Link to="/login">Login</Link></li>
              </ul>
          }
        </div>
      </div>

    </>
  )
}

export default Nav;
