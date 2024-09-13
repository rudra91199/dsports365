import './latestNews.css'
import latest from '../../assets/images/Trending Image/Neymar.jpg'

const LatestNews = () => {
    const postNumbers = [1, 2, 3, 4, 5, 6, 7, 8]
    return (
        <div className='latestNewsWrapper homeWrapper'>
            <div className='leftWrapper'>

                <div className='homeCatNav'>
                    <p>সর্বশেষ সংবাদ</p>
                </div>

                <div className='latestPostContainer'>
                    {postNumbers.map(postNumbers =>
                        
                            <div className='home-cric-two-post'>

                                <div className='image-container'>
                                    <img src={latest} alt="" />
                                    <span>ক্রিকেট</span>
                                </div>

                                <div className='home-cricket-content'>
                                    <h2>লাহোর ২০০৯: ক্রিকেটের রক্তাক্ত প্রান্তর!</h2>
                                    <p>দেবব্রত মুখার্জী - <span>Mar 2 - 8.00 PM</span></p>
                                    <p>করাচিতে আগের টেস্টে ডাবল সেঞ্চুরি করেছেন। লাহোরেও আগের দিন আরেকটা ডাবল সেঞ্চুরি করেছেন। রানের বন্যার মধ্যে আছেন। ফলে …</p>
                                </div>
                            </div>
                        
                    )}
                </div>

            </div>

            <div className='rightWrapper'></div>
        </div>
    )
}

export default LatestNews