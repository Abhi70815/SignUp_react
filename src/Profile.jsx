import React, { useContext } from 'react'
import { Link , useLocation} from 'react-router-dom';
import { DataContext } from './App';

const Profile = () => {
  // const location =useLocation()
  // const {data}=location.state || "data not received";

  // console.log(data)

  const data = useContext(DataContext);
  const {name, email, password}= data.data
  console.log(name, email);
  const style={
    display:"flex",
    flexDirection:"column",
    gap:"20px",
    padding:"30px",
    fontSize:"30px"
  }
  return (
    <div style={style}>
      <div>Profile</div>
      <div>Full Name: <i>{name}</i> </div>
      <div>Email: <i>{email}</i></div>
      <div>Password: <i>{password}</i></div>

      <Link to='/signup' className='a'>Logout</Link>
    </div>
  )
}

export default Profile