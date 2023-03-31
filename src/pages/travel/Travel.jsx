import React from "react";
import { Navbar, ImgData } from "../../component";

const Travel = () => {
  return (
    <>
      <Navbar />
      <div className="images | grid">
        <ImgData type="travel" />
      </div>
    </>
  );
};
export default Travel;
