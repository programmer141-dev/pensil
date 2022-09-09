import '../screens/community/community.css';

export default function DropItem(){
    return(
        <div className='item'>
            <img src='https://picsum.photos/200' className='dp'/>
                <div className='details'>
                    <p className='name'>
                        Javascript Community
                    </p>
                    <p className='desc'>
                        The biggest community, with over a million community members...
                    </p>
                </div>
        </div>
    )
}