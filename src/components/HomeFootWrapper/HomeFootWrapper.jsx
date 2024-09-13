import HomeFootPost from '../HomeFootPost/HomeFootPost'
import './homeFootWrapper.css'

const HomeFootWrapper = () => {
    return (
        <div className='homeFootWrapper homeWrapper'>
            <div className='leftWrapper'>

                <div className='homeCatNav'>
                    <p>ফুটবল</p>
                    <p>জাতীয়</p>
                    <p>আন্তর্জাতিক</p>
                </div>

                <HomeFootPost />
            </div>

            <div className='rightWrapper'></div>
        </div>
    )
}

export default HomeFootWrapper