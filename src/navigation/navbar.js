import './navigation.css';
import ico from '../assets/ico.png'
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
        <img src={ico} className='mainicon'/>
        <div className='navigation'>
            <a href='/' className='name'>
                Communities
            </a>
            <a href='/' className='name'>
                Faq's
            </a>
            <a href='/' className='name'>
                Login
            </a>
            <Link to='/join' className='cta'>
                Try for Free
            </Link>
        </div>
    </div>
  );
}

export default Navbar;
