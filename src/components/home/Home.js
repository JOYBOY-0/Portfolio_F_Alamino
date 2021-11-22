import React from 'react'
import { Redirect } from 'react-router'
import './home.css'

export default function Home() {
    return (
        <Redirect to="/projects" />
    )
}
