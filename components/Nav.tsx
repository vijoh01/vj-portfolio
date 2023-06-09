"use client"
import Image from 'next/image'
import elon from '@/imgs/elon.jpg'
import Line from '@/assets/Line'
import { BiNotepad, BiHome, BiUser, BiMenu } from 'react-icons/bi'
import { useEffect } from 'react'
import {scrollToPosition} from '@/hooks/utilities'

import { useState } from 'react';
import Link from 'next/link'

export default function Nav() {
  const [showDiv, setShowDiv] = useState(false);
  
  function test() {
    return (
      <div className="animate-fadein_left overflow-hidden min-h-screen mt-10 w-40 fixed z-1 bg-primary-100 dark:bg-secondary-100 text-primary-50 dark:text-secondary-50 flex flex-col justify-between">
      <div className="text-3xl flex flex-col mb-5 font-bold">
      
        <button onClick={() => {scrollToPosition(0); setShowDiv(false)}} className="flex items-center ml-5 mt-5">
          <BiHome></BiHome> <p className="text-sm ml-2">Hem</p>
        </button>
       
        <button onClick={() => {scrollToPosition(500); setShowDiv(false)}} className="flex items-center ml-5 mt-3">
          <BiUser></BiUser><p className="text-sm ml-2">Om mig</p>
        </button>
        <button onClick={() => {scrollToPosition(1000); setShowDiv(false)}} className="flex  items-center ml-5 mt-3 mb-5">
          <BiNotepad></BiNotepad><p className="text-sm ml-2">Projekt</p>
        </button>
        <Line></Line>
      </div>
     
      <p>hej</p>
    </div>
    );
  }

  useEffect(() => {
    const handleResize = () => {
      if (window.matchMedia('(min-width: 1390px)').matches) {
        setShowDiv(false);
      }
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handleButtonClick = (e : any) => {
    setShowDiv(showDiv ? false : true);
  };

  return (
    <nav className={"h-12 lg:min-h-screen min-w-10 w-screen lg:min-w-40 lg:w-40 fixed z-40 bg-primary-100 dark:bg-secondary-100 text-primary-50 dark:text-secondary-50 flex flex-col justify-between"}>
      <div className={"text-3xl flex lg:flex-col mb-5 font-bold"} >
        <button onClick={handleButtonClick} className="max-[1390px]:visible lg:hidden w-full flex items-center max-[1390px]:mt-2 max-[1390px]:ml-3 lg:justify-center lg:mt-5 text-3xl">
          <BiMenu className=""></BiMenu>
        </button>
        <button onClick={() => scrollToPosition(0)} className="flex visible max-[1390px]:hidden items-center ml-5 mt-5">
          <BiHome></BiHome> <p className="text-sm ml-2">Hem</p>
        </button>
        <button onClick={() => scrollToPosition(500)} className="scroll-smooth flex visible max-[1390px]:hidden items-center ml-5 mt-3">
          <BiUser></BiUser><p className="text-sm ml-2">Om mig</p>
        </button>
        <button onClick={() => scrollToPosition(1000)} className="flex visible max-[1390px]:hidden items-center ml-5 mt-3 mb-5">
          <BiNotepad></BiNotepad><p className="text-sm ml-2">Projekt</p>
        </button>
        <Line></Line>
      </div>
      {showDiv && test()}
      <p className='flex visible max-[1023px]:hidden'>hej</p>
    </nav>
  );
}