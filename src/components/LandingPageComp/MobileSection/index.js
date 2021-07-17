import mobile from '../../../assets/images/mobile.svg';

const MobileSection = () => {
  return (
    <>
      <div className='container h-screen lg:px-24 px-6 mx-auto relative md:mt-40 mt-0'>
        <div className='absolute mobileShadow lg:w-auto w-10/12'>
          <img className='mobileImage' src={mobile} alt='' />
        </div>
        <div className='flex justify-center items-center h-full w-full lg:pt-72 sm:pt-60 pt-40'>
          <h1 className='font-gotham font-bold  xl:text-5.25xl md:text-6xl sm:text-5xl text-3xl text-center sm:leading-25 leading-normal'>
            Build your community <br /> & learn
          </h1>
        </div>
      </div>
    </>
  );
};

export default MobileSection;
