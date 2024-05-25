import React, { useState, useContext } from 'react';
import userContext from '../context/userContext';

const Login = () => {
    const [userName, SetUserName] = useState('');
    const [password, SetPassword] = useState('');

    const { SetUser } = useContext(userContext);

    const handleSubmit = (e) => {
        e.preventDefault();
        SetUser({ userName, password });
    };

    return (
        <div>
            <h2 className='text-center m-2 p-4 font-mono'> Login</h2>
            <div className='flex items-center justify-center flex-col'>

                <input
                    type="text"
                    placeholder='username'
                    value={userName}
                    onChange={(e) => SetUserName(e.target.value)}
                    className='m-3 placeholder:text-slate-400 bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1 sm:text-sm sm:max-w-xs sm:w-60'

                />
                <input
                    type="text"
                    placeholder='password'
                    value={password}
                    onChange={(e) => SetPassword(e.target.value)}
                    className='outline-none  m-2  placeholder:text-slate-400 bg-white  border border-slate-300 rounded-md py-2 pl-9 pr-3 shadow-sm focus:outline-none focus:border-sky-500 focus:ring-sky-500 focus:ring-1  sm:w-60'
                />

                <button
                    onClick={handleSubmit}
                    className='text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 mt-2 sm:w-60 w-'
                >Submit</button>
            </div>
        </div>
    );
};

export default Login;
