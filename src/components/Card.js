import React from 'react';
import { Star } from "@mui/icons-material";

function Card({stay}) {
  return (
    <div className='flex flex-col items-center space-y-3 mb-3 justify-start'>
        <img src={stay.photo} alt="" className='md:w-[400px] md:h-[270px] rounded-[24px]' />
        <div className='flex justify-between w-full px-[2px]'>
            <div className='flex items-center space-x-2'>
                {stay.superHost && <p className='border text-xs font-bold border-[#4F4F4F] p-1 rounded-full'>SUPERHOST</p>}
                <p className='text-[#828282] text-sm'>{stay.type}</p>
                {stay.superHost && <p className='text-[#828282] text-sm'>{`. ${stay.beds} beds`}</p>}
            </div>
            <p className='text-[#4F4F4F] text-sm'><Star sx={{color: "#EB5757", height:"16px"}} /><span>{stay.rating}</span></p>
        </div>
        <h3 className='text-[#333333] text-base w-full truncate'>{stay.title}</h3>
    </div>
  )
}

export default Card