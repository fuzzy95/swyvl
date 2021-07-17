import SubscribeField from '../../../utils/SubscribeField';

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
          <SubscribeField />
        </div>
      </div>
    </>
  );
};

export default MailSection;
