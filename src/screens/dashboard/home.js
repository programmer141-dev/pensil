import './dcommunity.css';
import {useState} from 'react';
import FeedPost from '../../components/feed';
import EditBar from '../../components/editBar';
import Sidebar from './sidebar';

function DFeed(){

    const [communityName, setName] = useState('Community Name')
    const [communityDesc, setDesc] = useState('Welcome to the rockstar community, enjoy being a community member - learn.create.share')
    const [show, setShow] = useState(false);
    const [tags, setTags ] = useState(['Games']);

    return(
        <div className="home">
            <Sidebar />
            <div className='feed'>
                <p className='head'>
                    <input value={communityName} className="title" type='text' onChange={(e) => setName(e.target.value)} maxLength={20}/>
                    <button className='create'>
                        create
                    </button>
                </p>
                <div className='banner'>
                    <p className='bannerHead'>
                        Commmunity members - 89
                    </p>
                    <p className='sub'> 
                        {communityDesc}
                    </p>
                    <div className='communityTags'>
                        {
                            tags.map((tag) => (
                                <div className='tag'>{tag}</div>
                            ))
                        }
                        <div className='tagEdit' onClick={() => setShow(!show)}>Add Tag</div>
                    </div>
                </div>
                <p className='feedHead'>
                    Community Feed
                    
                </p>
                <div className='feedArea'>
                    <FeedPost />
                </div>
            </div>
            <EditBar setName={setName} name={communityName} setDesc={setDesc} desc={communityDesc} show={show} setTags={setTags} tags={tags}/>
        </div>
    )
}



export default DFeed;
