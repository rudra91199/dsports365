import TrendingPost from '../../components/TrendingPost/TrendingPost'
import TrendMarquee from '../../components/TrendMarquee/TrendMarquee'
import './news.css'

const News = () => {
  return (
    <div className='news'>
      <TrendMarquee/>
      <TrendingPost/>
    </div>
  )
}

export default News