import BannerSection from './banner';
import ExtraSection from './extraDetails';
import HeroSection from './heroSection';
import Faq from './faq';
import Navbar from '../../navigation/navbar'
import './landingPage.css';
import Communities from './communitites';
import Momenter from './momenter';

function LandingPage() {
    return (
      <div className='landing'>
        <Navbar />
        <HeroSection />
        <BannerSection />
        <ExtraSection />
        <Communities />
        <Faq />
        <Momenter />
      </div>
    );
  }
  
  export default LandingPage;
  