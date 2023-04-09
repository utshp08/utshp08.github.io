import React from 'react';
import { AppProps } from 'next/app';

const Heading = ({children}: any) => {
    return (
        <h1 className='relative mb-10 xl:text-4xl lg:text-4xl md:text-4xl sm:text-2xl xs:text-2xl before:content-[""] before:block 
            before:absolute before:top-[170%] before:left-[25%] before:w-[50%] before:h-[5px] before:bg-yellow-500 '>
            {children}
        </h1>
    )
}

export default Heading;