import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import "./BlogPage.css";
import { blogData } from "../../datas/blogData";
import { BsFillCalendarEventFill, BsFillPenFill } from "react-icons/bs";
import Spinner from "../Spinner/Spinner";
import { BiUserPin } from "react-icons/bi";

const BlogPage = () => {
  const { query } = useParams();

  const [blog, setBlog] = useState(null);

  useEffect(() => {
    const myBlog = blogData.find((p) => p.blogSlug === query);
    if (myBlog) {
      setBlog(myBlog);
    }
    window.scrollTo(0, 0);
  }, [query]);

  return (
    <>
      <div className="blogpageContainer">
        <div className="backBtn">
          <Link to="/" className="linkStyles">
            <button className="backButton">&#x2190; Go back</button>
          </Link>
        </div>

        {blog ? (
          <>
            <div className="blogpagedetail">
              <div>
                <img
                  className="blogpagedetailImage"
                  src={blog?.blogImage}
                  alt=""
                />
              </div>
              <div className="blogpagedetaildateContent">
                <span>
                  <BsFillCalendarEventFill className="blogpagedetailIcon" />
                </span>
                <span className="blogpagedetailDateL">
                  Posted on &nbsp;
                  <span className="blogpagedetailDate">
                    &nbsp; {blog?.blogPostDate}
                  </span>
                </span>
              </div>
              <div className="blogpagedetaildateContent">
                <span>
                  <BsFillPenFill className="blogpagedetailIcon" />
                </span>
                <span className="blogpagedetailDateL">
                  Penned by &nbsp;
                  <span className="blogpagedetailDate">
                    &nbsp; {blog?.blogAuthor}
                  </span>
                </span>
              </div>
              <div className="blogpageHeading">
                <div>
                  <h2 className="blogpageHeadingtext">{blog?.blogHeading}</h2>
                </div>
                <div className="line" />
              </div>

              <div>
                <article className="blogpageArticle">
                  {blog?.blogContent}
                </article>
              </div>

              <div className="flexCenter">
                <h2 style={{ textDecoration: "underline" }}>
                  View {blog?.comments?.length} Comments for the post
                </h2>
              </div>
              <div className="blogpagecommentsection">
                <div className="blogpageComment">
                  {blog?.comments?.map((comment) => (
                    <div className="blogpageuser" key={comment.id}>
                      <div className="customFlex" style={{ gap: "12px" }}>
                        <BiUserPin className="blogpageuserIcon" />
                        <span className="blogpageusercomment">
                          {comment?.comment} -
                          <span className="blogpageuserauthor">
                            {comment?.author}
                          </span>
                        </span>
                      </div>
                      <div className="blogpagereactions">
                        <span className="blogpagereactioncount">
                          👍{comment?.likes}
                        </span>
                        <span className="blogpagereactioncount">
                          🧡{comment?.dislikes}
                        </span>
                        <span className="blogpagereactioncount">
                          👎{comment?.hearts}
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </>
        ) : (
          <Spinner />
        )}

        {/* <div>
          <div className="blogpageComments">
            <div className="blogpageComment">
              <div className="blogpageuser">
                <div className="customFlex" style={{ gap: "12px" }}>
                  <BiUserPin className="blogpageuserIcon" />
                  <span>Lorem ipsum dolor sit amet.</span>
                </div>
                <div className="blogpagereactions">
                  <span> likes</span>
                  <span> likes</span>
                  <span> likes</span>
                </div>
              </div>
            </div>
            <div>
              <form>
                <label htmlFor="comment">Enter your comment</label>
                <input
                  placeholder="Your Comments about this Post"
                  type="text"
                  id="comment"
                  name="comment"
                />
              </form>
            </div>
          </div>
        </div> */}
      </div>
    </>
  );
};

export default BlogPage;

//👍 🧡 👎

/**
 <div className="blogpagecommentFormbox">
                    <form className="blogpagecommentForm">
                      <div>
                        <h2 className="blogpagepostcomment">Post your comments !</h2>
                      </div>
                      <div className="blogpagecommentforminputbox">
                        <label
                          className="blogpagecommentFormlabel"
                          htmlFor="author"
                        >
                          Author
                        </label>
                        <input
                          placeholder="Your Name"
                          type="text"
                          id="author"
                          name="author"
                          className="blogpagecommentForminput"
                        />
                      </div>
                      <div className="blogpagecommentforminputbox">
                        <label
                          className="blogpagecommentFormlabel"
                          htmlFor="comment"
                        >
                          Enter your comment
                        </label>
                        <textarea
                          placeholder="Your Comments about this Post"
                          type="text"
                          id="comment"
                          name="comment"
                          className="blogpagecommentFormtextarea"
                        />
                      </div>
                      <div>
                        <button>Submit</button>
                      </div>
                    </form>
                  </div>
 */
