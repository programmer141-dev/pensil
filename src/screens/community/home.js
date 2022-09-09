import './community.css';
import Sidebar from '../../components/sidebar';
import { Routes, Route, Link } from 'react-router-dom';
import FeedPost from '../../components/feed';
import Posts from './posts';
import DirectMessage from './directMessage';
import Groups from './groups';
import DFeed from '../dashboard/home';

function Feed(){
    return(
        <div className="home">
            <Sidebar id={0}/>
            <div className='feed'>
                <p className='head'>
                    Rockstar Community
                    <div>
                        <button className='create'>
                            create
                        </button>
                        <button className='create'>
                            <Link to='/community/dashboard' className='link'>
                                Edit Page
                            </Link>
                        </button>
                    </div>
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
            <Route path='/dashboard' element={<DFeed />}/>
        </Routes>
    )
}



export default Home;
