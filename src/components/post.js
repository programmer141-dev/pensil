import '../screens/community/community.css';

export default function Post (){
    return(
                    <div className='post'>
                        <img src='https://picsum.photos/200' className='img'/>
                        <div className='details'>
                            <p className='title'>
                                Gaming Crash course
                            </p>
                            <p className='desc'>
                                by some user
                            </p>
                            <p className='desc'>
                                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                            </p>
                            <button className='btn'>
                                Check out
                            </button>
                        </div>
                    </div>
    )
}