import HomeCricketWrapper from '../../components/HomeCricketWrapper/HomeCricketWrapper'
import HomeFootWrapper from '../../components/HomeFootWrapper/HomeFootWrapper'
import LatestNews from '../../components/LatestNews/LatestNews'
import MoreSports from '../../components/MoreSports/MoreSports'
import TrendingPost from '../../components/TrendingPost/TrendingPost'
import TrendMarquee from '../../components/TrendMarquee/TrendMarquee'
import './news.css'

const News = () => {
  return (
    <div className='news container'>
      <TrendMarquee/>
      <TrendingPost/>
      <HomeCricketWrapper/>
      <HomeFootWrapper/>
      <LatestNews/>
      <MoreSports/>
    </div>
  )
}

export default News