import React from 'react'
import anim from '../images/SCARECROW_1.gif'
export default function NotFound404() {
    return (
        <section className="h-85vh md:h-80vh mt-15vh md:mt-20vh flex
        flex flex-col items-center justify-center
        md:justify-between md:flex-row w-scren">
            <h1 className="text-3xl w-screen p-4 md:text-5xl font-bold
            max-w-md text-gray-600">
                Seems like this page does not exist.
            </h1>
            <img src={anim} alt="animation2" 
            className="w-full max-w-lg"/>
        </section>
    )
}
