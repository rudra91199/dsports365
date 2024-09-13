import "./trendMarquee.css";
import Marquee from "react-fast-marquee";

const TrendMarquee = () => {
  return (
    <div className="trendMarquee">
      <span>TRENDING NOW</span>
     
        <Marquee pauseOnHover={true} gradient={true}>
          <h2>লাহোর ২০০৯: ক্রিকেটের রক্তাক্ত প্রান্তর</h2>
          <h2>বার্সেলোনায় ফিরেই ছাড়বেন নেইমার!</h2>
          <h2>হঠাৎ ছাই হওয়া এক নক্ষত্র</h2>
        </Marquee>
  
    </div>
  );
};

export default TrendMarquee;
