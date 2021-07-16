import ContactTeacherAdSection from '../components/LandingPageComp/ContactTeacherAdSection';
import HeroSection from '../components/LandingPageComp/HeroSection';
import MobileSection from '../components/LandingPageComp/MobileSection';
import StudentAdSection from '../components/LandingPageComp/StudentAdSection';
import LandingLayout from '../layouts/LandingLayout';

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <HeroSection />
        <ContactTeacherAdSection />
        <StudentAdSection />
        <MobileSection />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
