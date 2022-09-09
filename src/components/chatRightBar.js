import '../screens/community/community.css';
import Account from './account';


export default function ChatBar({setState}){
    return(
        <div className='bar'>
            <p className='subHead'>Direct Message</p>
            <input className='srch' placeholder='Search'/>
            <Account setState={setState}/>
            <Account setState={setState}/>
        </div>
    )
}