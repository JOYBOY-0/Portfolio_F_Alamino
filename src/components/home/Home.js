import React from 'react'
import './home.css'

export default function Home() {
    return (
    <section className="h-80vh p-4 flex justify-between">
    
        <article className="projectBoxW flex h-full	relative
        filter backdrop-blur-md">

            <div className="projectBox opacity-20
            rounded-2xl w-full h-full"></div>
            <div className="flex flex-col items-center 
            justify-center 
            w-full h-full absolute rounded-2xl">

            </div>
        
        </article>

        <article className="showcaseW flex h-full relative">

            <div className="showcase  opacity-20
            rounded-2xl w-full h-full"></div>
            <div className="content rounded-2xl w-full h-full">

            </div>

        </article>
    </section>
    )
}
