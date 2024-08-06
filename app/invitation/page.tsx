import Image from 'next/image';
import React from 'react';
import { Roboto } from 'next/font/google';

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });

const page = () => {
  return (
    <>
        <div className="flex min-h-40 flex-col items-center justify-center bg-cover bg-center pt-5" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="flex justify-center items-center">
                <Image 
                src='/hero-2.png'
                alt='bg-2.png'
                width={500}
                height={500}
                />
            </div>
        </div>
        <hr className='border-1 mx-5 border-gray-400 ' />
        <div className="flex min-h-80 flex-col items-center justify-center bg-cover bg-center pt-5" style={{ backgroundImage: "url('/bg.png')" }}>
            <div className="flex justify-center items-center">
                <Image 
                src='/hero-3.png'
                alt='bg-2.png'
                width={500}
                height={500}
                />
            </div>
            <div className='w-full'>
              <p className='relative text-[10px] md:text-sm bottom-0 text-gray-400 text-center w-full'>Made with Love ❤️</p>
              <p className='relative text-[10px] md:text-sm bottom-0 text-gray-400 text-center w-full mb-3'>
                ©2023 Neo Industries, Inc. All rights reserved.
              </p>
            </div>
        </div>
      
    </>
  );
}

export default page;
