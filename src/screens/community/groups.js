import ChatBar from '../../components/chatRightBar'
import Sidebar from '../../components/sidebar'
import './groups.css'

export default function Groups(){
    return(
        <div className='home'>
            <Sidebar />
            <div className='section'>
                <p className='head'>Community Groups</p>
                <div className='cards'>
                    <GroupCard />
                    <GroupCard />
                </div>
            </div>
        </div>
    )
}



export const GroupCard = () => {
    return(
        <div className='card'>
            <img src='https://picsum.photos/300/200' className='coverImg' />
            <div className='details'>
                <img src='https://picsum.photos/300/201' className='dpImg' />
                <p className='name'>Group Name</p>
                <p className='desc'>
                    Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the
                </p>
                <p className='count'> 
                    12k members joined
                </p>
                <div className='tags'>
                    <p className='tag'>
                        Game
                    </p>
                    <p className='tag'>
                        City
                    </p>
                </div>
            </div>
        </div>
    )
}