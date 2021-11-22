import React from 'react'
import Container from '../../rehusable/container/Container'

export default function AmContent(props) {
    return (
        <Container w="100%" round="rounded-xl opacity-70" extra="p-4">
            <article className="padded
            flex flex-col justify-start items-center
            shadow-inner rounded-2xl
            border-2 border-gray-500 border-opacity-10">

                    {props.children}
                
            </article>
        </Container>
    )
}
