'use client'

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
import Image from 'next/image';
import { useEffect, useRef, useState, FC } from 'react';
import { Corinthia, Roboto } from 'next/font/google';
import Link from 'next/link';
// ..

const corinthia = Corinthia({ weight: '400', preload: false });
const roboto = Roboto({ weight: '400', preload: false });


const Home: FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audio = useRef<HTMLAudioElement | undefined>(
    typeof Audio !== "undefined" ? new Audio("audio/music.mp3") : undefined
  );
  useEffect(() => {
    audio.current?.loop;
  });

  const handleMusic = () => {
    if (isPlaying) {
      audio.current?.pause();
    } else {
      audio.current?.play();
    }
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="flex min-h-screen flex-col items-center justify-between py-5" style={{ backgroundImage: "url('/bg.png')" }}>
      <div className={corinthia.className}>
        <h1 className="text-5xl mt-9 font-normal tracking-wide">Tasyakuran 7 Bulanan</h1>
      </div>
      <div className="mt-2">
        <Image 
          src='/hero.png'
          alt="Tasyakuran 7 Bulanan"
          width={600}
          height={400}
          className="mx-auto" 
        />
      </div>
      <Link href="/invitation">
        <div className={roboto.className}>
          <button onClick={handleMusic} className="bg-[#DF7CA7] text-white py-2 px-6 mb-6 rounded-lg">
            Buka Undangan
          </button>
        </div>
      </Link>
    </div>
  );
}

export default Home;
