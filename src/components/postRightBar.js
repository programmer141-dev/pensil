import '../screens/community/community.css';
import AccountPost from './accountPost';


export default function PostRightBar(){
    return(
        <div className='bar'>
            <p className='subHead'>Suggested</p>
            <div className='posts'>
                <AccountPost />
            </div>
        </div>
    )
}