

  import React from "react";
  import { redirect, useNavigate } from "react-router-dom"; 
  import "./DepartmentDetails.css";

  const cards = [
    { floor: 2, department: "Computer Science and Engineering", name: "Dr. A. Jaya Lakshmi", image: "https://www.pvpsiddhartha.ac.in/images/CSESTAFF/CSE100001.jpg", },
    { floor: 2, department: "Computer Science and Engineering (Artificial Intelligence and Machine Learning)", name: "Dr. B. Janakiramaiah", image: "https://www.pvpsiddhartha.ac.in/images/CSMSTAFF/CSM100001.jpg" },
    { floor: 2, department: "Computer Science and Engineering (Data Science)", name: "Dr. B. Janakiramaiah", image: "https://www.pvpsiddhartha.ac.in/images/CSDSTAFF/CSD100001.jpg" },
    { floor: 3, department: "Information Technology", name: "Dr. B.V. Subba Rao", image: "https://www.pvpsiddhartha.ac.in/images/INFSTAFF/INF100001.jpg" },
    { floor: 1, department: "Electronics and Communication Engineering", name: "Dr. C. Subba Rao", image: "https://www.pvpsiddhartha.ac.in/ecenew/ece/FacultyPhotos/ECE010005.jpg" },
    { floor: 2, department: "Electrical and Electronics Engineering", name: "Dr. Ch Padmanabha Raju", image: "https://www.pvpsiddhartha.ac.in/dep_eee/wall/hod_f.jpg"},
    { floor: 1, department: "Mechanical Engineering", name: "Dr. Raghu Kumar Bandlamudi", image: "https://www.pvpsiddhartha.ac.in/dep_mech/walls/Mech_Hod_Photo.jpg" },
    { floor: 1, department: "Civil Engineering", name: "Dr. V. Jagadish", image: "https://www.pvpsiddhartha.ac.in/dep_civil/wall/hod.jpg" },
    { floor: 1, department: "M.Tech Machine Design", name: "Dr. Raghu Kumar Bandlamudi", image: "https://www.pvpsiddhartha.ac.in/dep_mech/walls/Mech_Hod_Photo.jpg" },
    { floor: 4, department: "Masters of Business Administration", name: "Dr. P. Adi Lakshmi", image: "https://www.pvpsiddhartha.ac.in/images/mbastaff/MBA010001.jpg" },
    { floor: 4, department: "Freshman Engineering", name: "Dr. M. Srilakshmi", image: "https://www.pvpsiddhartha.ac.in/dep_fed/wall/hod_fed1.jpg" },
  ];

  const DepartmentDetails = () => {
    const navigate = useNavigate(); 
    const handleButtonClick = (floor, department) => {
      navigate(`/department/`);
    };

    return (
      <div id="departments-section" className="department-grid">
        {cards.map((dept, index) => (
          <div key={index} className="department-card">
            <img src={dept.image} alt={dept.name} className="profile-pic" />
            <div className="details">
              <h3 className="name">{dept.name}</h3>
              <p className="department-name">{dept.department}</p>
              <h4 className="floor-no">Floor: {dept.floor}</h4>
              <button className="details-btn" onClick={() => handleButtonClick(dept.floor, dept.department)}>
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>
    );
  };

  export default DepartmentDetails;





