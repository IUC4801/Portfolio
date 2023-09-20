import AnimatedText from '@/components/AnimatedText'
import Layout from '@/components/Layout'
import Head from 'next/head'
import Image from 'next/image'
// @ts-ignore
import profilePic from "../../public/images/profile/profile-pic-2.png"
import React, { useEffect, useRef } from 'react'
import { useInView, useMotionValue, useSpring } from 'framer-motion'
import Skills from '@/components/Skills'
import Experience from '@/components/Experience'
import Education from '@/components/Education'
import Certificates from '@/components/Certificates'
import Achievements from '@/components/Achievements'
import TransitionEffect from '@/components/TransitionEffect'


const AnimatedNumbers = ({ value }) => {
    const ref = useRef(null);

    const motionValue = useMotionValue(0);
    const springValue = useSpring(motionValue, { duration: 3000 })
    const isInView = useInView(ref, { once: true });

    useEffect(() => {
        if (isInView) {
            motionValue.set(value);
        }

    }, [isInView, value, motionValue])

    useEffect(() => {
        springValue.on("change", (latest) => {
            if (ref.current && latest.toFixed(0) <= value) {
                ref.current.textContent = latest.toFixed(0);
            }
        })
    }, [springValue, value])

    return <span ref={ref}></span>
}


const achievements = () => {
    return (
        <>
            <Head>
                <title>Achievements Page</title>
                <meta name='description' content='Any description' />
            </Head>
            <TransitionEffect />
            <main className='flex w-full flex-col items-center justify-center'>
                <Layout className='pt-16'>
                    <div className='grid w-full grid-cols-8 gap-16'>
                        <div className='col-span-3 flex flex-col items-start justify-start'>
                        </div>

                    </div>
                    <Certificates />
                    <Achievements />
                </Layout>
            </main>
        </>
    )
}

export default achievements