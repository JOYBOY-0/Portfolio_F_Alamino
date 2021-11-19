import React from 'react'
import './button.css'

export default function Button(props) {
    const available = (url) => {
        if (url !== undefined) {
            return 'btn'} else {return 'btn-disabled'}
    }

    return (
        <a href={props.url} 
        className={`w-2/5 mx-2 
        ${available(props.url) === 'btn' && props.textColor} 
        ${available(props.url)}`}>
            {props.children}
        </a>
    )
}
