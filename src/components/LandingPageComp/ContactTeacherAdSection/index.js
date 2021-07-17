import LandingImage from '../../../assets/images/LANDING-IMG__1.svg';

const ContactTeacherAdSection = () => {
  return (
    <>
      <div className='xl:h-screen h-auto w-full bg-green'>
        <div className='container mx-auto lg:px-24 px-6 h-full xl:pt-0 pt-16'>
          <div className='flex md:flex-row flex-col justify-between items-end w-full h-full'>
            <div className='md:w-1/2 h-full w-full flex justify-center flex-col space-y-16 text-darlBlue xl:pb-0 md:pb-20 pb-0'>
              <div>
                <h1 className='font-bold lg:text-3.25xl text-5xl leading-16'>
                  Put in contact <br className='md:flex hidden' /> with teachers
                </h1>
              </div>
              <div className='font-normal lg:text-lg text-base flex flex-col space-y-2'>
                <p>Find the teacher for your chosen topic:</p>
                <p>Languages</p>
                <p>Topic 2</p>
                <p>Topic 3</p>
                <p>Topic 4</p>
              </div>
            </div>
            <div className='md:w-1/2 w-full flex md:justify-end justify-center items-end md:mt-0 mt-20'>
              <img
                className='md:w-11/12 w-full'
                src={LandingImage}
                alt='blueImage'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTeacherAdSection;
