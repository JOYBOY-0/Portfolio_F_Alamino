import React from 'react'
import './container.css'
export default function Container(props) {

    const style = {
        width: `${props.w}`
    }

    
    Container.defaultProps = {
        skew: 'sKnone',
        h: 'h-full',
        round: 'rounded-2xl'
      };

    return (
        <article className={`${props.extra} flex items-center justify-center 
         relative ${props.h}`}
        style={style}>

            <div className={`${props.skew} ${props.round} opacity-30
             w-full h-full`} ></div>
            <div className={`flex flex-col justify-center items-center
            absolute rounded-2xl w-full h-full`}>
                {props.children}
            </div>

        </article>
    )
}
