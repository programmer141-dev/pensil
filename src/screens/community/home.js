import './community.css';
import Sidebar from '../../components/sidebar';
import { Routes, Route } from 'react-router-dom';
import FeedPost from '../../components/feed';
import Posts from './posts';
import DirectMessage from './directMessage';
import Groups from './groups';

function Feed(){
    return(
        <div className="home">
            <Sidebar />
            <div className='feed'>
                <p className='head'>
                    Rockstar Community
                    <button className='create'>
                        create
                    </button>
                </p>
                <div className='banner'>
                    <p className='bannerHead'>
                        Commmunity members - 89
                    </p>
                    <p className='sub'> 
                        Welcome to the rockstar community, enjoy being a community member - learn.create.share
                    </p>
                    <div className='communityTags'>
                        <div className='tag'>Games</div>
                        <div className='tag'>3d Rendering</div>
                    </div>
                </div>
                <p className='feedHead'>
                    Community Feed
                    
                </p>
                <div className='feedArea'>
                    <FeedPost />
                </div>
            </div>
        </div>
    )
}


function Home(){
    return(
        <Routes>
            <Route path='/' element={<Feed />}/>
            <Route path='/posts' element={<Posts />}/>
            <Route path='/directMessage' element={<DirectMessage />}/>
            <Route path='/groups' element={<Groups />}/>
        </Routes>
    )
}



export default Home;
