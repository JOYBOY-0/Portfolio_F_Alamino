import React from 'react'
import { useState, useEffect } from 'react'

import './headerNav.css'
import profilePic from "../../images/profileImage.jpeg"
import Container from '../rehusable/container/Container'
import NavLinks from './NavLinks'

export default function HeaderNav() {
    const [Open, setOpen] = useState(true)

    useEffect(() => {
        document.addEventListener('scroll', () => setOpen(false))
        return () => {
            document.removeEventListener('scroll', () => setOpen(false))
        }
    }, [])

    return (
        <nav className="flex h-15vh sm:h-20vh 
        fixed top-0 z-10
        items-center justify-end
        lg:justify-between py-3 sm:py-6 w-screen">

            <Container w="8rem" h="h-full" skew="br" round="rounded-r-2xl"
            extra='hidden lg:flex'>
                <div className="flex items-center">
                    <div className="profilePic
                    w-16 h-16 bg-white rounded-full">
                        <img src={profilePic} alt='Francisco Alamino' />
                    </div>
                </div>
            </Container>

            <Container w="var(--navWidth)" h="h-full" skew="tl" round="rounded-l-2xl"
            extra={`transform transition-transform ${!Open && "translate-x-4/5"}`}>
                
                {Open && 
                    <NavLinks />
                }
                
                <button onClick={() => setOpen(!Open)}
                    className="absolute left-0
                    flex items-center justify-center
                    w-10 h-10 sm:w-12 sm:h-12 shadow rounded-full 
                    bg-gradient-to-t from-gray-200 to-gray-100
                    transform -translate-x-1/2
                    active:scale-95">
                        {Open &&
                            <i className="fas fa-times text-red-400"></i>
                        }
                        {!Open &&
                            <i className="fas fa-angle-double-left text-blue-400"></i>
                        }
                </button>
            </Container>
        
        </nav>
    )
}
