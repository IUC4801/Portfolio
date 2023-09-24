import React, { useRef } from 'react'
import { motion, useScroll } from 'framer-motion'
import LiIcon from './LiIcon'


const Details = ({ position, company, companyLink, time, address, work }) => {
    const ref = useRef(null);

    return <li ref={ref} className='my-8 first:mt-0 last:mb-0 w-[60%] mx-auto flex flex-col items-center justify-between
    md:w-[80%]
    '>
        <LiIcon reference={ref} />

        <motion.div
            initial={{ y: 50 }}
            whileInView={{ y: 0 }}
            transition={{ duration: 0.5, type: "spring" }}
        >
            <h3 className='capitalize font-bold text-2xl sm:text-xl xs:text-lg'>
                {position}&nbsp;<a href={companyLink}
                    target='_blank'
                    className='text-primary dark:text-primaryDark capitalize'
                >@{company}</a></h3>
            <span className='capitalize font-medium text-dark/75 dark:text-light/75 xs:text-sm '>
                {time} | {address}
            </span>
            <p className='font-medium w-full md:text-sm'>
                {work}
            </p>
        </motion.div>
    </li>
}
const Experience = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll(
        {
            target: ref,
            offset: ["start end", "center start"]
        }
    );
    return (
        <div className='my-64'>
            <h2 className='font-bold text-8xl mb-32 w-full text-center md:text-6xl xs:text-4xl md:mb-16'>
                Experience
            </h2>
            <div ref={ref} className='w-[75] mx-auto relative lg:w-[90%] md:w-full'>
                <motion.div
                    style={{ scaleY: scrollYProgress }}
                    className='absolute left-9 top-0 w-[4px] h-full bg-dark origin-top dark:bg-light
                    md:w-[2px] md:left-[30px] xs:left-[20px]
                    ' />
                <ul className='w-full flex flex-col items-strat justify-between ml-4 xs:ml-2'>
                    <Details

                        position="Member of Technical Staff-1" company="Adobe"
                        companyLink="https://www.adobe.com/in/"
                        time="2023-Present" address="Bangalore, India"
                        work="Working on the Illustrator Web team of Adobe. Working majorly on the development of various features of Illustrator on Web like zoom-pan,
                        their associated feature flags development in C++, TypeScript and WASM and testing and automation tests development using Selenium framework of Python."
                    />
                    <Details

                        position="Product Intern" company="Adobe"
                        companyLink="https://www.adobe.com/in/"
                        time="2023-2023" address="Bangalore, India"
                        work="Developed an unique command-line tool, named Flaky-Network Simulator for simulating poor networking conditions
                        like packet drop, jitter, throttle etc. for Windows and iOS. Developed the automation scripts for the flaky-network simulator for the Windows and iOS.
                        Worked mainly on Python and C++ for development and Jenkins for automation purposes."
                    />
                    <Details

                        position="Product Intern" company="Adobe"
                        companyLink="https://www.adobe.com/in/"
                        time="2022-2022" address="Remote"
                        work="Worked as a product development intern on SDK-testing team of Adobe.
                        Developed stored procedures and SQL queries for stability dashboard.
                        Automated Jenkins Pipeline by developing python script.
                        Worked on Splunk and Metabase for dashboard visualization."
                    />
                    <Details

                        position="Pentesting Intern" company="Virtually Testing Foundation"
                        companyLink="https://vt.foundation/"
                        time="2021-2021" address="Remote"
                        work="Worked on finding vulnerabilities on the websites of VTF.
                        Worked on pentest tools like Burpsuite, OWASP ZAP, Wireshark etc.
                        Worked on publishing pentesting reports on compliant with different security compliances based on the security findings."
                    />
                </ul>
            </div>
        </div>
    )
}

export default Experience