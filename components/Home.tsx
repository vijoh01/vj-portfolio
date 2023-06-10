"use client"
import Image from 'next/image'
import viktor from '@/imgs/jagfake.png'
import bgPortrait from '@/imgs/portrait-background.svg'
import { BiDownArrowAlt } from 'react-icons/bi'
import React, { useEffect } from 'react';
import { scrollToPosition } from '@/hooks/utilities'

export default function Home() {
  useEffect(() => {

    function animateOnScroll() {
      const elements = document.querySelectorAll('[data-scroll]');
      elements.forEach((element) => {
        if (isElementInViewport(element)) {
          let val = element.getAttribute("data-scroll") !== "true" ? element.getAttribute("data-scroll") : null;
          if (val !== null) {
            element.classList.add(`opacity-100`);
            element.classList.add(`animate-fadein_${val}`);
          }
        }
      });
    }

    function isElementInViewport(element: any) {
      const rect = element.getBoundingClientRect();
      return (
        rect.top >= 0 &&
        rect.left >= 0 &&
        rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
        rect.right <= (window.innerWidth || document.documentElement.clientWidth)
      );
    }
    window.addEventListener('scroll', animateOnScroll);
  })
  return (
    <div className='flex flex-col min-h-screen justify-between'>

      <div className='flex items-center h-[95%] w-full md:justify-center'>
        <div className='flex flex-col-reverse justify-between w-full mt-[2rem] md:flex-row md:w-[50rem] lg:w-[60rem]'>
          <div className='border-t-2 md:border-none md:absolute animate-fadein_left text-center md:text-start flex flex-col self-center w-[24rem] md:w-[26rem] lg:w-[33rem] z-10'>
            
            <p className='text-primary-100 dark:text-primary-50 font-bold text-4xl md:text-5xl lg:text-6xl mt-4'>Viktor Johansson</p>

            <p className='text-primary-200 dark:text-secondary-200 animate-color text-2xl md:text-3xl lg:text-4xl'>Fullstack Webdeveloper</p>
            <button className='text-primary-200 border dark:text-secondary-50 pt-1 pb-1 pl-8 pr-8 mt-5 rounded-md bg-primary-300 dark:bg-secondary-300 font-bold text-2xl md:w-[12rem]'>Contact</button>

          </div>

          <div className="animate-shadow min-h-[22.6rem] max-h-[22.6rem] md:max-h-[22.6rem] lg:max-h-[22.6rem] md:min-h-[25rem] md:w-[28rem] lg:min-h-[31.5rem] lg:w-[34rem] md:translate-x-[22rem] lg:translate-x-[27.5rem] flex justify-center items-center overflow-hidden">

            <svg
              className='translate-x-48 md:translate-x-[14rem] lg:translate-x-[17.5rem] rotate-6 min-w-[13rem] w-[13rem] animate-color scale-[2] md:scale-[2.5] lg:scale-[3] translate-y-[4.7rem]'
              width="200"
              height="200"
            >
              <defs>
                <linearGradient id="gradient" gradientTransform="rotate(0deg)">
                  <stop offset="0%" stopColor="#95665b" />
                  <stop offset="100%" stopColor="#C9ADA7" />
                </linearGradient>
              </defs>
              <path fill="url(#gradient)" d="M52,22.09a29.27,29.27,0,0,1,8.69-4.59c7.26-2.4,15-2.25,22.57-2.09,21,.43,43.79,1.56,59.95,16.13,8,7.25,13.57,17.16,19,26.87Q174,79.66,185.77,100.93c2.36,4.25,4.76,8.64,5.59,13.53,1.18,7-1.05,14.2-4.83,19.94s-9,10.19-14.42,14.12c-18.13,13.23-39.38,21.9-61.2,22.72S66.73,164.62,50.29,149c-10.18-9.66-17.83-22-25.08-34.42-6.74-11.47-13.44-23.73-14.09-37.3-.68-14.66,6.08-29,16-39A75.74,75.74,0,0,1,52,22.09Z" />
            </svg>
            <Image className='-translate-x-[6.5rem] z-10 filter grayscale min-w-[24rem] w-[24rem] md:min-w-[28rem] lg:min-w-[35rem] lg:scale-110 md:translate-y-[6.5rem] lg:translate-y-[10rem] translate-y-28' src={viktor} alt='dasd'></Image>
          </div>
        </div>
      </div>
      <button onClick={() => scrollToPosition(500)} className='animate-fadein_bottom rounded-full p-3 mb-5 mt-5 bg-primary-100 dark:bg-secondary-100 text-primary-50 dark:text-primary-100 self-center'>
        <BiDownArrowAlt className='rounded-full'></BiDownArrowAlt>
      </button>
    </div>
  )
}