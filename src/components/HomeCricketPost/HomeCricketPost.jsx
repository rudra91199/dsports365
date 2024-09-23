import "./homeCricketPost.css";
import trending1 from "../../assets/images/Trending Image/lahoreAttack.jpg";
import trending3 from "../../assets/images/Trending Image/ShaunTait.jpg";
import trending4 from "../../assets/images/Trending Image/shakib.jpg";
import trending5 from "../../assets/images/Trending Image/DeanHeadley.jpg";
import moment from "moment";
import { useCleanAndTruncateText } from "../../hooks/useCleanAndTruncateText";

const HomeCricketPost = ({ news }) => {
  return (
    <div className="homeCricketPost">
      {news?.slice(0, 2).map((d) => (
        <div className="home-cric-two-post">
          <div className="image-container">
            <img src={d.image.url} alt="" />
            <span>ক্রিকেট</span>
          </div>
          <div className="home-cricket-content">
            <h2>{d?.title}</h2>
            <p>
              {d?.writer.name} -{" "}
              <span>{moment(d?.createdAt).format("lll")}</span>
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: useCleanAndTruncateText(d?.desc || "", 150),
              }}
            ></p>
          </div>
        </div>
      ))}

      <div className="home-cric-remain-post">
        {news?.slice(2, 6).map((d) => (
          <div>
            <img src={d?.image.url} alt="" />
            <div>
              <h4>{d?.title}</h4>
              <p>{moment(d?.createdAt).format("ll")}</p>
            </div>
          </div>
        ))}
      </div>

      {/* <div className="home-cric-remain-post">
        {news?.slice(4, 6).map((d) => (
          <div>
            <img src={d?.image.url} alt="" />
            <div>
              <h4>{d?.title}</h4>
              <p>{moment(d?.createdAt).format("ll")}</p>
            </div>
          </div>
        ))}
      </div> */}

    </div>
  );
};

export default HomeCricketPost;
