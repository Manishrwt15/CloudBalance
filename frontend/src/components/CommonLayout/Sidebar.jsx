import React from 'react'
import {NavLink} from 'react-router-dom'
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import ThumbsUpDownIcon from '@mui/icons-material/ThumbsUpDown';
import LeaderboardIcon from '@mui/icons-material/Leaderboard';
import RoomServiceIcon from '@mui/icons-material/RoomService';
import { useSelector } from 'react-redux';

const menuItems = [
        { id: 1, name: 'User Management', icon : <ManageAccountsIcon />, link : 'user', roles : ['ADMIN', 'READ_ONLY'] },
        { id: 2, name: 'Onboarding', icon : <ThumbsUpDownIcon /> , link : 'onboarding', roles : ['ADMIN', 'READ_ONLY'] },
        { id : 3, name: 'Cost Explorer', icon : <LeaderboardIcon />, link : 'cost', roles : ['ADMIN', 'READ_ONLY', 'CUSTOMER'] },
        { id : 4, name: 'AWS Services', icon : <RoomServiceIcon />, link : 'aws', roles : ['ADMIN', 'READ_ONLY', 'CUSTOMER'] },
];

const Sidebar = () => {

    const isOpen = useSelector((state) => state.sidebar.isOpen);
    const role = useSelector((state) => state.auth.role);
    
    const filteredMenuItems = menuItems.filter(item => item.roles.includes(role));

  return (
    <div className={`h-screen border-r border-gray-300 transition-all duration-200 ease-out ${isOpen ? 'w-20' : 'w-1/5' } `}>
        <aside className='text-lg flex flex-col gap-8 justify-start mt-8 p-4'>
            {
                filteredMenuItems.map((item) => {
                    return (

                        <NavLink to={item.link} className={({ isActive }) => isActive ? "flex gap-4 justify-start items-center bg-blue-100 p-4 rounded-md": "flex gap-4 justify-start items-center p-4 rounded-md hover:bg-blue-50"} key={item.id}>
                            <span>{item.icon}</span>
                            <p className={`text-nowrap ${isOpen ? 'hidden' : ''}`}>{item.name}</p>
                        </NavLink>
                    )
                })
            }
        </aside>
    </div>
  )
}

export default Sidebar