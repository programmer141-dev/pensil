import './landingPage.css';


export default function Momenter (){
    return(
        <div className='mom'>
            <div className='section'>
                <p className='head'>Our Creators Reviews</p>
                <div className='reviews'>
                    <RCard />
                </div>
            </div>
        </div>
    )
}


const RCard = () => {
    return(
        <div className='rCard'>
            <img src='https://picsum.photos/300/350' className='dp' />
            <p className='name'>Some user</p>
            <p className='rew'>
                Pencil is an amazing platform for all creators
            </p>
        </div>
    )
}