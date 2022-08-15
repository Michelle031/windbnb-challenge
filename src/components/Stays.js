import React from 'react';
import { useSelector } from 'react-redux';
import { staysSelector } from '../features/staysSlice';
import Card from './Card';

function Stays() {

    const {filteredStays} = useSelector(staysSelector);
  return (
    <div className='py-3 px-4 md:px-10 lg:px-12'>
        <div className='flex justify-between items-center py-2'>
            <h1 className='text-2xl font-bold '>Stays in Finland</h1>
            <p className='text-sm font-semibold'>12+ stays</p>
        </div>
        <div className="grid grid-cols-1 lg:grid-cols-3 w-full gap-10 mt-3">
            {filteredStays.map((stay) => (
                <Card key={filteredStays.indexOf(stay)} stay={stay} />
            ))}
        </div>
    </div>
  )
}

export default Stays