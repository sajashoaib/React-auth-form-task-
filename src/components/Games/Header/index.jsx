import React from 'react'
import './style.css'
import { PATHS } from '../../../router/paths'
import { Link } from 'react-router-dom';
import { useAuthContext } from '../../contexts/AuthContext';

const Header = () => {
    const {role, data}=useAuthContext();
    return (
        <div className='headergames'>
        
        <img src="/assets/logogame.png" alt="rgt" /> 
             <div className='profile'>
                 <p>Welcome {data.name}</p>
                 <Link to={PATHS.PROFILE}>   
                <img src="/assets/profileimg.png" alt="rgt" /></Link> 
             </div>
             

        </div>
    )
}

export default Header
