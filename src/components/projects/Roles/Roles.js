import React from 'react'

export default function Roles({role}) {
    
    const roleSelected = (choose) =>{
        if (choose === "Leadership"){
            return 'fas fa-users'
        } else if (choose === "UX"){
            return 'far fa-object-group'
        } else if (choose === "Front-End"){
            return 'fas fa-code'
        } else if (choose === "Character Design"){
            return 'fas fa-dragon'
        } else if (choose === "Game Design"){
            return 'fas fa-dice'
        }
    }

    return (
        <div className="flex flex-col items-center 
        m-2 w-12 xs:w-16 sm:w-20">
            <i className={`${roleSelected(role)}
            text-2xl xs:text-3xl sm:text-4xl text-purple-500`}></i>
            <p className="m-2 text-xs text-gray-400 text-center">{role}</p>
        </div>
    )
}
