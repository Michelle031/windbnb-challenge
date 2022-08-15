import React, { useEffect, useState } from 'react';
import {Search, LocationOn} from "@mui/icons-material";
import { useDispatch, useSelector } from 'react-redux';
import { setFilter, setFilteredStays,setGuests } from '../features/staysSlice';
import { staysSelector } from '../features/staysSlice';

function Nav() {

    let [children, setChildren] = useState(0);
    let [adults, setAdults] = useState(0);
    let [points, setPoints] = useState(true);
    let [guest, setGuest] = useState(false);
    const {stays, filter, guests} = useSelector(staysSelector);
    const dispatch = useDispatch();
    const add = (value) => value = value + 1;
    const selectGuest = () => {
        setGuest(true);
        setPoints(false);
    }
    const selectPoint = () => {
        setGuest(false);
        setPoints(true);
    }
    const decrease = (value) => {
        if (value === 0) {
            return 0;
        } else {
            return value = value - 1 ;
        }
    } 
    useEffect(() => {
        dispatch(setGuests(children + adults));
        dispatch(setFilteredStays(stays.filter(stay => stay.maxGuests >= children + adults)));
    }, [adults, children, dispatch, stays]);
    const setState = (e) => {
        dispatch(setFilter(e.target.title))
        dispatch(setFilteredStays(stays.filter(stay => stay.city === e.target.title)));
    }
  return (
    <div className='w-full h-full bg-[rgba(79,79,79,0.4)] absolute top-0 left-0 text-xs text-[#333333]'>
            <div className='grid grid-cols-1 lg:grid-cols-3 bg-white p-6'>
            <div onClick={selectPoint} className={`select flex flex-col justify-center px-6 py-2 md:py-0 ${points && "active"} `}>
                <p className='text-sm'>LOCATION</p>
                <h3 className='text-xs'>{filter}, Finland</h3>
            </div>
            <div onClick={selectGuest} className={`select flex flex-col justify-center px-6 py-2 md:py-0 ${guest && "active"} `}>
                <p className='text-sm'>GUESTS</p>
                <h3 className='text-[#BDBDBD] text-xs'>{guests} guests</h3>
            </div>
            <div className='flex justify-center order-5 shadow-none md:select sm:order-none '>
                <p className='bg-[#EB5757] p-4 text-center rounded-lg text-sm w-auto inline-block shadow-md md:shadow-none'><Search sx={{height: "14px"}} /> Search</p>
            </div>
           <div className={`${guest && "opacity-0"} flex flex-col space-y-4 p-4`}>
                <p className='point' title="Helsinki" onClick={setState}><LocationOn />Helsinki, Finland</p>
                <p className='point' title="Turku" onClick={setState}><LocationOn />Turku, Finland</p>
                <p className='point' title="Oulu" onClick={setState}><LocationOn />Oulu, Finland</p>
                <p className='point' title="Vaasa" onClick={setState}><LocationOn />Vaasa, Finland</p>
            </div>
            <div className={`${points && "opacity-0"} flex  flex-col space-y-4 p-4`}>
                <div className="title">
                    <h3>Adults</h3>
                    <p className="text-[#BDBDBD]">Ages 13 or above</p>
                    <div className=" text-xs flex space-x-2 ">
                        <button className="border px-1" onClick={() => setAdults(add(adults))}>+</button>
                        <p>{adults}</p>
                        <button className="border px-1" onClick={() => setAdults(decrease(adults))}>-</button>
                    </div>
                </div>
                <div className="title">
                    <h3>Children</h3>
                    <p className="text-[#BDBDBD]">Ages 2-12</p>
                    <div className="text-xs flex space-x-2">
                        <button className="border px-1" onClick={() => setChildren(add(children))}>+</button>
                        <p>{children}</p>
                        <button className="border px-1" onClick={() => setChildren(decrease(children))}>-</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Nav
