import HomeCricketPost from "../HomeCricketPost/HomeCricketPost";
import "./homeCricketWrapper.css";
import StayConnected from "../StayConnected/StayConnected";
import MostPopularCricket from "../MostPopularCricket/MostPopularCricket";

const HomeCricketWrapper = () => {

  return (
    <div className="homeCricketContainer homeWrapper">
      <div className="leftWrapper">
        <div className="homeCatNav">
          <p>ক্রিকেট</p>
          <p>অল</p>
          <p>জাতীয়</p>
          <p>আন্তর্জাতিক</p>
        </div>

        <HomeCricketPost />


      </div>

      <div className="rightWrapper">
       <StayConnected/>
       <MostPopularCricket/>
      </div>
    </div>
  );
};

export default HomeCricketWrapper;
