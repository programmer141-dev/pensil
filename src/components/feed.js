import '../screens/community/community.css';
import {AiOutlineHeart, AiFillHeart} from 'react-icons/ai';
import {FaRegComment} from 'react-icons/fa';
import { useState } from 'react';


export default function FeedPost(){
    const [liked, setLiked] = useState(false);
    return(
        <div className='feedBox'>
                        <div className='topbar'>
                            <img src='https://picsum.photos/200' className='dp'/>
                            <div className='details'>
                                <p className='name'>Community member</p>
                                <p className='time'>10 mins ago</p>
                            </div>
                        </div>
                        <p className='description'>
                            Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and.
                            <br style={{marginTop:20}}/>
                            <p style={{color:'#5882F9', marginTop:10}}>
                            #something #thisisatag #tag
                            </p>
                        </p>
                        <img src='https://picsum.photos/600/300' className='img'/>
                        <div className='ctaArea'>
                            <div className='cta' onClick={() => setLiked(!liked)}>
                                {
                                    liked ? (
                                        <AiFillHeart color='rgb(185, 185, 185)' size={23} style={{marginRight:10}} />
                                        ) : (
                                        <AiOutlineHeart color='rgb(185, 185, 185)' size={23} style={{marginRight:10}} />
                                    )
                                }
                                <p>
                                    32 Likes
                                </p>
                            </div>
                            <div className='cta'>
                                <FaRegComment color='rgb(185, 185, 185)' size={21.5} style={{marginRight:10}} />
                                <p>Comments</p>
                            </div>
                        </div>
                    </div>
    )
}