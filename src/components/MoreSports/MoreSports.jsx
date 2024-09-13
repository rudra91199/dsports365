import './moreSports.css'
import djokovich from '../../assets/images/Trending Image/NovakDjokovic.jpg'
import federer from '../../assets/images/Trending Image/RogerFederer2.jpg'

const MoreSports = () => {
    const postNumbers = [1, 2, 3, 4]
    return (
        <div className='moreSports homeWrapper'>
            <div className='leftWrapper'>

                <div className='homeCatNav'>
                    <p>আরো খেলা</p>
                    <p>টেনিস</p>
                    <p>অ্যাথলেটিক্স</p>
                    <p>অন্যান্য</p>
                </div>

                <div className='moreSportsPost'>
                    <div className='moreSportsFirst'>
                        <div className='image-container'>
                            <img src={djokovich} alt="" />
                            <span>টেনিস</span>
                        </div>

                        <div className='home-cricket-content'>
                            <h2>বেলগ্রেডের রাজা, মেলবোর্নের মহারাজা</h2>
                            <p>মাহবুব হাসান তন্ময় - <span>Mar 2 - 8.00 PM</span></p>
                            <p>শুভ্র শহরের দেশ সার্বিয়া। শ্বেত তুষারে রাজধানী বেলগ্রেডও এক প্রকার আচ্ছন্নই থাকে। অদ্ভুত ধরনের এক নিস্তব্ধতায় যেন সাদা চাদরে মুড়ে থাকে পুরো শহরবাসী। ব্যস্ততা রয়েছে, তবে তা প্রায় শব্দহীন।</p>
                        </div>
                    </div>
                    {postNumbers.map(postNumbers=>(
                        <div className='moreSportsRemain'>
                            <img src={federer} alt="" />
                            <div>
                                <h4>শিল্প বিপ্লবের অবসান</h4>
                                <p>September 18, 2024</p>
                            </div>
                        </div>
                    ))}

                </div>
            </div>

            <div className='rightWrapper'></div>
        </div>
    )
}

export default MoreSports