import './landingPage.css';
import blur1 from '../../assets/polygon3.png'
import blur2 from '../../assets/polygon4.png'


function ExtraSection() {
    return (
      <div className='extraDetails'>
        <img src={blur1} className="blur3" />
        <img src={blur2} className="blur4" />
        <div className='section'>
            <div className='head'>
              Designed for all usecases
            </div>
            <div className='sub'>
              From open discussion to gated content. Create different groups for all kind of use case, like coaching, mentoring, courses, forums, live classes etc
            </div>
        </div>
        <div className='section'>
            <div className='head'>
              Your Community. Your Branding.
            </div>
            <div className='sub'>
              Design your community to match your branding. Make it feel like your own product with complete customization & integration, including mobile app
            </div>
        </div>
      </div>
    );
  }
  
  export default ExtraSection;
  