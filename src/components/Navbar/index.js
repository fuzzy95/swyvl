import logo from '../../assets/images/logo-swyvl.svg';

const Navbar = () => {
  return (
    <>
      <div className='container mx-auto lg:px-24 px-4 py-8'>
        <div className='flex w-full justify-start'>
          <img className='lg:w-36 w-32' src={logo} alt='' />
        </div>
      </div>
    </>
  );
};

export default Navbar;
