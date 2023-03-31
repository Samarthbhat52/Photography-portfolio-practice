import React from "react";
import { nanoid } from "nanoid";
import imgData from "../../../public/data";
import "./imgData.css";

const ImgData = (props) => {
  const data = imgData.images;

  if (props.type === "all") {
    return data.map((data) => {
      return (
        <div className="image-container" key={nanoid()}>
          <img src={`/${data.url}`} alt={data.category} id={data.id} />
          <div className="image-overlay">
            <h2 className="ff-main fw-300">{data.category}</h2>
          </div>
        </div>
      );
    });
  } else {
    return data.map((data) => {
      return (
        data.category === props.type &&
        <div className="image-container" key={nanoid()}>
          <img src={`/${data.url}`} alt={data.category} id={data.id} />
          <div className="image-overlay">
            <h2 className="ff-main fw-300">{data.category}</h2>
          </div>
        </div>
      );
    });
  }
};

export default ImgData;
