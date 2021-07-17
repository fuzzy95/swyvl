import SubscribeField from '../../../utils/SubscribeField';
import { Tween } from 'react-gsap';

const HeroSection = () => {
  return (
    <>
      <Tween>
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
                htmlFor='email'
                className='leading-7 text-lg text-black font-bold text-center'
              >
                <h3>Get the latest news</h3>
              </label>
              <SubscribeField />
            </div>
          </div>
        </div>
      </Tween>
    </>
  );
};

export default HeroSection;
