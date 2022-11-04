import React from 'react'
import { AiOutlineLogout } from 'react-icons/ai';
import { googleSignout } from '../Firebase';

const Home = () => {
    console.log(localStorage.getItem('picture'))
    return (
        <div className='h-screen flex justify-center items-center'>
            <div className='relative border py-8 px-24 rounded bg-gray-100 flex flex-col justify-center items-center'>
                <img className='rounded-full' src={localStorage.getItem('picture')} alt='title' />
                <h1 className='font-semibold text-2xl my-3'>{localStorage.getItem('name')}</h1>
                <h3 className='italic'>{localStorage.getItem('email')}</h3>
                <AiOutlineLogout onClick={googleSignout} className='absolute top-4 right-4 text-2xl text-red-600 cursor-pointer hover:rotate-180 transition-easy-in-out duration-300' />
            </div>
        </div>
    )
}

export default Home;