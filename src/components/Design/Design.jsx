import React from "react";
import "./Design.css";

const Design = () => {
  return (
    <>
      <div className="designContainer mb1" id="about">
        <div className="designContainerImageBox">
          <img
            src="https://images.unsplash.com/photo-1661956602153-23384936a1d3?ixlib=rb-4.0.3&ixid=MnwxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=2000&q=60"
            alt="designphoto"
            className="designImage"
          />
        </div>
        <div className="designContent">
          <div>
            <span className="designContentTitle">
              I DESIGN DIGITAL & PRINT PRODUCTIONS
            </span>
          </div>
          <div className="lineUnderline"></div>
          <div>
            <span className="designContentText">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              doloribus soluta placeat accusantium, aperiam esse fugit eius
              quos? Rerum nisi inventore enim officia illum voluptates
              reiciendis, placeat praesentium eligendi mollitia porro blanditiis
              nostrum sunt sapiente. Illo, beatae adipisci blanditiis possimus
              dignissimos nam corporis voluptas soluta necessitatibus, sequi et
              commodi! Enim!
            </span>
          </div>
          <div>
            <button className="designContentButton">Check My Work</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Design;
