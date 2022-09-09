import './landingPage.css';


export default function Faq (){
    return(
        <div className='faq'>
            <div className='section'>
                <p className='head'>Some Faq's</p>
                <FaqBox />
                <FaqBox />
                <FaqBox />
            </div>
        </div>
    )
}


const FaqBox = () => {
    return(
        <div className='faqbox'>
            <p className='que'>
                Something random question asked by user?
            </p>
            <p className='ans'>
                Something random answer given by team
            </p>
        </div>
    )
}