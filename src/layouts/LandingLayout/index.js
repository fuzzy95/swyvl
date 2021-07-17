import { motion } from 'framer-motion';
import whiteLogo from '../../assets/images/whiteText.svg';
import Footer from '../../components/Footer';
import Navbar from '../../components/Navbar';

const LandingLayout = ({ children }) => {
  // const [firstScreen, setFirstScreen] = useState(true);

  // useEffect(() => {
  //   setTimeout(() => {
  //     setFirstScreen(false);
  //   }, 3000);
  // }, []);

  return (
    <>
      <motion.div
        style={{ zIndex: '9999', overflow: 'hidden' }}
        initial={{ opacity: 1 }}
        animate={{ opacity: 0 }}
        transition={{
          delay: 7,
        }}
        className='fixed h-screen w-screen bg-darlBlue overflow-hidden flex justify-center items-center'
      >
        <motion.div
          initial={{ x: 140 }}
          animate={{
            x: -10,
          }}
          transition={{
            delay: 1,
            default: { duration: 3 },
          }}
          className='flex justify-center items-center'
        >
          <img className='w-14' src='/SYMBOL.svg' alt='' />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{
            delay: 7,
            default: { duration: 6 },
          }}
          className='flex justify-center items-center'
        >
          <img className='w-72' src={whiteLogo} alt='' />
        </motion.div>
      </motion.div>
      <Navbar />
      {children}
      <Footer />
    </>
  );
};

export default LandingLayout;
