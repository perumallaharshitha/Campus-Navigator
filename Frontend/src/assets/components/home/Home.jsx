import React, { useRef } from "react";
import "./home.css";
import Footer from "../footer/Footer";
import DepartmentDetails from "../departmentdetails/DepartmentDetails";

const Home = () => {
  const secondSectionRef = useRef(null);  

  const scrollToSecondSection = () => {
    secondSectionRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  return (
    <section className="home">
      <div className="top-section">
        <div className="text-content">
          <h1 className="display-3 pt-5 pl-3 pr-3 fw-bolder">
            Navigate Your Campus with Ease! <br />
          </h1>
          <p className="fs-lg fw-bold pl-5 pt-4">
            Navigate your college campus with ease using{" "}
            <span className="fw-bold">Campus Navigator</span>, designed for seamless
            location tracking and quick access to essential facilities. Find
            classrooms, labs, and faculty details effortlessly all in one
            intuitive platform! 🚀🎓
          </p>

          <div className="buttons">
            <button className="explore-btn" onClick={scrollToSecondSection}>Explore</button>
            {/* <button className="learn-more-btn" onClick={scrollTo<Footer/>}>Learn more</button>  */}
          </div>
        </div>

        <div className="image-content">
          <img
            src="https://wepik.com/api/image/local/155222961/9e1baecd-86d4-4009-a3d5-e23bf74bb3d2?expires=1738555200&thumb=0&transparent=0&signature=bd7f58a2f9461a672f6900c0d62f0b1804429a490f99c4587cab538e993ec5cf"
            alt="Illustration"
            className="hero-image"
          />
        </div>
      </div>

      <div ref={secondSectionRef} className="second-section">
        <div className="image-content">
          <img
            src="https://img.freepik.com/free-vector/nerd-concept-illustration_114360-4126.jpg?t=st=1738473568~exp=1738477168~hmac=88920850f508037344893b8a894d877f2af1bccbfa9ab84fed60d49802f38a33&w=740"
            alt="Illustration"
            className="hero-image"
          />
        </div>

        <div className="text-content">
          <h1 className="display-3 pt-5 pl-3 pr-3 fw-bolder">
            Ready to unlock all the features of Campus Navigator? <br />
          </h1>
          <p className="fs-lg fw-bold pl-5 pt-4">
            <ul>Search Functionality</ul>
            <ul>Campus Map</ul>
            <ul>Navigation Assistance</ul>
            <ul>Venue Information</ul>
            <ul>Parking Information</ul>
            <ul>Floor-wise Lab Information</ul>
          </p>
        </div>
      </div>

      <div className="department-section">
        <h2 className="department-title">
          Explore Our <span className="dep">Departments</span>
        </h2>

        <DepartmentDetails />
      </div>
    </section>
  );
};

export default Home;