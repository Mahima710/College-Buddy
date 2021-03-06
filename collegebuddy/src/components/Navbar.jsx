import React, { useState } from 'react'
import '../assets/Navbar.css'
import { Link } from 'react-router-dom'

const Navbar = () => {
    const [Transform, setTransform] = useState('translateX(-200px) translateY(-200px)')
    const onclick = () => {
        document.body.classList.remove('active')
    }

    const MenuClick = () => {
        document.body.classList.toggle('active')
        Transform === 'translateX(-200px) translateY(-200px)' ?
            setTransform('translateX(0px) translateY(0px)') :
            setTransform('translateX(-200px) translateY(-200px)')
    }
    return (
        <>
            <div className="pie pie1" onClick={() => onclick()} style={{ transform: Transform }}>
                <Link to='/login'>
                <div className="pie-color pie-color1">
                    <svg className="cardnav" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <g transform="translate(0.000000,100.000000) scale(0.200000,-0.200000)"
                            fill="#000000" stroke="none">
                            <path d="M155 456 c-52 -24 -98 -69 -110 -107 -11 -33 2 -34 19 -1 48 94 174
                            137 271 93 128 -58 164 -223 72 -328 -96 -110 -277 -89 -343 39 -17 33 -30 32
                            -19 -1 20 -65 123 -131 205 -131 52 0 134 35 167 71 34 37 63 110 63 159 0 52
                            -35 134 -71 167 -37 34 -110 63 -159 63 -26 0 -66 -10 -95 -24z"/>
                            <path d="M250 333 c0 -4 14 -22 32 -40 l32 -33 -147 0 c-91 0 -147 -4 -147
                            -10 0 -6 56 -10 147 -10 l147 0 -34 -35 c-18 -19 -30 -38 -26 -42 3 -4 28 14
                            54 40 l46 47 -44 45 c-42 42 -60 54 -60 38z"/>
                        </g>
                    </svg>
                </div>
                </Link>
            </div>
            <div className="pie pie2" onClick={() => onclick()} style={{ transform: Transform }}>
                <Link to='/login'>
                <div className="pie-color pie-color2">
                    <svg className="discount" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <g transform="translate(-3.000000,100.000000) scale(0.1700000,-0.170000)"
                            fill="#000000" stroke="none">
                            <path d="M5 538 c-3 -8 -4 -124 -3 -258 l3 -245 195 0 195 0 0 38 c0 43 -18
                            55 -23 15 l-3 -28 -170 0 -169 0 0 230 0 230 169 0 170 0 3 -50 c4 -72 23 -62
                            23 13 l0 62 -193 3 c-150 2 -194 0 -197 -10z"/>
                            <path d="M437 413 c-4 -3 -7 -17 -7 -30 0 -23 -2 -23 -100 -23 l-100 0 0 -70
                            0 -70 100 0 c99 0 100 0 100 -24 0 -46 22 -39 88 28 l67 66 -65 65 c-65 66
                            -71 70 -83 58z m73 -88 l34 -35 -34 -35 c-37 -38 -50 -43 -50 -20 0 12 -18 15
                            -100 15 l-100 0 0 40 0 40 100 0 c82 0 100 3 100 15 0 23 13 18 50 -20z"/>
                            <path d="M375 180 c-4 -6 -3 -16 3 -22 6 -6 12 -6 17 2 4 6 3 16 -3 22 -6 6
                            -12 6 -17 -2z"/>
                        </g>
                    </svg>
                </div>
                </Link>
            </div>
            <div className="pie pie3" onClick={() => onclick()} style={{ transform: Transform }}>
                <Link to='/register'>
                <div className="pie-color pie-color3">
                    <svg className="cart" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" width="100" height="100">
                        <g transform="translate(0.000000,100.000000) scale(0.1500000,-0.1500000)"
                            fill="#000000" stroke="none">
                            <path d="M228 610 c-77 -23 -128 -95 -128 -180 0 -54 10 -81 43 -117 l20 -22
                            -29 -11 c-33 -13 -64 -38 -64 -53 0 -6 8 -3 18 5 9 9 32 23 50 32 30 15 34 15
                            65 -1 40 -21 122 -21 163 0 39 20 63 8 35 -17 -48 -43 -50 -122 -4 -176 l25
                            -30 -181 0 -181 0 -16 25 c-12 18 -15 36 -10 66 4 27 3 38 -4 34 -5 -3 -10
                            -28 -10 -55 0 -41 4 -52 26 -69 25 -20 39 -21 246 -21 238 0 267 5 306 55 16
                            20 22 41 22 74 -1 87 -48 131 -142 131 -55 0 -80 11 -57 26 19 11 49 87 49
                            126 1 121 -125 214 -242 178z m131 -25 c113 -58 128 -213 27 -290 -110 -84
                            -276 -1 -276 138 0 51 40 118 86 144 46 27 121 30 163 8z m212 -351 c76 -73
                            28 -194 -78 -194 -38 0 -50 5 -79 34 -39 39 -45 86 -19 136 33 65 121 77 176
                            24z"/>
                            <path d="M467 243 c-4 -3 -7 -16 -7 -28 0 -17 -8 -24 -30 -29 -17 -3 -33 -12
                            -36 -21 -8 -21 14 -45 42 -45 17 0 23 -6 26 -26 6 -55 68 -54 68 2 0 17 6 23
                            28 26 21 2 28 9 30 31 3 23 -1 28 -26 33 -23 5 -31 13 -36 35 -4 22 -11 29
                            -29 29 -13 0 -27 -3 -30 -7z m43 -39 c4 -23 12 -30 35 -34 41 -7 40 -34 -2
                            -38 -29 -3 -33 -7 -33 -33 0 -24 -4 -30 -17 -27 -11 2 -19 14 -21 30 -2 21 -9
                            28 -30 30 -16 2 -28 10 -30 21 -3 13 3 17 27 17 27 0 31 3 31 28 0 51 31 56
                            40 6z"/>
                            <path d="M45 200 c-3 -5 -1 -10 4 -10 6 0 11 5 11 10 0 6 -2 10 -4 10 -3 0 -8
                            -4 -11 -10z"/>
                        </g>
                    </svg>
                </div>
                </Link>
            </div>
            <div className="menu" onClick={() => MenuClick()}>
                <svg className="hamburger" xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100">
                    <g
                        fill="none"
                        stroke="#000"
                        strokeWidth="7.999"
                        strokeLinecap="round"
                    >
                        <path d="M 55,26.000284 L 24.056276,25.999716" />
                        <path d="M 24.056276,49.999716 L 75.943724,50.000284" />
                        <path d="M 45,73.999716 L 75.943724,74.000284" />
                        <path d="M 75.943724,26.000284 L 45,25.999716" />
                        <path d="M 24.056276,73.999716 L 55,74.000284" />
                    </g>
                </svg>
            </div>

        </>
    )
}

export default Navbar
