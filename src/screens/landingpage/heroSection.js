import './landingPage.css';
import blur1 from '../../assets/Ellipse 1.png'
import blur2 from '../../assets/Ellipse 2.png'
import {Link} from 'react-router-dom'

function HeroSection() {
  return (
    <div className='heroSection'>
        <img src={blur1} className="blur1"/>
        <img src={blur2} className="blur2"/>
        <div className='section'>
            <p className='head'>
                One platform for all your community needs
            </p>
            <p className='subHead'>
                Create or Join Communities of your choice
            </p>
            <Link to='/join' className='cta'>
                Get Started
            </Link>
        </div>
    </div>
  );
}

export default HeroSection;
