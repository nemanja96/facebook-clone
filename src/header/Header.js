import React from 'react'
import './Header.css';
import logo from '../images/facebook.png';
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import StorefrontIcon from '@mui/icons-material/Storefront';
import PeopleIcon from '@mui/icons-material/People';
import BorderAllIcon from '@mui/icons-material/BorderAll';
import Avatar from '@mui/material/Avatar';
import avatar from '../images/avatar.png';
import { auth } from '../firebase';
import { useDispatch, useSelector } from 'react-redux';
import { logout, selectUser } from '../features/userSlice';

function Header() {

  const user = useSelector(selectUser);
  const dispatch = useDispatch();

  const logoutOfApp = () => {
    dispatch(logout());
    auth.signOut();
  }

  return (
    <div className='header'>
      <div className="header__search">
        <img src={logo} alt="Facebook logo" className="header__searchLogo" />
        <div className='header__searchInput'>
          <SearchIcon className='header__searchIcon' />
          <input type="text" placeholder='Search Facebook' />
        </div>
      </div>

      <div className="header__navigation">
        <HomeIcon sx={{ fontSize: 30 }} className="header__navigationIcon" />
        <OndemandVideoIcon sx={{ fontSize: 30 }} className="header__navigationIcon" />
        <StorefrontIcon sx={{ fontSize: 30 }} className="header__navigationIcon" />
        <PeopleIcon sx={{ fontSize: 30 }} className="header__navigationIcon" />
        <BorderAllIcon sx={{ fontSize: 30 }} className="header__navigationIcon" />
      </div>

      <div className="header__avatar">
        <Avatar alt="Nemanja Radivojevic" src={user.photoUrl} />
        <span onClick={logoutOfApp} className="logOutBtn">Log out</span>
      </div>
        
    </div>
  )
}

export default Header