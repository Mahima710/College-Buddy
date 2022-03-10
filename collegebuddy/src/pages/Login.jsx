import React, { useState } from 'react'
import TextField from '@mui/material/TextField'
import { Link, useNavigate } from "react-router-dom";
import Navbar from '../components/Navbar';
import axios from 'axios'

const Login = () => {
    const [Username, setUsername] = useState('')
    const [Password, setPassword] = useState('')
    const history = useNavigate()
    const onclick = (e) => {
        e.preventDefault();
        if (Username && Password) {
            axios.post('http://127.0.0.1:5000/login', { username: Username, password: Password })
                .then(res => {
                    console.log(res.data)
                    if(res.data.success===true) {
                        localStorage.setItem("token", res.data.token)
                        history('/')
                    }
                }
                )
                .catch(err=>{
                    console.log(err)
                })
            }
        else {
            console.log('invalid input')
        }
    }
    return (
        <>
            <Navbar />
            <div className='w-6/6 h-6/6 text-center bg-gradient-to-bl to-blue-400 from-blue-100' style={{ width: '100vw', height: '100vh' }}>
                <h1 className='hehe text-6xl font-bold leading-none text-transparent bg-cover login' style={{ paddingTop: '4rem' }}>COLLEGE BUDDY</h1>
                <h1 className='text-indigo-900 text-3xl' style={{ paddingTop: '3rem' }}>Login to your account</h1>
                <div className='w-3/6 shadow-cardShadow formcard' style={{ margin: 'auto', marginTop: '2rem', padding: '2rem', backgroundColor: 'white' }}>
                    <form className='grid'>
                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Enter Username"
                            variant="standard"
                            className='row text-left'
                            name='Username'
                            onChange={(e) => setUsername(e.target.value)}
                        />

                        <TextField
                            sx={{ m: 1, minWidth: 360 }}
                            label="Enter Password"
                            variant="standard"
                            className='row text-left '
                            name='Password'
                            type='password'
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        <button type='submit' onClick={(e) => onclick(e)} className='w-full bg-purple text-white col hover:text-gray-400 submit' style={{ marginTop: "3rem", margin: 'auto', padding: '7px' }}>Login</button>
                    </form>
                </div>
                <p className='text-gray-500 text-lg text-center' style={{ marginTop: '4rem' }}>Don't have an account? <Link to='/register' className='text-blue-800 hover:text-blue-500'>What are you waiting for?</Link></p>

            </div>
        </>

    )
}

export default Login