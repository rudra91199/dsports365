import "./homeFootPost.css";
import Foot1 from "../../assets/images/Trending Image/JavierZanetti.jpg";
import moment from "moment";
import { useCleanAndTruncateText } from "../../hooks/useCleanAndTruncateText";

const HomeFootPost = ({ news }) => {
  return (
    <div className="homeFootPost-container">
      {news?.map((data, i) => (
        <div className="homeFootPost">
          <img src={data?.image.url} alt="" />
          <div className="homeFootPostContent">
            <h2>{data?.title}</h2>
            <p>
              {data?.writer.name} - <span>{moment(data?.createdAt).format("lll")}</span>
            </p>
            <p dangerouslySetInnerHTML={{__html: useCleanAndTruncateText(data?.desc || "", 250)}}/>
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFootPost;
