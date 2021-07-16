import React from 'react';

const HeroSection = () => {
  return (
    <>
      <div className='container mx-auto lg:px-24 px-8 h-screen w-full -mt-20'>
        <div className='flex flex-col justify-center items-center w-full h-full space-y-10'>
          <div>
            <h1 className='font-gotham lg:font-bold font-medium lg:text-5.25xl sm:text-6xl text-3xl text-center sm:leading-25 leading-normal'>
              Meet, Netwok & <br /> Swap Skills
            </h1>
          </div>
          <div className='flex justify-center items-center lg:w-1/2 md:w-2/3 w-full'>
            <p className='sm:text-lg text-base text-center font-light leading-loose'>
              A social platform where users can connect with like minded
              individuals to trade their skills and time. Its tailored for
              professionals in the beauty, fitness, education and creative
              industries.
            </p>
          </div>
          <div className='relative mb-4 flex flex-col space-y-6 justify-center items-center w-full'>
            <label
              for='email'
              className='leading-7 text-lg text-black font-bold text-center'
            >
              Get the latest news
            </label>
            <div className='md:w-160 w-full flex items-center relative'>
              <input
                style={{ outline: 'none' }}
                type='text'
                id='text'
                name='text'
                className='w-full bg-white rounded-full border-2 border-indigo focus:border-indig text-base h-16 pl-3 pr-56 leading-8 transition-colors duration-200 ease-in-out'
              />
              <button
                style={{ outline: 'none', right: '0%' }}
                className='capitalize rounded-full bg-indigo h-16 sm:w-52 w-40 text-white font-bold absolute'
              >
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default HeroSection;
