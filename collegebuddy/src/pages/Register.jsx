import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar.jsx'
import axios from 'axios'


const Register = () => {
    const history = useNavigate()
    const [Confirm_Password, setConfirm_Password] = useState('')
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const [Email, setEmail] = useState('')
    const onClick = (e) => {
        e.preventDefault();
        console.log("here")
        if (Username && Password && Confirm_Password && Password === Confirm_Password) {
            axios.post('http://localhost:5000/register', 
            { username: Username, password: Password, confirm_password: Confirm_Password, email:Email },
            {
                withCredentials:true
            })
                .then(res => {
                    console.log(res)
                    history('/')
                })
                .catch((error) => {
                    console.log(error)
                })
        }
        else {
            console.log('Invalid Input')
        }
    }
    return (
        <>
            <Navbar />
            <div className='w-6/6 h-6/6 text-center bg-gradient-to-bl to-blue-400 from-blue-100' style={{ width: '100vw', height: '100vh' }}>
                <h1 className='hehe text-6xl font-bold leading-none text-transparent bg-cover' style={{ paddingTop: '4rem' }}>COLLEGE BUDDY</h1>
                <h1 className='text-indigo-900 text-3xl' style={{ paddingTop: '3rem' }}>Create your account</h1>
                <div className='w-3/6 shadow-cardShadow bg-white formcard' style={{ margin: 'auto', marginTop: '2rem', padding: '2rem', backgroundColor: 'white' }}>
                    <form className='grid'>
                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Enter Username"
                            variant="standard"
                            className='row text-left'
                            name='Username'
                            onChange={(e) => setUsername(e.target.value)}
                            required
                        />
                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Enter Email"
                            variant="standard"
                            type='email'
                            className='row text-left'
                            name='conf_password'
                            onChange={(e) => { setEmail(e.target.value) }}
                            required
                        />
                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Enter Password"
                            variant="standard"
                            className='row text-left'
                            name='Password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />

                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Confirm Password"
                            variant="standard"
                            type='password'
                            className='row text-left'
                            name='conf_password'
                            onChange={(e) => { setConfirm_Password(e.target.value) }}
                            required
                        />
                        <button type='submit' onClick={(e) => { onClick(e) }} className=' submit w-full bg-purple text-white col hover:text-gray-400' style={{ marginTop: "3rem", margin: 'auto', padding: '7px' }}>Register</button>
                    </form>
                </div>
                <p className='text-gray-900 text-lg text-center' style={{ marginTop: '4rem' }}>Already have an account? <Link to='/login' className='text-blue-800 hover:text-blue-500'>Sign In Here</Link></p>

            </div>
        </>
    )
}

export default Register
