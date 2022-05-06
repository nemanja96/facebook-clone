import React from 'react'
import './Sidebar.css';
import InputOption from '../inputOption/InputOption';
import PeopleIcon from '@mui/icons-material/People';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import StoreIcon from '@mui/icons-material/Store';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Avatar from '@mui/material/Avatar';
import img1 from '../images/01.png';
import img2 from '../images/02.png';
import img3 from '../images/03.png';
import img4 from '../images/04.png';
import img5 from '../images/05.png';
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';

function Sidebar() {

  const user = useSelector(selectUser);

  return (
    <div className='sidebar'>
      <div className='sidebar__category'>
        <InputOption Icon={Avatar} src={user.photoUrl} title={user.displayName} />
        <InputOption Icon={PeopleIcon} title="Prijatelji" />
        <InputOption Icon={AccountCircleIcon} title="Grupe" />
        <InputOption Icon={StoreIcon} title="Marketplace" />
        <InputOption Icon={OndemandVideoIcon} title="Watch" />
        <InputOption Icon={AccessAlarmsIcon} title="Uspomene" />
        <InputOption Icon={KeyboardArrowDownIcon} title="Prikaži više" />
      </div>
      <hr />
      <div className='sidebar__category'>
        <h4>Vaše prečice</h4>
        <InputOption photo={img1} title="8 Ball Poll" />
        <InputOption photo={img2} title="Monster Legends" />
        <InputOption photo={img3} title="Pet Society" />
        <InputOption photo={img4} title="Slagalica" />
        <InputOption photo={img5} title="Texas HoldEm Poker" />
        <InputOption Icon={KeyboardArrowDownIcon} title="Prikaži više" />
      </div>
    </div>
  )
}

export default Sidebar