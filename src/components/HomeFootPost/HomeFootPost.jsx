import './homeFootPost.css'
import Foot1 from '../../assets/images/Trending Image/JavierZanetti.jpg'

const HomeFootPost = () => {
    const postNumbers= [1,2,3,4]
  return (
    <div className='homeFootPost-container'>
        {
            postNumbers.map(postNumbers =>(
                <div className='homeFootPost'>
                    <img src={Foot1} alt="" />
                    <div className='homeFootPostContent'>
                         <h2>হ্যাভিয়ের জানেত্তি, উপেক্ষিত যোদ্ধা</h2>
                         <p>দেবব্রত মুখোপাধ্যায় - <span>Aug 24, 2024</span></p>
                         <p>সম্ভবত না। যাওয়ার কথা নয়। ইতালিতে তাঁর জীবনের সেরা স্মৃতিগুলোর কিছু পড়ে আছে। এই ইতালিতে তিনি সাধারণ একজন থেকে মহানায়ক হয়ে উঠেছিলেন। তারপরও ইতালিয়ান কর কর্তৃপক্ষ ও পুলিশের জ্বালায় সেখানে বেড়াতে যেতে পারতেন.....</p>
                    </div>
                </div>
            ))
        }
    </div>
  )
}

export default HomeFootPost