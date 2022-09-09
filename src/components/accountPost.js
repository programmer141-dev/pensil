import '../screens/community/community.css';


export default function AccountPost(){
    return(
        <div className='account'>
            <div className='row'>
                <img src='https://picsum.photos/200' className='acImg' />
                <div className='details'>
                    <p className='name'>
                        Some userName
                    </p>
                    <p className='desc'>
                        3d Render Development
                    </p>
                </div>
            </div>
            <img src='https://picsum.photos/300/200' className='pst' />
        </div>
    )
}