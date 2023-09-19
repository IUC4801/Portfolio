import React from 'react'
import { motion } from "framer-motion"
import { Scada } from 'next/font/google'

const Skill = ({ name, x, y }) => {
    return (
        <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                py-3 px-6 shadow-dark cursor-pointer absolute  dark:text-dark dark:bg-light'
            whileHover={{ scale: 1.05 }}
            initial={{ x: 0, y: 0 }}
            whileInView={{ x: x, y: y, transition: { duration: 1.5 } }}
            viewport={{ once: true }}
        >
            {name}
        </motion.div>

    )
}

const Certifications = () => {
    return (
        <>
            <h2 className='font-bold text-7xl mt-55 w-full text-center dark:text-light'>Certifications</h2>
            <div className='w-full h-screen relative flex items-center justify-center rounded-full bg-circularLight dark:bg-circularDark'>
                <motion.div className='flex items-center justify-center rounded-full font-semibold bg-dark text-light
                p-8 shadow-dark cursor-pointer dark:text-dark dark:bg-light'
                    whileHover={{ scale: 1.05 }}
                >
                    Certificates
                </motion.div>

                <Skill name="Burpsuite" x="-25vw" y="2vw" />
                <Skill name="Firewall" x="-5vw" y="-10vw" />
                <Skill name="Splunk" x="20vw" y="6vw" />
                <Skill name="Snort" x="0vw" y="12vw" />
                <Skill name="Python" x="-20vw" y="-15vw" />
                <Skill name="Java" x="15vw" y="-12vw" />
                <Skill name="ReactJS" x="32vw" y="-5vw" />
                <Skill name="NextJS" x="0vw" y="-20vw" />
                <Skill name="NodeJS" x="-25vw" y="18vw" />
                <Skill name="Solidity" x="18vw" y="18vw" />
            </div>
        </>
    )
}

export default Certifications