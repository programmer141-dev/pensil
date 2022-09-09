import BannerSection from './banner';
import ExtraSection from './extraDetails';
import HeroSection from './heroSection';
import Navbar from '../../navigation/navbar'
import './landingPage.css';

function LandingPage() {
    return (
      <div className='landing'>
        <Navbar />
        <HeroSection />
        <BannerSection />
        <ExtraSection />
      </div>
    );
  }
  
  export default LandingPage;
  