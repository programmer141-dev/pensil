import ChatBar from '../../components/chatRightBar'
import './community.css'
import Sidebar from '../../components/sidebar'
import {IoMdArrowBack} from 'react-icons/io'
import { useState } from 'react'

export default function DirectMessage() {
    const [msgs, setMessages] = useState([]);
    const [mesg, setMsg] = useState('');
    const [main, setMain] = useState(true)

    return(
        <div className='home'>
            {
                main ? <Sidebar /> : null
            }
            <div className='chatBox'>
                <div className='box'>
                    <div className='topbar'>
                        <div className='group'>
                            <IoMdArrowBack color='#fff' size={30} className='ico' onClick={() => setMain(!main)}/>
                            <img src='https://picsum.photos/202' className='acImg' />
                        </div>
                        <div className='details'>
                            <p className='name'>Username</p>
                            <p className='status'>...typing</p>
                        </div>
                    </div>
                    <div className='mesgArea'>
                        <RecieverMessage msg='Hi there, how are you?' />
                        {
                            msgs == undefined ? null : msgs.map((msg) => (
                                <SenderMessage msg={msg}/>
                            ))
                        }
                    </div>
                    <div className='input'>
                        <input className='inp' value={mesg} onChange={(e) => setMsg(e.target.value)} type='text' placeholder='Type in Your message here'/>
                        <div className='extrabtns'>
                            <button onClick={() => {
                                setMessages([...msgs, mesg]);
                                setMsg('');
                            }} className='btn'>
                                Send
                            </button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='pcr'>
                <ChatBar />
            </div>
            {
                main ? (
                    <div className='adr'>
                        <ChatBar setState={setMain} />
                    </div>
                ): null
            }
        </div>
    )
}


function SenderMessage({msg}){
    return(
        <div className='senderMsg'>
            <div className="profileArea">
                <div className='details'>
                    <p className="username">Someuser</p>
                    <p className="time">4:30pm</p>
                </div>
                <img src='https://picsum.photos/200' className='acImg' />
            </div>
            <div className='Smsg'>
                <p className='msg'>{msg}</p>
            </div>
        </div>
    )
}


function RecieverMessage({msg}){
    return(
        <div className='recieverMsg'>
            <div className="profileArea">
                <img src='https://picsum.photos/200' className='acImg' />
                <div className='details'>
                    <p className="username">Someuser</p>
                    <p className="time">4:30pm</p>
                </div>
            </div>
            <div className='Rmsg'>
                <p className='msg'>{msg}</p>
            </div>
        </div>
    )
}
