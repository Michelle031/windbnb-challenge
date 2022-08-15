import React, { useState } from 'react';
import {Search} from "@mui/icons-material";
import Nav from './Nav';
import { useSelector } from 'react-redux';
import { staysSelector } from '../features/staysSlice';


function Header() {
  const [show, setShow] = useState(false);
  const { filter} = useSelector(staysSelector);
  const close = (e) => {
    setShow(false);
    e.stopPropagation();
  }

  return (
    <div className='flex flex-col items-start md:flex-row md:justify-between md:items-center py-8 px-4 md:px-10 lg:px-12' onClick={() => setShow(true)}>
      <img src='/logo.svg' alt="" className='mb-3 md:mb-0'/>
      <div className="flex shadow-md rounded-2xl mx-auto md:mx-0" >
        <p className='text-sm text-[#333] item'>{filter}, Finland</p>
        <p className="text-sm text-[#BDBDBD] item">Add guests</p>
        <div className="p-5"><Search sx={{color: "#EB5757", height:"18px"}} /></div>
      </div>
      {show && <button className="p-3 absolute right-0 text-black text-2xl z-50" onClick={close}>x</button>}
      {show && <Nav/>}

      
    </div>
  )
}

export default Header;