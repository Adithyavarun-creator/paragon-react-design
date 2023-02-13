import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./Blog.css";
import { IoPersonCircleOutline } from "react-icons/io5";
import {
  MdOutlineDesignServices,
  MdOutlineInsertComment,
  MdOutlineEditCalendar,
} from "react-icons/md";
import { blogData } from "../../datas/blogData";
import { Link } from "react-router-dom";

const Blog = () => {
  return (
    <>
      <TitleBox heading="What I Posts" subheading="My Blog Contents" />
      <div className="blogContainer">
        {blogData.map((data) => (
          <Link
            to={`/blog/${data.blogSlug}`}
            className="linkStyle"
            key={data.id}
          >
            <div className="blogBox">
              <div>
                <img className="blogImage" src={data.blogImage} alt="" />
              </div>
              <div className="blogPostdate">
                <span>
                  <MdOutlineEditCalendar
                    style={{ color: "white" }}
                    className="blogIcon"
                  />
                </span>
                <span className="blogDate">{data.blogPostDate}</span>
              </div>
              <div className="blogHeader">
                <div>
                  <h2 className="blogHeadingtext">{data.blogHeading}</h2>
                </div>
                <div className="blogViews">
                  <div className="blogViewItem">
                    <IoPersonCircleOutline className="blogIcon" />
                    <span className="blogAuthorname">{data.blogAuthor}</span>
                  </div>
                  <div className="blogViewItem">
                    <MdOutlineDesignServices className="blogIcon" />
                    <span className="blogAuthorname">{data.blogType}</span>
                  </div>
                  <div className="blogViewItem">
                    <MdOutlineInsertComment className="blogIcon" />
                    <span className="blogAuthorname">{data.blogComments} Comments</span>
                  </div>
                </div>
              </div>
              <div>
                <article className="blogArticle">{data.blogSubtitle}</article>
              </div>
              <div className="blogReadBtn">
                <button className="blogReadButton">Read More...</button>
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="mb4" />
    </>
  );
};

export default Blog;
