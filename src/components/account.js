import '../screens/community/community.css';


export default function Account({setState}){
    return(
        <div className='account' onClick={() => setState(false)}>
            <div className='row'>
                <img src='https://picsum.photos/200' className='acImg' />
                <div className='details'>
                    <p className='name'>
                        Some userName
                    </p>
                    <p className='desc'>
                        Learn something new from the groups bro
                    </p>
                </div>
                <div className='status'>
                    <p className='time'>4:30pm</p>
                    <div className='newMsg'>1</div> 
                </div>
            </div>
        </div>
    )
}