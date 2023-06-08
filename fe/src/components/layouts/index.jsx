import React, { useState, useEffect } from 'react';
import Header from './Header';
import SideBar from './SideBar';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { convertArrayToObject } from '@utils';
import LoadingScreen from '../LoadingScreen'

export default function UserLayout() {
  const dispatch = useDispatch();
  const location = useLocation();
  const auth = useSelector((state) => state.auth);
  const [isLoading, setIsLoading] = useState(false);

  if (!auth.isAuth) return <Navigate to="/login" state={{ from: location }} />;

  if (isLoading) return <LoadingScreen />;
  return (
    <div className='app'>
      <Header />
      <div className="wrapper">
        <SideBar />
        <Outlet />
      </div>
    </div>
  );
}
