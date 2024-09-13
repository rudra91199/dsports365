import HomeCricketPost from '../HomeCricketPost/HomeCricketPost'
import './homeCricketWrapper.css'

const HomeCricketWrapper = () => {
  return (
    <div className='homeCricketContainer homeWrapper'>
      <div className='leftWrapper'>

        <div className='homeCatNav'>
          <p>ক্রিকেট</p>
          <p>জাতীয়</p>
          <p>আন্তর্জাতিক</p>
        </div>

        <HomeCricketPost />
      </div>

      <div className='rightWrapper'></div>

    </div>
  )
}

export default HomeCricketWrapper