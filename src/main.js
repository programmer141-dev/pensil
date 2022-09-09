import {Routes, Route} from 'react-router-dom'
import Home from './screens/community/home'
import JoinCommunity from './screens/community/joinCommunity'
import LandingPage from './screens/landingpage/landingPage'

export default function Main(){
    return(
        <Routes>
            <Route path='/' exact element={<LandingPage />} />
            <Route path='/join' element={<JoinCommunity />} />
            <Route path='/community/*' element={<Home />} />
        </Routes>
    )
}