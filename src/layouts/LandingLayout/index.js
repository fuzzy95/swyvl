import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LandingLayout = ({ children }) => {
  return (
    <>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
