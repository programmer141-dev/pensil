import '../screens/community/community.css';

import {RiGroupLine} from 'react-icons/ri';
import {FiMessageCircle, FiBox, FiEdit} from 'react-icons/fi';
import {MdOutlineFeaturedPlayList} from 'react-icons/md';

import { Link } from 'react-router-dom';
import { useEffect } from 'react';

export default function Sidebar({id}){

    useEffect(() => {
        let sideBar = document.getElementsByClassName('sidebar')[0];
        let menu = sideBar.getElementsByClassName('menu')[0];
        let items = menu.querySelectorAll('.menuItem');
        items[id].classList.add('selected');
    })

    return(
        <div>
            <div className='sidebar'>
                <div className='menu'>
                    <Link to='/community' className='menuItem'>
                        <FiBox className='ico' color='white' size={24}/>
                        <p className='txt'>Community Feed</p>
                    </Link>
                    <Link to='/community/posts' className='menuItem'>
                        <MdOutlineFeaturedPlayList className='ico' color='white' size={24}/>
                        <p className='txt'>Posts</p>
                    </Link>
                    <Link to='/community/directMessage' className='menuItem'>
                        <FiMessageCircle className='ico' color='white' size={24}/>
                        <p className='txt'>Direct Message</p>
                    </Link>
                    <Link to='/community/groups' className='menuItem'>
                        <RiGroupLine className='ico' color='white' size={24}/>
                        <p className='txt'>Groups</p>
                    </Link>
                    
                </div>
            </div>
            <div className='asidebar'>
                <div className='menu'>
                    <Link to='/community' className='menuItem'>
                        <FiBox className='ico' color='white' size={24}/>
                    </Link>
                    <Link to='/community/posts' className='menuItem'>
                        <MdOutlineFeaturedPlayList className='ico' color='white' size={24}/>
                    </Link>
                    <Link to='/community/directMessage' className='menuItem'>
                        <FiMessageCircle className='ico' color='white' size={24}/>
                    </Link>
                    <Link to='/community/groups' className='menuItem'>
                        <RiGroupLine className='ico' color='white' size={24}/>
                    </Link>
                    <Link to='/community/dashboard' className='menuItem'>
                        <FiEdit className='ico' color='white' size={24}/>
                    </Link>
                </div>
            </div>
        </div>
    )
}