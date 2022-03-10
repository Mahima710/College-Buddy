import React from 'react'
import Illustration from '../assets/Capture.PNG'
import '../assets/home.css'
import Card from '../components/Card'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar'



const Home = () => {
    return (
        <>
        <Navbar />
            <div className='flex head'>
                <div className="text flex-1 my-auto ml-12" style={{ marginLeft: '1rem' }}>
                    <h1 className='hehe text-6xl font-bold leading-none text-transparent bg-cover'>COLLEGE BUDDY</h1>
                    <img src={Illustration} className='w-2/5 m-auto  mr-6 flex-1 img between' alt="pic"></img>

                    <h1 className="float-left font-extrabold text-6xl leading-normal desc">Need a hand in <br />Managing college work ?? <br /><span className='hover-underline-animation'>We Got You!</span></h1>
                </div>
                <img src={Illustration} className='w-2/5 float-right  mr-6 flex-1 img' alt="pic"></img>
            </div>
            <div className='md:flex details' style={{ marginTop: '3rem', clear:"both" }} >
                <Link to='/expensetracker'>
                    <div className='md:flex1'>
                        <Card color='linear-gradient(to bottom right, #fb923c, #db2777)' content='Track your Expenses' />
                    </div>
                </Link>
                <div className='md:flex1'>
                    <Card color='linear-gradient(to bottom right, #22d3ee, #0ea5e9)' content='Explore Courses' />
                </div>
            </div>

            <div className='md:flex md:float-right second'>
                <div className='md:flex1'>
                    <Card color='linear-gradient(to bottom right, #a855f7, #6366f1)' content='Study Room' />
                </div>
                <div className='md:flex1'>
                    <Card color='linear-gradient(to bottom right, #bef264, #10b981)' content='Store Schedules' />
                </div>
            </div>
        </>
    )
}

export default Home
