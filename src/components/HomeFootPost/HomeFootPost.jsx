import "./homeFootPost.css";
import Foot1 from "../../assets/images/Trending Image/JavierZanetti.jpg";
import moment from "moment";
import { useCleanAndTruncateText } from "../../hooks/useCleanAndTruncateText";
import { useNavigate } from "react-router-dom";
import { useIncreaseCount } from "../../hooks/useIncreaseCount";

const HomeFootPost = ({ news }) => {
  const navigate = useNavigate();
  return (
    <div className="homeFootPost-container">
      {news?.map((data, i) => (
        <div
          className="homeFootPost"
          onClick={() => {
            useIncreaseCount(data?._id, data?.count);
            navigate(`/news/${data?.slug}`, {
              state: data?._id,
            });
          }}
        >
          <img src={data?.image.url} alt="" />
          <div className="homeFootPostContent">
            <h2>{data?.title}</h2>
            <p>
              {data?.writer.name} -{" "}
              <span>{moment(data?.createdAt).format("lll")}</span>
            </p>
            <p
              dangerouslySetInnerHTML={{
                __html: useCleanAndTruncateText(data?.desc || "", 250),
              }}
            />
          </div>
        </div>
      ))}
    </div>
  );
};

export default HomeFootPost;
