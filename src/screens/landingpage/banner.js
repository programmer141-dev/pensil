import './landingPage.css';
import video from '../../assets/video.mp4'
import playButton from '../../assets/Polygon 1.png'
import pauseButton from '../../assets/pause.png'
import {useState} from 'react';

function BannerSection() {

    const [pause, setPause] = useState(false);
    let videoFull;

    const played = () => {
            if(videoFull.paused){
                setPause(!pause);
                videoFull.play(); 
            }else{
                videoFull.pause(); 
                setPause(!pause);
            }
    }

    return (
        <div className='bannerSection'>
            <div className='videoContainer'>
                <video src={video} className='video' id="video" loop />
                <div className='playButton' onClick={() => {
                    played();
                }}>
                    <div className='play' onClick={() => {
                            played();
                        }}>
                        {
                            pause ? (
                                <img src={pauseButton} className="pauseBtn" />
                                ) : (
                                <img src={playButton} className="playBtn" />
                            )
                        }
                    </div>
                </div>
            </div>
            <p className='subTxt'>
                Improve retention,  growth and advocacy with the all-in-one community engagement platform. 
            </p>
        </div>
    );
}

export default BannerSection;
