import React from 'react'
import logo from '../../assets/logo.svg'
import PeopleAltIcon from '@mui/icons-material/PeopleAlt';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import LogoutIcon from '@mui/icons-material/Logout';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import { useDispatch, useSelector } from 'react-redux';
import {toggleSidebar} from '../../store/actions/sidebarAction'
import { persistor } from '../../store/index';
import {showSuccess} from '../../utils/toast';
import {useAccounts} from '../../hook/useAccounts'

const Header = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const name = useSelector(state => state.auth.name);
    const role = useSelector(state => state.auth.role);

    const { accounts, loading } = useAccounts();



    const handleLogout = () => {
        localStorage.clear();
        persistor.purge();
        dispatch({ type: 'LOGOUT' });
        showSuccess('Logged out successfully');
        navigate('/login');
    }
    
    const handleToggle = () => {
        dispatch(toggleSidebar());
    }

    const handleBtn = () => {
        {(role === 'ADMIN' || role === 'READ_ONLY') ? navigate('/dashboard/user') : navigate('/dashboard/cost')}
    }


  return (
    <div className='flex justify-between items-center px-12 py-8 border-b border-gray-300 shadow-lg h-20'>
        <div className="logo order-first flex items-center gap-18 justify-center">

            <button  onClick={handleBtn}><img src={logo} alt="CloudKeeper" /></button>

               <div className="menu flex items-center gap-8">
                <div className="menu-icon text-blue-700">
                    <button className='cursor-pointer' onClick={handleToggle}><MenuIcon /></button>
                </div>
                {role == 'CUSTOMER' && 
                 <div className="dropdown flex flex-col">
                    <label htmlFor="tool" className="font-semibold pl-1">
                        Accounts
                    </label>

                    <select id="tool" className="rounded py-1">
                        <option value="">
                            {loading ? 'Loading accounts...' : 'Select Account'}
                        </option>

                        {accounts.map(account => (
                            <option key={account.id} value={account.id}>
                                {account.name}
                            </option>
                        ))}
                    </select>
                </div>}
            </div>
        </div>
        <div className="profile order-last flex items-center gap-8">
            <div className="profile-sec flex items-center gap-4  border-r border-gray-300 pr-6">
                <div className="profile-pic border-2 border-blue-700 rounded-full p-2 bg-blue-100 shadow-xl">
                    <PeopleAltIcon />
                </div>
                <div className="profile-name flex flex-col">
                    <p className='text-xs'>Welcome</p>
                    <div className="name flex items-center gap-2 text-blue-700">
                        <h1 className='text-lg'>{name}</h1>
                        <ErrorOutlineIcon/>
                    </div>
                </div>
            </div>
            <button className='text-md font-bold logout-btn text-blue-700 flex items-center gap-2 border-2 border-blue-700 cursor-pointer shadow-md px-4 py-2 rounded-md' onClick={handleLogout}>
                <LogoutIcon/>
                Logout
            </button>
        </div>
    </div>
  )
}

export default Header