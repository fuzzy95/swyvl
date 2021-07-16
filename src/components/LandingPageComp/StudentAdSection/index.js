const StudentAdSection = () => {
  return (
    <>
      <div className='h-screen w-full bg-blue text-white'>
        <div className='container mx-auto lg:px-24 px-8 h-full md:pb-0 pb-16'>
          <div className='flex md:flex-row flex-col justify-between items-center w-full h-full'>
            <div className='md:w-1/2 w-full flex items-start'>
              <img placeholder='text' src='' alt='greenImage' />
            </div>
            <div className='md:w-1/2 w-full flex flex-col space-y-16'>
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
