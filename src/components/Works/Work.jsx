import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./Work.css";
import { workDatas } from "../../datas/workData";
import { FcLike } from "react-icons/fc";
import { MdPreview } from "react-icons/md";
import { Link } from "react-router-dom";

const Work = () => {
  return (
    <>
      <TitleBox heading="Visit My" subheading="Latest Works" />
      <div className="workContainer" id="works">
        {workDatas.map((work) => (
          <Link to={`work/${work.id}`} className="linkStyle" key={work.id}>
            <div className="workBox">
              <div>
                <img src={work.workImageLink} alt="" className="workImage" />
              </div>
              <div className="workCount">
                <div className="workCountBox">
                  <FcLike className="workSocialIcons" />
                  <span className="workviewCount">{work.likeCount}</span>
                </div>
                <div className="workCountBox">
                  <MdPreview
                    style={{ color: "yellow" }}
                    className="workSocialIcons"
                  />
                  <span className="workviewCount">{work.viewCount}</span>
                </div>
              </div>
              <div className="workImageSubs">
                <span className="workTitle">{work.workTitle}</span>
                <span className="workSubtitle">{work.workSubtitle}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mb3" />
    </>
  );
};

export default Work;
