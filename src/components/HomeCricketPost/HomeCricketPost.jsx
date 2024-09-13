import './homeCricketPost.css'
import trending1 from '../../assets/images/Trending Image/lahoreAttack.jpg'
import trending3 from '../../assets/images/Trending Image/ShaunTait.jpg'
import trending4 from '../../assets/images/Trending Image/shakib.jpg'
import trending5 from '../../assets/images/Trending Image/DeanHeadley.jpg'

const HomeCricketPost = () => {
    return (
        <div className='homeCricketPost'>

            <div className='home-cric-two-post'>

                <div className='image-container'>
                    <img src={trending1} alt="" />
                    <span>ক্রিকেট</span>
                </div>

                <div className='home-cricket-content'>
                    <h2>লাহোর ২০০৯: ক্রিকেটের রক্তাক্ত প্রান্তর!</h2>
                    <p>দেবব্রত মুখার্জী - <span>Mar 2 - 8.00 PM</span></p>
                    <p>করাচিতে আগের টেস্টে ডাবল সেঞ্চুরি করেছেন। লাহোরেও আগের দিন আরেকটা ডাবল সেঞ্চুরি করেছেন। রানের বন্যার মধ্যে আছেন। ফলে …</p>
                </div>
            </div>

            <div className='home-cric-two-post'>

                <div className='image-container'>
                    <img src={trending5} alt="" />
                    <span>ক্রিকেট</span>
                </div>

                <div className='home-cricket-content'>
                    <h2>সর্বকালের সেরা হন্তারক!</h2>
                    <p>দেবব্রত মুখার্জী - <span>Aug 18 - 3.00 AM</span></p>
                    <p>আমি যে, কখনো বোলিং করতাম না, জেসপকে দেখে সে জন্য নিজেকে ভাগ্যবান মনে হতো। তিনি অবশ্যই দর্শকের জন্য …</p>
                </div>
            </div>

            <div className='home-cric-remain-post'>
                <div>
                    <img src={trending3} alt="" />
                    <div>
                        <h4>হঠাৎ ছাই হওয়া এক নক্ষত্র</h4>
                        <p>Aug 18,2024</p>
                    </div>
                </div>

                <div>
                    <img src={trending4} alt="" />
                    <div>
                        <h4>স্মার্টেস্ট ক্রিকেটার এভার</h4> 
                        <p>Aug 18,2024</p>
                    </div>

                </div>
            </div>

            <div className='home-cric-remain-post'>
                <div>
                    <img src={trending3} alt="" />
                    <div>
                        <h4>হঠাৎ ছাই হওয়া এক নক্ষত্র</h4>
                        <p>Aug 18,2024</p>
                    </div>
                </div>

                <div>
                    <img src={trending1} alt="" />
                    <div>
                        <h4>স্মার্টেস্ট ক্রিকেটার এভার</h4> 
                        <p>Aug 18,2024</p>
                    </div>

                </div>
            </div>

        </div>
    )
}

export default HomeCricketPost