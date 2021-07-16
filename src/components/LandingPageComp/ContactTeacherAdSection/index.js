const ContactTeacherAdSection = () => {
  return (
    <>
      <div className='h-screen w-full bg-green'>
        <div className='container mx-auto lg:px-24 px-8 h-full md:pt-0 pt-16'>
          <div className='flex md:flex-row flex-col justify-between items-center w-full h-full'>
            <div className='md:w-1/2 w-full flex flex-col space-y-16'>
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
            <div className='md:w-1/2 w-full flex md:justify-end justify-center items-end'>
              <img placeholder='text' src='' alt='text' />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ContactTeacherAdSection;
