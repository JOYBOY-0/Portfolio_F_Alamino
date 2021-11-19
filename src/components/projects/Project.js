import React from 'react'
import { useState } from 'react'

import Info from './Project_Info/Info'
import Container from '../rehusable/container/Container'
import Pagination from './Pagination'
import Data from './Data/Data'

import './project.css'
import Description from './project_description/Description'

export default function Project() {

    const [page, setPage] = useState(0)
    const projectsData = Data;
    const currentPj = projectsData[page];

    const prev = () => {
        page > 0 ? 
        setPage(page-1) :
         setPage(page);
    }

    const next = () => {
        page < projectsData.length-1 ? 
        setPage(page+1) :
         setPage(page);
    }

    return (
        <section className="h-180vh md:h-80vh 
        p-4 mt-15vh md:mt-20vh flex
        flex flex-col items-center justify-center
        md:justify-between md:flex-row">
    
            <Container skew="tr" w="var(--info)" h="h-2/5 md:h-full" 
            round="rounded-2xl" extra=''>
                <Info project={currentPj} />
                <Pagination eff="prev" onClick={() => prev()} />
            </Container>
            <Container skew="bl" w="var(--description)" h="h-3/5 md:h-full"
            round="rounded-2xl" extra=''>
                <Description project={currentPj} />
                <Pagination eff="next" onClick={() => next()} />
            </Container>

            <Pagination eff="prevNav" onClick={() => prev()} />
            <Pagination eff="nextNav" onClick={() => next()} />


        </section>
    )
}
