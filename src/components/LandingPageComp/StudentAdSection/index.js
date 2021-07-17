import LandingImage from '../../../assets/images/LANDING-IMG__2.svg';

const StudentAdSection = () => {
  return (
    <>
      <div className='xl:h-screen h-auto w-full bg-blue text-darlBlue'>
        <div className='container mx-auto lg:px-24 px-6 h-full xl:pb-0 pb-16'>
          <div className='flex md:flex-row flex-col justify-between items-start w-full h-full'>
            <div className='md:w-1/2 w-full flex items-start'>
              <img
                className='md:w-11/12 w-full'
                src={LandingImage}
                alt='greenImage'
              />
            </div>
            <div className='md:w-1/2 h-full w-full flex justify-center flex-col xl:space-y-16 space-y-10  xl:pt-0 md:pt-20 pt-0 md:mt-0 mt-20'>
              <div>
                <h1 className='font-bold lg:text-3.25xl text-5xl leading-16'>
                  Start to learn and <br className='lg:flex hidden' /> meet
                  people
                </h1>
              </div>
              <div className='font-normal lg:text-lg text-base flex flex-col space-y-8'>
                <p className='leading-loose'>
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                  Temporibus, ab nisi repudiandae, mollitia exercitationem, sint
                  dolor culpa quaerat quas accusantium totam.
                </p>
                <p className='font-bold'>
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Iusto, rerum.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StudentAdSection;
