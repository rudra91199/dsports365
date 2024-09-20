import "./stayConnected.css";
import lottie from "lottie-web";
import { defineElement } from "@lordicon/element";
import { useState } from "react";
defineElement(lottie.loadAnimation);

const StayConnected = () => {
  const [iconAnime, setIconAnime] = useState({
    fb: false,
    insta: false,
    yt: false,
  });

  return (
    <>
      <div>
        <p>যুক্ত থাকুন</p>
      </div>

      <div className="socials">
        <div
          className="fb-animated-container"
          onMouseOver={() =>
            setIconAnime({ fb: true, insta: false, yt: false })
          }
        >
          <div className="social-icon fb-animated">
            <lord-icon
              src="https://cdn.lordicon.com/iqagrlso.json"
              trigger={iconAnime.fb ? "in" : ""}
              stroke="bold"
              state={iconAnime.fb ? "hover-draw" : "hover"}

              colors="primary:#ffffff,secondary:#ffffff"
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </div>
          <p className="fb-animated-content">২৩২৪৩২ ফ্যান্স</p>
          <p className="fb-animated-content">লাইক</p>
        </div>

        <div
          className="insta-animated-container"
          onMouseOver={() =>
            setIconAnime({ fb: false, insta: true, yt: false })
          }
        >
          <div className="social-icon insta-animated">
            <lord-icon
              src="https://cdn.lordicon.com/ewswvzmw.json"
              trigger={iconAnime.insta ? "in" : ""}
              colors="primary:#ffffff,secondary:#ffffff"
              stroke="bold"
              state={iconAnime.insta ? "in-reveal" : "hover"}

              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </div>
          <p className="insta-animated-content">১২৩৩৪ ফলোয়ারস</p>
          <p className="insta-animated-content">ফলো</p>
        </div>

        <div
          className="yt-animated-container"
          onMouseOver={() =>
            setIconAnime({ fb: false, insta: false, yt: true })
          }
        >
          <div className="social-icon yt-animated">
            <lord-icon
              src="https://cdn.lordicon.com/ogbssbzd.json"
              trigger={iconAnime.yt ? "in" : ""}
              colors="primary:#ffffff,secondary:#ffffff"
              stroke="bold"
              state={iconAnime.yt ? "in-reveal" : "morph-logotype"}
              style={{ width: "30px", height: "30px" }}
            ></lord-icon>
          </div>
          <p className="yt-animated-content">৩৩৫২ সাবস্ক্রাইবার</p>
          <p className="yt-animated-content">সাবস্ক্রাইব</p>
        </div>
      </div>
    </>
  );
};

export default StayConnected;
