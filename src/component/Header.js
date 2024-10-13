import React from 'react'
import {SparklesIcon,ArrowLeftIcon } from '@heroicons/react/outline';
import { Container } from 'postcss';


function Header() {
  return (
    <div className='container mx-auto space-y-[34px]'>
    <div className='w-full h-[53px] border-b border-b-Dark7 font-sans flex items-center justify-between px-4'>
      <span className='w-[52px] h-[23px] font-sans font-bold'>Home</span>
      <div>
       <SparklesIcon className='w-[23px] h-[21px] text-blue-500'> </SparklesIcon>
      </div>
      </div>
    <div className='border-b border-b-Dark7 w-[598px] h-[53px] font-sans flex items-center'>
      <div>
      <ArrowLeftIcon className='w-[59px] h-[24px] text-blue-500'></ArrowLeftIcon>

      </div>
      <span className='font-sans font-bold w-[52px] h-[23px] mb-5'>Name
     <span className='text-Dark5 font-sans text-xs h-[51px] w-[16px]'> 9tweets </span>
      </span>
      </div>
    </div>
  )
}

export default Header;