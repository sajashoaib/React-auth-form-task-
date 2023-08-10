import React, { useEffect} from 'react'
import Header from '../../components/Games/Header'
import SideBar from '../../components/Games/SideBar'
import useAuth from '../../components/hooks/useAuth'
import { AUTH_API } from '../../config/api'
import { ROLES } from '../../constants'
import './style.css'
import { useThemeContext } from '../../components/contexts/ThemeContext'
const ProfilePage = () => {
    const {theme}=useThemeContext();
    const { role, getProfileData, isLooading,data } = useAuth(`${AUTH_API}`+'profile');


    
    useEffect(() => {
        getProfileData();
    }, []);

  return (
    
    <div className={theme}>
    <Header />

<div id="dataprofile" >
        <SideBar />

    <div className="info">
          {isLooading ? (
      <p>Loading profile data...</p>
    ) : (
      <div>
        <h2>Profile Page</h2>
        {console.log (data?.name)}

        <p>Name: {data?.name}</p>
        <p>Email: {data?.email}</p>

        {role === ROLES.ADMIN && (
          <p>Admin-specific profile content...</p>
        )}
        {role === ROLES.USER && (
          <p>User-specific profile content...</p>
        )}
      </div>
    )}  
    </div>
  
</div>
  
  </div>)
}




export default ProfilePage
