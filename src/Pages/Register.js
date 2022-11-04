import React from 'react';
import { Link } from 'react-router-dom';
const Register = () => {
    return (
        <div className='h-screen w-full flex flex-col justify-end items-center'>
            <input className='pl-3 my-2 w-96 focus:ring-1 outline-none w-60 h-12 border' type='text' placeholder='Name' />
            <input className='pl-3 my-2 w-96 focus:ring-1 outline-none w-60 h-12 border' type='text' placeholder='Surname' />
            <input className='pl-3 my-2 w-96 focus:ring-1 outline-none w-60 h-12 border' type='email' placeholder='Email' />
            <input className='pl-3 my-2 w-96 focus:ring-1 outline-none w-60 h-12 border' type='password' placeholder='Password' />
            <button className='mt-3 w-96 h-12 border-rose-900 text-white bg-rose-700 rounded hover:bg-rose-800 transition-easy-in-out duration-300'>Create a new account</button>
            <Link to='/login' className='my-3 w-96 h-12 flex justify-center items-center text-white bg-yellow-700 rounded hover:bg-yellow-800 transition-easy-in-out duration-300'>Login</Link>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,154.7C384,149,480,75,576,42.7C672,11,768,21,864,37.3C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
        </div>
    )
}

export default Register;