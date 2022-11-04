import React from 'react';
import oops from '../assets/error.webp'
import { Link } from 'react-router-dom';
import { RiErrorWarningFill } from 'react-icons/ri';

const Errorpage = () => {
    return (
        <div className='h-[88vh] flex flex-col justify-center items-center'>
            <img width={300} src={oops} alt='pic' />
            <h1 className='text-[2.5rem] flex justify-center items-center'><RiErrorWarningFill className='text-red-400' /><span className='mx-3 font-semibold'>Nəticə tapılmadı</span> <RiErrorWarningFill className='text-red-400' /></h1>
            <p className='my-3 text-lg tracking-widest text-white bg-black px-8 py-2 rounded'>Axtarışınıza uyğun nəticə tapılmadı !</p>
            <Link className='w-[250px] h-[50px] flex justify-center items-center rounded cursor-pointer transition-easy-in-out duration-300 text-xl bg-indigo-700 text-white' to='/'>Əsas səhifəyə keçid edin</Link>
        </div>
    )
}

export default Errorpage;