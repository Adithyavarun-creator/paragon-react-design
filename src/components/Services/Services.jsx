import React from "react";
import TitleBox from "../TitleBox/TitleBox";
import "./Services.css";
import { serviceDatas } from "../../datas/serviceData";

const Services = () => {
  return (
    <>
      <TitleBox heading="What I Do" subheading="My Daily Services" />
      <div className="serviceContainer" id="about">
        {serviceDatas.map((data) => (
          <div className="serviceBox" key={data.id}>
            <span className="serviceIconBox">
              <img src={data.imageFile} alt="" className="serviceImage" />
            </span>
            <span className="serviceImagetext">{data.imageText}</span>
          </div>
        ))}
      </div>
      <div className="mb2" />
    </>
  );
};

export default Services;
