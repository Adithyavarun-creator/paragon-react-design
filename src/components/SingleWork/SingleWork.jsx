import React, { useState, useEffect } from "react";
import { workDatas } from "../../datas/workData";
import { useParams } from "react-router-dom";
import "./SingleWork.css";
import { Link } from "react-router-dom";
import Spinner from "../Spinner/Spinner";

const SingleWork = () => {
  const { id } = useParams();

  const [work, setWork] = useState(null);

  useEffect(() => {
    const myWork = workDatas.find((p) => p.id === parseInt(id));
    if (myWork) {
      setWork(myWork);
    }
    window.scrollTo(0, 0);
  }, [id]);

  console.log(work);

  return (
    <>
      <div className="singlepagecontainer">
        <div className="backBtn">
          <Link to="/" className="linkStyles">
            <button className="backButton">&#x2190; Go back</button>
          </Link>
        </div>

        {work ? (
          <div className="singlepageContent">
            <div className="singlepageImagebox">
              <img
                src={work?.workImageLink}
                alt=""
                className="singlepageImage"
              />
            </div>
            <div className="singlepageDetail">
              <div>
                <span className="singlepageDate">Posted on {work?.date}</span>
              </div>
              <div>
                <h1 className="singlepageTitle">{work?.workTitle}</h1>
              </div>
              <div>
                <h2 className="singlepageSubtitle">{work?.workSubtitle}</h2>
              </div>
              <div>
                <div className="singlepageReactions">
                  <span className="singlepageReactionCount">
                    🧡{work?.likeCount}
                  </span>
                  <span className="singlepageReactionCount">
                    👍{work?.viewCount}
                  </span>
                </div>
              </div>
              <div>
                <article className="singlepageArticle">
                  {work?.workContent}
                </article>
              </div>
            </div>
          </div>
        ) : (
          <Spinner />
        )}
      </div>
      <div className="mb5" />
    </>
  );
};

export default SingleWork;
