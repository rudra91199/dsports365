import "./mostPopularCricket.css";
import trending1 from "../../assets/images/Trending Image/DeanHeadley.jpg";

const MostPopularCricket = () => {
  const postNumbers = [1, 2, 3,4];

  return (
    <div className="mostPopularCricket">

      <div>
        <p>জনপ্রিয়</p>
      </div>

      <div>
        {postNumbers.map((postNumbers) => (
          <div className="mostPopularCricketPost">

            <div className="image-container">
              <img src={trending1} alt="" />
              <span>ক্রিকেট</span>
            </div>

            <div className="mostPopularCricketContent">
              <h4>সর্বকালের সেরা হন্তারক!</h4>
            </div>
            
          </div>
        ))}
      </div>
    </div>
  );
};

export default MostPopularCricket;
