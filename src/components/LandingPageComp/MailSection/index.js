const MailSection = () => {
  return (
    <>
      <div className='container lg:px-24 px-6 mx-auto relative lg:mt-40 -mt-30 mb-40 flex flex-col space-y-30'>
        <div>
          <h1 className='font-gotham opacity-20 lg:font-bold font-medium lg:text-5xl sm:text-5xl text-3xl text-center sm:leading-20 leading-normal pt-36'>
            Build your community <br /> & learn
          </h1>
        </div>
        <div className='relative mb-4 flex flex-col lg:space-y-24 space-y-16 justify-center items-center w-full'>
          <label
            htmlFor='email'
            className='leading-7 lg:text-5xl text-3xl text-black font-bold text-center'
          >
            <h3>Get the latest news</h3>
          </label>
          <div className='md:w-160 w-full flex items-center relative'>
            <input
              style={{ outline: 'none' }}
              type='email'
              id='email'
              placeholder='email@example.com'
              name='email'
              className='w-full bg-white rounded-full border-2 border-indigo focus:border-indig text-base md:h-16 h-12 pl-6 lg:pr-56 pr-32 leading-8 transition-colors duration-200 ease-in-out'
            />
            <button
              style={{ outline: 'none', right: '0%' }}
              className='capitalize rounded-full bg-indigo md:h-16 h-12 sm:w-52 w-30 text-white font-bold absolute lg:text-base text-sm'
            >
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default MailSection;
