import React from "react";
import "./_video.css";

import { AiFillEye } from "react-icons/ai";

const Video = () => {
  return (
    <div className="video">
      <div className="video_top">
        <img
          src="https://i.ytimg.com/vi/VPRjCeoBqrI/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&amp;rs=AOn4CLC66mngvsgydVq4HM_MITPRXedOQw"
          alt=""
        />
        <span>7:30</span>
      </div>

      <div className="video_title">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem iure
        corporis, eius ex esse, dolor ipsum ab nulla voluptate non dolore, id
        repudiandae. Natus laborum quia nisi quis asperiores assumenda.
      </div>

      <div className="video_details">
        <span>
          <AiFillEye />
          5m views •
        </span>

        <span>5 days ago</span>
      </div>

      <div className="video_channel">
        <img
          src="https://yt3.ggpht.com/nCMHKdzJCDlE5uX_9HplknQdYgrKEs3yZMSQNx2yYs8gRA05NJAZQAe8TMNpna_EEIaKx6FR=s88-c-k-c0x00ffffff-no-rj"
          alt=""
        />
        <p>Channel youtube</p>
      </div>
    </div>
  );
};

export default Video;
