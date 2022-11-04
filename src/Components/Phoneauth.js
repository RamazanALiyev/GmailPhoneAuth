import React, { useState } from 'react';
import { GiJerusalemCross } from 'react-icons/gi';
import { auth } from '../Firebase';
import { getAuth, RecaptchaVerifier, signInWithPhoneNumber } from "firebase/auth";

const Phoneauth = ({ setShowPhoneModal, showPhoneModalCode, setShowPhoneModalCode }) => {
    const [phoneNumber, setPhoneNumber] = useState('+994');
    const [OTP, setOTP] = useState('')
    const sendPhonenumberAuth = () => {
        setShowPhoneModalCode(true)
        if (phoneNumber.length >= 12) {
            window.recaptchaVerifier = new RecaptchaVerifier('chechkingBot', {
                'size': 'invisible',
                'callback': (response) => {
                    // reCAPTCHA solved, allow signInWithPhoneNumber.
                }
            }, auth);
            let appVerifier = window.recaptchaVerifier;
            signInWithPhoneNumber(auth, phoneNumber, appVerifier)
                .then(confirmationResult => {
                    window.confirmationResult = confirmationResult;
                }).catch((error) => {
                    console.log(error)
                })
        }
    }
    const verifyOTP = (e) => {
        let otp = e.target.value
        setOTP(e.target.value)
        if (otp.length === 6) {
            console.log(otp)
            let confirmationResult = window.confirmationResult;
            confirmationResult.confirm(otp).then((result) => {
                // User signed in successfully.
                const user = result.user;
                console.log(user)
                // localStorage.setItem('phone', user)
                // ...
            }).catch((error) => {
                console.log('error', error)
            });
        }
    }
    return (
        <div className='absolute top-12 right-24 w-[20%] bg-indigo-400 z-10 px-4 py-8 rounded'>
            <h1 className='text-2xl text-white'>Sign in with phone number</h1>
            <label className='flex flex-col border border-white p-2 bg-yellow-700 mt-4 rounded'>
                <span className='text-xl mb-1 text-white ml-1'>Phone number</span>
                <input disabled={showPhoneModalCode} className={`w-64 h-12 px-3 outline-none rounded ${showPhoneModalCode ? 'text-white' : 'text-black'}`} type='tel' value={phoneNumber} onChange={(e) => setPhoneNumber(e.target.value)} />
                <p className='mt-1 text-gray-200 ml-1'>Please enter your phone number</p>
            </label>
            <button onClick={sendPhonenumberAuth} className={`${showPhoneModalCode ? 'hidden' : 'block'} w-48 h-12 bg-white rounded text-lg mt-4 border hover:bg-yellow-700 hover:text-white transition-eay-in-out duration-300`}>Request OTP</button>
            <GiJerusalemCross onClick={() => setShowPhoneModal(false)} className='absolute top-4 right-4 text-white cursor-pointer' />
            {showPhoneModalCode ? <label className='flex flex-col border border-white p-2 bg-yellow-700 mt-4 rounded'>
                <span className='text-xl mb-1 text-white ml-1'>OTP</span>
                <input className='w-64 h-12 px-3 outline-none rounded' maxLength={6} value={OTP} onChange={verifyOTP} />
                <p className='mt-1 text-gray-200 ml-1'>Please enter the one time pin sent to your phone</p>
            </label> : null}
            <button onClick={sendPhonenumberAuth} className={`${!showPhoneModalCode ? 'hidden' : 'block'} w-48 h-12 bg-white rounded text-lg mt-4 border hover:bg-yellow-700 hover:text-white transition-eay-in-out duration-300`}>Request OTP</button>
            <div id='chechkingBot'></div>
        </div>
    )
}

export default Phoneauth