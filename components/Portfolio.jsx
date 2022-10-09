import React from 'react';
import IgImg1 from '../public/Waterfall.jpg';
import IgImg2 from '../public/Green.jpg';
import IgImg3 from '../public/Gas.jpg';
import IgImg4 from '../public/Clos.jpg';
import IgImg5 from '../public/Jules.jpg';;
import InstagramImg from './InstagramImg';

const Portfolio = () => {
  return (
    <div className='max-w-[1240px] mx-auto py-16 text-center'>
      <h1 className='font-bold text-2xl p-4'>My Photography Side</h1>
      <div className='grid grid-rows-none md:grid-cols-5 p-3 gap-3'>
        <div className='w-full h-full col-span-2 md:col-span-3 row-span-2'>
          <InstagramImg socialImg={IgImg1} 
            alt='/'
            layout='responsive'
            width='677'
            height='451'
          />
        </div>
        <div className='w-full h-full'>
          <InstagramImg socialImg={IgImg2}
            alt='/'
            width='215'
            height='220'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <InstagramImg socialImg={IgImg3}
            alt='/'
            width='215'
            height='220'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <InstagramImg socialImg={IgImg4}
            alt='/'
            width='215'
            height='220'
            layout='responsive'
            objectFit='cover'
          />
        </div>
        <div className='w-full h-full'>
          <InstagramImg socialImg={IgImg5}
            alt='/'
            width='215'
            height='220'
            layout='responsive'
            objectFit='cover'
          />
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
