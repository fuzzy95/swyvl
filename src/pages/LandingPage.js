import ContactTeacherAdSection from '../components/LandingPageComp/ContactTeacherAdSection';
import HeroSection from '../components/LandingPageComp/HeroSection';
import StudentAdSection from '../components/LandingPageComp/StudentAdSection';
import LandingLayout from '../layouts/LandingLayout';

const LandingPage = () => {
  return (
    <>
      <LandingLayout>
        <HeroSection />
        <ContactTeacherAdSection />
        <StudentAdSection />
      </LandingLayout>
    </>
  );
};

export default LandingPage;
