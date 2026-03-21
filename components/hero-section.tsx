"use client";
import Balancer from 'react-wrap-balancer';
import { motion, } from 'motion/react';
import { ArrowRightIcon } from '@phosphor-icons/react/dist/ssr';
import HorizonGlow from './glow';

export default function HeroSection() {
  return (
    <section className="font-sans flex flex-col flex-1 z-30 h-screen pt-24">
      <div
        className="w-full flex-[0.5] max-md:flex-col flex justify-between space-y-3.5 px-4 lg:pl-8 max-md:justify-center max-w-[1540px] mx-auto"
      >
        <motion.p
          initial={{ opacity: 0, y: 50, filter: "blur(12px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 1, ease: [0.22, 1, 0.36, 1], delay: 0.1 }}
          className=" flex flex-col gap-10"
        >
          <div className='tracking-tighter text-5xl md:text-6xl xl:text-7xl 2xl:text-8xl max-md:text-center pt-10'>
            <Balancer>
              <span className='whitespace-nowrap'>
                Design. Development.
              </span>
              <br />
              <span className='text-foreground/40'>Mastership.</span>
            </Balancer>
          </div>

          <motion.button
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1], delay: 0.5 }}
            className="text-lg w-fit pl-2 cursor-pointer hover:text-foreground transition-colors inline-flex justify-center items-center gap-2"
          >
            <span> Book a call </span>
            <ArrowRightIcon size={17} />
          </motion.button>
        </motion.p>

        <motion.p
          initial={{ opacity: 0, y: 40, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1], delay: 0.3 }}
          className="max-md:text-center w-full xl:w-1/3 mt-auto text-lg mb-12"
        >
          We design and develop exceptional digital products & services, eCommerce, and brand communication solutions.
        </motion.p>
      </div>
      <HorizonGlow
        speed={0.5}
        backgroundColor={'#000000'}
        frequency={1}
        amplitude={0.2}
        intensity={0.1}
        rotation={0}
        translateX={0}
        translateY={-0.55}
      />
    </section >
  );
}
