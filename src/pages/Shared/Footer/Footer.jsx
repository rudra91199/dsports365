import "./footer.css";
import federer from "../../../assets/images/Trending Image/RogerFederer2.jpg";
import trending3 from "../../../assets/images/Trending Image/ShaunTait.jpg";
import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { IoLogoYoutube } from "react-icons/io";
import { useFetch } from "../../../hooks/useFetch";
import moment from "moment";
import { useIncreaseCount } from "../../../hooks/useIncreaseCount";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const postNumbers = [1, 2, 3];

  const navigate = useNavigate()

  const { data: { counts } = {}, isLoading } = useFetch(
    "posts/getNewsCountByCategory",
    ["newsCounts"]
  );

  const { data: { result } = {} } = useFetch(
    `posts/getPopularNews?limit=${3}`,
    ["popularNews"]
  );

  console.log(counts);

  return (
    <div className="footer-container">
      <div className="container">
        <div className="editor-picks-container">
          <h3>Editor Picks</h3>
          {postNumbers.map((postNumber) => (
            <div className="editor-pick">
              <img src={federer} alt="" />
              <div>
                <h4>শিল্প বিপ্লবের অবসান</h4>
                <p>September 18, 2024</p>
              </div>
            </div>
          ))}
        </div>
        <div className="popular-posts-container">
          <h3>Popular Posts</h3>

          {result?.map((data) => (
            <div
              className="popular-post"
              onClick={() => {
                useIncreaseCount(data?._id, data?.count);
                navigate(`/news/${data?.slug}`, {
                  state: data?._id,
                });
              }}
            >
              <img src={data?.image.url} alt="" />
              <div>
                <h4>{data?.title}</h4>
                <p>{moment(data?.createdAt).format("ll")}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="popular-category-container">
          <h3>Popular Category</h3>
          {counts?.map((data) => (
            <div>
              <p>{data.categoryName}</p>
              <span>{data.count}</span>
            </div>
          ))}
        </div>
      </div>

      <hr />
      <div className="footer container">
        <div className="footer-logo">Dsports</div>
        <div className="footer-about-us">
          <h3>About Us</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla
            quisquam nesciunt suscipit temporibus adipisci pariatur, earum
            voluptates odio cumque recusandae.
          </p>
          <p>
            Contact Us: <span>contact@gmail.com</span>
          </p>
        </div>
        <div className="footer-social">
          <h3>Follow Us</h3>

          <div className="socialIcons">
            <div className="socialIcon">
              <FaFacebookF />
            </div>

            <div className="socialIcon">
              <FaInstagram />
            </div>

            <div className="socialIcon">
              <IoLogoYoutube />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
