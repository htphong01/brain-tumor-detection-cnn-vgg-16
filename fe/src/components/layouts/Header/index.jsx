import React from 'react';
import { Link } from 'react-router-dom';
import { logout } from '@app/slices/auth';
import { useDispatch, useSelector } from 'react-redux';
import { clearToken } from '@utils/localStorage';
import { useNavigate } from 'react-router-dom';

function Header() {
  const user = useSelector(state => state.auth.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLogout = () => {
    dispatch(logout());
    clearToken();
    navigate('/login')
  }

  return (
    <div className="header">
      <div className="menu-circle"></div>
      <div className="header-menu">
        <div>
          <Link className="menu-link is-active" href="#">
            {user.name}
          </Link>
        </div>
        <button className='logout-btn' onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
}

export default Header;
