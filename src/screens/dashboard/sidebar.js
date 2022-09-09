import './dcommunity.css';

import {RiGroupLine} from 'react-icons/ri';
import {FiMessageCircle, FiBox} from 'react-icons/fi';
import {MdOutlineFeaturedPlayList} from 'react-icons/md';

export default function Sidebar(){
    return(
        <div>
            <div className='sidebar'>
                <div className='menu'>
                    <div className='menuItem selected'>
                        <FiBox className='ico' color='white' size={24}/>
                        <p className='txt'>Community Feed</p>
                    </div>
                    <div className='menuItem'>
                        <MdOutlineFeaturedPlayList className='ico' color='white' size={24}/>
                        <p className='txt'>Posts</p>
                    </div>
                    <div className='menuItem'>
                        <FiMessageCircle className='ico' color='white' size={24}/>
                        <p className='txt'>Direct Message</p>
                    </div>
                    <div className='menuItem'>
                        <RiGroupLine className='ico' color='white' size={24}/>
                        <p className='txt'>Groups</p>
                    </div>
                </div>
            </div>
            <div className='asidebar'>
                <div className='menu'>
                    <div className='menuItem'>
                        <FiBox className='ico' color='white' size={24}/>
                    </div>
                    <div className='menuItem'>
                        <MdOutlineFeaturedPlayList className='ico' color='white' size={24}/>
                    </div>
                    <div className='menuItem'>
                        <FiMessageCircle className='ico' color='white' size={24}/>
                    </div>
                    <div className='menuItem'>
                        <RiGroupLine className='ico' color='white' size={24}/>
                    </div>
                    
                </div>
            </div>
        </div>
    )
}