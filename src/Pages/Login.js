import React from 'react';
import { signInWithGoogle } from '../Firebase';
import { Link } from 'react-router-dom';

const Login = ({ setShowPhoneModal, showPhoneModal }) => {
  return (
    <div className='h-screen w-full flex flex-col justify-end items-center'>
      <div className='flex mb-3'>
        <label className='relative mx-2'><input className='pl-3 focus:ring-1 outline-none w-60 h-12 border peer' type='email' placeholder='Email' /></label>
        <label className='relative mx-2'><input className='pl-3 focus:ring-1 outline-none w-60 h-12 border peer' type='password' placeholder='Password' /></label>
      </div>
      <button className='mt-3 w-96 h-12 border-rose-900 text-white bg-yellow-700 rounded hover:bg-yellow-800 transition-easy-in-out duration-300'>Enter</button>
      <Link to='/register' className='my-3 w-96 h-12 flex justify-center items-center border-rose-900 text-white bg-red-700 rounded hover:bg-red-800 transition-easy-in-out duration-300'>Create a new account</Link>
      <div className='w-[30%] h-[1px] bg-gray-300'></div>
      <div className='flex mt-3 mb-24'>
        <button onClick={signInWithGoogle} className='mx-2 w-60 h-12 flex justify-center items-center text-white bg-indigo-700 rounded hover:bg-indigo-800 transition-easy-in-out duration-300'>Sign in with google</button>
        <button onClick={() => setShowPhoneModal(!showPhoneModal)} className='mx-2 w-60 h-12 text-white bg-green-700 rounded hover:bg-green-800 transition-easy-in-out duration-300'>Sign in with phone number</button>
      </div>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#0099ff" fillOpacity="1" d="M0,32L48,64C96,96,192,160,288,154.7C384,149,480,75,576,42.7C672,11,768,21,864,37.3C960,53,1056,75,1152,85.3C1248,96,1344,96,1392,96L1440,96L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"></path></svg>
    </div>
  )
}
export default Login;