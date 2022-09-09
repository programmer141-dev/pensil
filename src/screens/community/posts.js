import './community.css';
import Sidebar from '../../components/sidebar';
import Post from '../../components/post';
import PostRightBar from '../../components/postRightBar';

export default function Posts (){
    return(
        <div className='home'>
            <Sidebar />
            <div className='feed'>
                <p className='head'>Community Posts</p>
                <div className='postSection'>
                    <Post />
                    <Post />
                    <Post />
                </div>
                <p className='head'>Recommended</p>
                <div className='postSection'>
                    <Post />
                    <Post />
                    <Post />
                </div>
            </div>
            <PostRightBar />
        </div>
    )
}