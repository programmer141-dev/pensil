import './landingPage.css';

export default function Communities(){
    return(
        <div className='Csection'>
            <div className='section'>
                <p className='head'>Popular Communities</p>
                <div className='cardsection'>
                    <CommunityCard />
                    <CommunityCard />
                </div>
            </div>
        </div>
    )
}


export const CommunityCard = () => {
    return(
        <div className="card">
            <img src='https://picsum.photos/300/200' className='coverImg' />
            <div className='bg'>
                <p className='head'>Community name</p>
                <button className='btn'>Join Community</button>
            </div>
        </div>
    )
}