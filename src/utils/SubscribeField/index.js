const SubscribeField = () => {
  return (
    <>
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
    </>
  );
};

export default SubscribeField;
