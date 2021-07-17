import logo from '../../assets/images/LOGOSYMBOL.svg';
import { Icon } from '@iconify/react';
import instagramOutlined from '@iconify-icons/ant-design/instagram-outlined';
import twitterOutlined from '@iconify-icons/ant-design/twitter-outlined';
import bxlFacebook from '@iconify-icons/bx/bxl-facebook';

const Footer = () => {
  return (
    <>
      <div className='md:h-80 h-auto bg-darlBlue text-white'>
        <div className='container lg:px-10 px-6 mx-auto md:pt-20 pt-6 md:pb-0 pb-10'>
          <div className='h-full w-full flex md:flex-row flex-col justify-between items-start md:space-x-0 space-x-6 md:space-y-0 space-y-10'>
            <div className='xl:w-1/2 md:w-1/3 w-full'>
              <img src={logo} alt='' />
            </div>
            <div className='xl:w-1/2 md:w-2/3 w-full flex md:flex-row flex-col justify-start lg:space-x-60 md:space-x-20 space-x-0 md:space-y-0 space-y-10 items-start'>
              <div className='flex flex-col space-y-10'>
                <h1 className='lg:text-3xl text-2xl'>Contact us at:</h1>
                <div className='pl-10 lg:text-xl text-base'>
                  <ul className='flex flex-col space-y-10'>
                    <li>
                      <span>info@swyvl.co.uk</span>
                    </li>
                    <li>
                      <span>+44 0202 123412</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className='flex flex-col space-y-3'>
                <h1 className='lg:text-3xl text-2xl'>Follow us on:</h1>
                <div className='pl-10 flex justify-center items-center space-x-8 lg:text-5xl text-2xl'>
                  <span>
                    <Icon icon={instagramOutlined} />
                  </span>
                  <span>
                    <Icon icon={twitterOutlined} />
                  </span>
                  <span>
                    <Icon icon={bxlFacebook} />
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
