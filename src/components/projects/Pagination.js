import React from 'react'
import Container from '../rehusable/container/Container'
export default function Pagination({eff, onClick}) {
    return (
    <>
        {eff === 'prev' &&

            <div onClick={onClick}
            className="hidden xl:flex 
            absolute w-1/5 h-32 cursor-pointer
            top-4 right-0 transform translate-x-11/10 
            active:scale-95">
                
                <Container skew="tr" w="100%" round="rounded-xl">
                    <p className="h-full my-4 text-gray-500">PREV</p>
                    <div className="w-5/6 h-12 absolute
                    bottom-2 right-1/2 transform translate-x-1/2
                    shadow-inner rounded-2xl
                    border-2 border-gray-500 border-opacity-10
                    flex items-center justify-center">
                        <i className="fas fa-arrow-left text-xl text-gray-500"></i>
                    </div>
                </Container>
            </div>}

        {eff === 'next' &&

            <div onClick={onClick}
            className="hidden xl:flex 
            absolute flex w-1/10 h-32 cursor-pointer
            bottom-4 left-0 transform -translate-x-11/10
            active:scale-95">

                <Container skew="bl" w="100%" round="rounded-xl">
                    <p className="h-full my-4 text-gray-500">NEXT</p>
                    <div className="w-5/6 h-12 absolute
                    bottom-2 right-1/2 transform translate-x-1/2
                    shadow-inner rounded-2xl
                    border-2 border-gray-500 border-opacity-10
                    flex items-center justify-center">
                        <i className="fas fa-arrow-right text-xl text-gray-500"></i>
                    </div>
                </Container>
            </div>}

        {eff === 'prevNav' &&

            <div onClick={onClick}
            className="flex items-center
            xl:hidden btnNav rounded-r-full
            fixed left-0 bottom-1/2 transform translate-y-1/2
            flex w-10 h-20 cursor-pointer">
                <i className="fas fa-arrow-left text-xl text-gray-500 ml-1"></i>
            </div>}

        {eff === 'nextNav' &&

            <div onClick={onClick}
            className="flex items-center justify-end
            xl:hidden btnNav rounded-l-full
            fixed right-0 bottom-1/2 transform translate-y-1/2
            flex w-10 h-20 cursor-pointer">
                <i className="fas fa-arrow-right text-xl text-gray-500 mr-1"></i>
            </div>}
        
    </>
    )
}
