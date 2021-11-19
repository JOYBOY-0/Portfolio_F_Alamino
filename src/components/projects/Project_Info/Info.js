import React from 'react'
import demo from '../../../images/WS_logo_final.png'
import Button from '../../rehusable/button/Button'
import Container from '../../rehusable/container/Container'
import './info.css'

export default function Info({project}) {
    return (
        <Container w="100%" round="rounded-xl" extra="p-4">
            <article className="padded
            flex flex-col justify-center items-center
            shadow-inner rounded-2xl
            border-2 border-gray-500 border-opacity-10">
                <div className="flex justify-center">
                    <img src={demo} className="w-9/12"
                    alt='project-preview' />
                </div>
                <h2 className="font-bold text-2xl mt-2 text-black">
                    {project.title}</h2>

                <h4 className="font-semibold text-base mb-3 text-blue-500">
                    {project.subtitle}</h4>

                <p className="text-sm text-gray-800 
                text-center mx-4 sm:mx-8 max-w-xs">
                    {project.description}</p>

                <div className="flex justify-center w-full my-10 justify-arround">
                    <Button url={project.githubUrl} textColor="text-purple-500">
                        Github</Button>
                    <Button url={project.webPageUrl} textColor="text-blue-500">
                        Demo</Button>
                </div>
            </article>
        </Container>
    )
}
