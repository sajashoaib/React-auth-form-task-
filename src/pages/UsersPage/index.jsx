// import Header from '../../components/Games/Header'
import React, { useEffect} from 'react';
import Tables from '../../components/Tables';
import {  AUTH_API } from '../../config/api';
import { USERS_COLUMNS } from '../../constants/users';
import useAuth from '../../components/hooks/useAuth';
// import SideBar from '../../components/Games/SideBar';
import './style.css'
import Header from '../../components/Games/Header';
import SideBar from '../../components/Games/SideBar';
import { useThemeContext } from '../../components/contexts/ThemeContext';
const UsersPage = () => {
    
    const {theme}=useThemeContext();

const{listUsers,isLoading,users,Delete}=useAuth(`${AUTH_API}`+'users');

  useEffect(() => {
     listUsers();
  }, []);

  
  const handeldelete = async (id) => {
        Delete(id);
    };
 
 

  return (
    <div className={theme} id='userpage'>
        <Header/>
        
        <div className="usercontent">
          <SideBar/>
        
        <div className="tabel">
            <Tables columns={USERS_COLUMNS(handeldelete)} 
        data={users}
        isLoading={isLoading} />
            </div>           
        </div>


     
    </div>
  )
}


export default UsersPage;



