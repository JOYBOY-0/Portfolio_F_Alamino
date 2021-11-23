import React from 'react'

export default function Contact() {
    return (
        <section className="h-85vh md:h-80vh mt-15vh md:mt-20vh
        flex flex-col w-scren overflow-hidden justify-between flex-wrap
        p-8 md:p-20 lg:p-20vh">
            <h1 className="text-4xl xs:text-5xl lg:text-6xl 
            text-white font-bold pl-4
            border-l-4">
                I want to work <br />
                <span className="text-blue-500"> with you.</span>
            </h1>
            <ul className="flex flex-col flex-wrap ml-auto
            pr-4 border-r-4">
                <a href="https://www.linkedin.com/in/francisco-alamino/" rel="noreferrer" target="_blank">
                    <li className="flex items-center justify-end mb-4">
                        <p className="mr-4 text-lg text-gray-700 font-semibold">Linkedin</p>
                        <i className="fab fa-linkedin 
                        text-5xl md:text-6xl text-gray-700"></i>
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/francisco-alamino/" rel="noreferrer" target="_blank">
                    <li className="flex items-center justify-end mb-4">
                        <p className="mr-4 text-lg text-gray-700 font-semibold">Call me</p>
                        <i className="fas fa-phone-square 
                        text-5xl md:text-6xl text-gray-700"></i>
                    </li>
                </a>
                <a href="https://www.linkedin.com/in/francisco-alamino/" rel="noreferrer" target="_blank">
                    <li className="flex items-center justify-end mb-4">
                        <p className="mr-4 text-lg text-gray-700 font-semibold">Write me</p>
                        <i className="fas fa-envelope 
                        text-5xl md:text-6xl text-gray-700"></i>
                    </li>
                </a>
            </ul>
        </section>
    )
}
