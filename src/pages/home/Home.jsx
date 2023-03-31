import React, {useEffect} from "react";
import { Navbar, Work } from "../../component";
import './home.css'

const Home = () => {

  useEffect(() => {
    const handleScroll = () => {
      const opacity = 1 - window.scrollY / 900;
      const elements = document.querySelectorAll(".fade-on-scroll");
      elements.forEach((element) => {
        element.style.opacity = opacity;
      });
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
    <div className="homepage">
      <div className="cover-img | flex">
        <h1 className="main-heading fade-on-scroll | ff-heading upercase text-accent">Maxwell</h1>
        <p className="mian-para fade-on-scroll | uppercase fs-400 text-accent fw-400"><strike>P O R T F O L I O</strike></p>
      </div>
    </div>
    
    <Navbar />

    <Work />
    </>
  );
}
export default Home