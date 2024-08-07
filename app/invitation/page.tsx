import Image from 'next/image';
import React from 'react';
import { Roboto, Corinthia } from 'next/font/google';

const roboto = Roboto({ weight: ["400", "700"], subsets: ["latin"] });
const corinthia = Corinthia({ weight: ["400", "700"], subsets: ["latin"] });

const page = () => {
  return (
    <>
        <div className="flex min-h-40 flex-col items-center justify-center bg-cover bg-center pt-5" >
            <div className="flex justify-center items-center">
                <Image 
                src='/hero-5.png'
                alt='bg-2.png'
                width={500}
                height={500}
                />
            </div>
        </div>
        <hr className='border-1 mx-5 border-gray-400 ' />
        <div className="flex min-h-80 flex-col items-center justify-center bg-cover bg-center pt-5" >
            <div className="flex justify-center items-center">
                <Image 
                src='/hero-3.png'
                alt='bg-2.png'
                width={500}
                height={500}
                />
            </div>
            <div className='w-full  mx-auto mb-10'> 
            <hr className='border-1 mb-10 mx-5 border-gray-400 ' />
              <div className={corinthia.className}>
                <h2 className='text-6xl text-center mb-10'>Lokasi</h2>
              </div>
              <iframe 
              src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d3957.837295337592!2d108.21628187499971!3d-7.259350792747431!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zN8KwMTUnMzMuNyJTIDEwOMKwMTMnMDcuOSJF!5e0!3m2!1sid!2sid!4v1723012108200!5m2!1sid!2sid" 
              width="300" 
              height="450" 
              className='mx-auto'
              allowFullScreen={true} 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade">
              </iframe>
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
