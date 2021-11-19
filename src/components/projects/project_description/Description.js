import React from 'react'
import Container from '../../rehusable/container/Container'
import Roles from '../Roles/Roles';
import Icons from './icons/Icons'

export default function Description({project}) {

    const skills = project.skills;
    const roles = project.roles;


    return (
        <Container w="100%" round="rounded-xl" extra="p-4">
        <article className="padded
        flex flex-col justify-between items-center
        shadow-inner rounded-2xl
        border-2 border-gray-500 border-opacity-10">
            <header className="flex flex-col items-center flex-wrap"> 
                <h3 className="mt-6 mb-1 text-lg sm:text-xl">
                    About <span className="text-blue-500 font-bold">{project.title}</span></h3>
                <p className="mx-4 text-sm max-w-md text-center">{project.about}</p>
            </header>

            <div>
                <div className="flex flex-col items-center">
                    <h4 className="font-semibold sm:text-lg 
                    text-gray-600">
                    <span className="text-purple-500 font-semibold">My role </span> 
                    here</h4>
                    <div className="mb-4 mt-2 mx-2 sm:mb-6 sm:mt-4 
                    flex flex-wrap justify-center">
                        {roles.map((role, i) => 
                            <Roles role={role} key={i} />
                        )}
                    </div>
                </div>
                
                <div className="flex flex-col items-center">
                    <h4 className="font-semibold sm:text-lg 
                    text-gray-600">
                        Used for this proyect</h4>
                    <div className="mb-4 mt-2 sm:mb-6 sm:mt-4 
                    flex flex-wrap justify-center">
                        {skills.map((skill, i) => 
                            <Icons icon={skill} key={i} />
                        )}
                    </div>
                </div>
            </div>
        </article>
    </Container>
    )
}
