import React from 'react'
import Container from '../rehusable/container/Container'
import anim1 from '../../images/MERCHANT_1.gif'
import anim2 from '../../images/SCARECROW_1.gif'
import anim3 from '../../images/MERCHANT_2.gif'
import anim4 from '../../images/SCARECROW_2.gif'
import dhLogo from '../../images/dh_logo.svg'
import dvLogo from '../../images/dv_logo.png'
import AmContent from './content/AmContent'
import Icons from '../projects/project_description/icons/Icons'
import Roles from '../projects/Roles/Roles'
import './aboutMe.css'

export default function AboutMe() {
    return (
    <>
        <section className="amSections
        lg:items-end lg:justify-center">
            <img src={anim1} alt='character-2'
            className="h-2/5 lg:h-9/10
            absolute -top-20 lg:top-8 lg:left-0" />
            <Container skew="bl" w="var(--description)" h="h-5/6 sm:h-3/5 lg:h-full" 
            round="rounded-2xl" extra=''>
                <AmContent>
                <h3 className="amTittles text-right">About me</h3>

                <div className="w-9/10 flex justify-end items-end">
                    <p className="p-4 text-sm text-right max-w-md">
                    I'm a Front-End dev with a very creative mindset. I love taking part in the UX process and make my own designs for UI and props.
                    </p>
                </div>
                <ul className="w-9/10 p-4 list-disc text-blue-500 mt-auto 
                md:border-r-4 md:border-blue-500 lg:my-auto">
                    <li className="amList">
                        Age: <span className="text-gray-500 ml-2">21</span>
                    </li>
                    <li className="amList">
                        Location: <span className="text-gray-500 ml-2">Buenos Aires, Argentina</span>
                    </li>
                    <li className="amList">
                        Role: <span className="text-gray-500 ml-2">Front-End developer</span>
                    </li>
                    <li className="amList">
                        Interest: <span className="text-gray-500 ml-2">Financial services, game industry, blockchain related</span>
                    </li>
                </ul>
                </AmContent>
            </Container>
        </section>

        <section className="amSections 
        lg:items-start lg:justify-center">
            <img src={anim2} alt='character-2'
            className="h-2/5 lg:h-9/10
            absolute -top-20 lg:top-8 lg:right-0" />
            <Container skew="br" w="var(--description)" h="h-5/6 sm:h-3/5 lg:h-full" 
            round="rounded-2xl" extra=''>
                <AmContent>
                <h3 className="amTittles">Skills</h3>
                <div className="flex flex-col my-auto w-9/10">
                    <div className="flex items-center
                    justify-start my-2">
                        <p className="skillsTittleO">
                            Tech
                        </p>
                        <div className="flex items-center flex-wrap">
                            <Icons icon="html" />
                            <Icons icon="css" />
                            <Icons icon="js" />
                            <Icons icon="react" />
                        </div>   
                    </div>
                    
                    <div className="flex items-center
                    justify-start my-2">
                        <p className="skillsTittleB">
                            Design
                        </p>
                        <div className="flex items-center flex-wrap">
                            <Icons icon="ps" />
                            <Icons icon="ai" />
                            <Icons icon="ae" />
                            <Icons icon="figma" />
                        </div>   
                    </div>
                    <div className="flex items-center
                    justify-start my-2">
                        <p className="skillsTittleV">
                            Soft Skills
                        </p>
                        <div className="flex items-center justify-around flex-wrap">
                            <Roles role="Leadership" />
                            <Roles role="Learning" />
                            <Roles role="Compromise" />
                            <Roles role="Creativity" />
                        </div>   
                    </div>
                </div>
                </AmContent>
            </Container>
        </section>

        <section className="h-85vh md:h-80vh 
        p-4 md:p-8 mt-15vh md:mt-20vh flex
        flex flex-col relative
        justify-end items-center lg:items-end lg:justify-center">
            <img src={anim3} alt='character-3'
            className="h-2/5 lg:h-9/10
            absolute -top-20 lg:top-8 lg:left-0" />
            <Container skew="bl" w="var(--description)" h="h-5/6 sm:h-3/5 lg:h-full" 
            round="rounded-2xl" extra=''>
                <AmContent>
                    <h3 className="amTittles text-right">Formation</h3>
                    <div className="w-9/10 my-auto">
                        <ul className="flex flex-col">
                            <li className="timelinePoints">
                                <img src={dhLogo} alt="Digital House"
                                className="formationImg" />
                                <div className="mx-4 pl-2
                                border-l-4 border-gray-400">                                    <h4 className="formationT">Full Stack Web</h4>
                                    <p className="text-sm">Digital House, Argentina (2021-2021)</p>
                                </div>
                            </li>
                            <li className="timelinePoints">
                                <img src={dhLogo} alt="Digital House"
                                className="formationImg" />
                                <div className="mx-4 pl-2
                                border-l-4 border-gray-400">                                    <h4 className="formationT">UX Design</h4>
                                    <p className="text-sm">Digital House, Argentina (2021-2022)</p>
                                </div>
                            </li>
                            <li className="timelinePoints">
                                <img src={dvLogo} alt="Digital House"
                                className="formationImg" />
                                <div className="mx-4 pl-2
                                border-l-4 border-gray-400">
                                    <h4 className="formationT">Téc. Animación y Postproducción</h4>
                                    <p className="text-sm">Escuela Da Vinci, Argentina (2021-2023)</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </AmContent>
            </Container>
        </section>

        <section className="amSections 
        lg:items-start lg:justify-center">
            <img src={anim4} alt='character-2'
            className="sm:h-3/5 lg:h-9/10
            absolute -top-4 lg:top-8 lg:right-0" />
            <Container skew="br" w="var(--description)" h="h-4/6 sm:h-3/5 lg:h-full" 
            round="rounded-2xl" extra=''>
                <AmContent>
                <h3 className="amTittles">Skills</h3>
                
                </AmContent>
            </Container>
        </section>
    </>
    )
}
