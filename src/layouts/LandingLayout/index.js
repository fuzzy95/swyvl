import { useEffect, useState } from 'react';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LandingLayout = ({ children }) => {
  const [firstScreen, setFirstScreen] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setFirstScreen(false);
    }, 5000);
  }, []);

  return (
    <>
      {/* {firstScreen ? (
        <div
          style={{ zIndex: '9999', overflow: 'hidden' }}
          className='fixed h-screen w-screen bg-darlBlue overflow-hidden'
        >
          <img src='' alt='' />
        </div>
      ) : (
        <> </>
      )} */}
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
