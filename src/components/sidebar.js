import '../screens/community/community.css';
import {BsBox} from 'react-icons/bs'
import { Link } from 'react-router-dom';

export default function Sidebar(){
    return(
        <div>
            <div className='sidebar'>
                <div className='menu'>
                    <Link to='/community' className='menuItem selected'>
                        <BsBox className='ico' color='white'/>
                        <p className='txt'>Community Feed</p>
                    </Link>
                    <Link to='/community/posts' className='menuItem'>
                        <BsBox className='ico' color='white'/>
                        <p className='txt'>Posts</p>
                    </Link>
                    <Link to='/community/directMessage' className='menuItem'>
                        <BsBox className='ico' color='white'/>
                        <p className='txt'>Direct Message</p>
                    </Link>
                    <Link to='/community/groups' className='menuItem'>
                        <BsBox className='ico' color='white'/>
                        <p className='txt'>Groups</p>
                    </Link>
                    
                </div>
            </div>
            <div className='asidebar'>
                <div className='menu'>
                    <Link to='/community' className='menuItem'>
                        <BsBox className='ico' color='white' size={14}/>
                    </Link>
                    <Link to='/community/posts' className='menuItem'>
                        <BsBox className='ico' color='white' size={14}/>
                    </Link>
                    <Link to='/community/directMessage' className='menuItem'>
                        <BsBox className='ico' color='white' size={14}/>
                    </Link>
                    <Link to='/community/groups' className='menuItem'>
                        <BsBox className='ico' color='white' size={14}/>
                    </Link>
                    
                </div>
            </div>
        </div>
    )
}