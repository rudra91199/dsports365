import './trendingPost.css'
import trending1 from '../../assets/images/Trending Image/lahoreAttack.jpg'
import trending2 from '../../assets/images/Trending Image/ShahidAfridi.jpg'
import trending3 from '../../assets/images/Trending Image/ShaunTait.jpg'
import trending4 from '../../assets/images/Trending Image/shakib.jpg'

const TrendingPost = () => {
    return (
        <div className='trendingPost container'>
            <div>
                <img src={trending1} alt="" />
                <div className='trendPost-content'>
                    <span>ক্রিকেট</span>
                    <h2>লাহোর ২০০৯: ক্রিকেটের রক্তাক্ত প্রান্তর</h2>
                    <p>দেবব্রত মুখার্জী - <span>Mar 2 - 8.00 PM</span></p>
                </div>
            </div>
            <div>
                <img src={trending2} alt="" />
                <div className='trendPost-content'>
                    <span>ফুটবল</span>
                    <h2>বার্সেলোনায় ফিরেই ছাড়বেন নেইমার!
                    </h2>
                </div>
            </div>
            <div>
                <img src={trending3} alt="" />
                <div className='trendPost-content'>
                    <span>ক্রিকেট</span>
                    <h2>হঠাৎ ছাই হওয়া এক নক্ষত্র
                    </h2>
                </div>
            </div>
            <div>
                <img src={trending4} alt="" />
                <div className='trendPost-content'>
                    <span>ক্রিকেট</span>
                    <h2>স্মার্টেস্ট ক্রিকেটার এভার
                    </h2>
                </div>
            </div>
        </div>
    )
}

export default TrendingPost