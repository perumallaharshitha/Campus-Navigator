import React from "react";
import { useNavigate } from "react-router-dom";
import "./home.css"; // Include the same styles for the grid and department cards

const cards = [
  { floor: 2, department: "Computer Science and Engineering", name: "Dr. A. Jaya Lakshmi", image: "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE100001.jpg", id:"cse" },
  { floor: 2, department: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)", name: "Dr. B. Janakiramaiah", image: "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM100001.jpg", id:"csm" },
  { floor: 2, department: "Computer Science and Engineering (Data Science)", name: "Dr. B. Janakiramaiah", image: "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD100001.jpg" , id:"csd"},
  { floor: 3, department: "Information Technology", name: "Dr. B.V. Subba Rao", image: "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF100001.jpg" , id:"it"},
  { floor: 1, department: "Electronics and Communication Engineering", name: "Dr. C. Subba Rao", image: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010005.jpg", id:"ece" },
  { floor: 2, department: "Electrical and Electronics Engineering", name: "Dr. Ch Padmanabha Raju", image: "https://www.pvpsiddhartha.ac.in/dep_eee/wall/hod_f.jpg", id:"eee" },
  { floor: 1, department: "Mechanical Engineering", name: "Dr. Raghu Kumar Bandlamudi", image: "https://www.pvpsiddhartha.ac.in/dep_mech/walls/Mech_Hod_Photo.jpg", id:"mech" },
  { floor: 1, department: "Civil Engineering", name: "Dr. V. Jagadish", image: "https://www.pvpsiddhartha.ac.in/dep_civil/wall/hod.jpg", id:"civil" },
  { floor: 1, department: "M.Tech Machine Design", name: "Dr. Raghu Kumar Bandlamudi", image: "https://www.pvpsiddhartha.ac.in/dep_mech/walls/Mech_Hod_Photo.jpg", id:"mech" },
  { floor: 4, department: "Masters of Business Administration", name: "Dr. P. Adi Lakshmi", image: "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010001.jpg", id:"mba" },
  { floor: 4, department: "Freshman Engineering", name: "Dr. M. Srilakshmi", image: "https://www.pvpsiddhartha.ac.in/dep_fed/wall/hod_fed1.jpg", id:"fed" },
];

const Home = () => {
  const navigate = useNavigate();

  const handleDepartmentClick = (id) => {
    // Navigate to the specific department page using id
    navigate(`${id}`);
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
        </div>

        <div className="image-content">
          <img
            src="https://wepik.com/api/image/local/155222961/9e1baecd-86d4-4009-a3d5-e23bf74bb3d2?expires=1738555200&thumb=0&transparent=0&signature=bd7f58a2f9461a672f6900c0d62f0b1804429a490f99c4587cab538e993ec5cf"
            alt="Illustration"
            className="hero-image"
          />
        </div>
      </div>

      <div className="department-section">
        <h2 className="department-title">
          Explore Our <span className="dep">Departments</span>
        </h2>

        <div className="department-grid">
          {cards.map((dept, index) => (
            <div key={index} className="department-card">
              <img src={dept.image} alt={dept.name} className="profile-pic" />
              <div className="details">
                <h3 className="name">{dept.name}</h3>
                <p className="department-name">{dept.department}</p>
                <h4 className="floor-no">Floor: {dept.floor}</h4>
                <button 
                  className="details-btn" 
                  onClick={() => handleDepartmentClick(dept.id)} // Pass the id here
                >
                  View Details
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Home;

