import { useState } from 'react';
import { Link } from 'react-router-dom';
import DropItem from '../../components/dropItem';
import './community.css';

function JoinCommunity() {
    const [checked, setChecked] = useState(false)
    return(
        <div className="container">
            <div className='joinBox'>
                <div className='inner'>
                    <div className='head'>
                        Set Up your Pensil Community Account
                    </div>
                    <div className='subHead'>
                        you have been invited to join a biggest community platform holder - pensil
                    </div>
                    <div className='form'>
                        <input type='text' className='input' placeholder='Username / Email'/>
                        <input type='text' className='input' placeholder='Select your communities'/>
                        <div className='dropMenu'>
                            <DropItem />
                            <DropItem />
                            <DropItem />
                        </div>
                        <div className='checkBox' onClick={() => setChecked(!checked)}>
                            <div className='check'>
                                {
                                    checked ? (
                                        <div className='circle'></div>
                                    ) : null
                                }
                            </div>
                            <p className='note'>
                                I agree to the community <span style={{color:'#5882F9'}}>Terms & Conditions and policies</span> 
                            </p>
                        </div>
                        <Link to='/community' className='btn'>
                            Join Community
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default JoinCommunity;