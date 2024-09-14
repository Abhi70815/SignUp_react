import React from 'react'
import { Link } from 'react-router-dom'
import s from './css/Header.module.css'
import './App.css'
const Header = () => {
  return (
    <div className={s.head}>
        <div className='hh'>Header</div>
        <div className={s.gap }>
            <Link to='/signup' className='a'>SignUp</Link>
            <Link to='/profile' className='a'>Profile</Link>
        </div>
    </div>
  )
}

export default Header