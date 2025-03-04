import React from "react";
import mapImage from "../../../images/maps/eee.png";
import "./ECEMap.css";

function ECEMAP() {
  const classroomData = [
    { room: "201", name: "II B. Tech Classroom Sec -I" },
    { room: "202", name: "II B. Tech Classroom Sec -III" },
    { room: "210", name: "II B. Tech Classroom Sec -II" },
    { room: "203", name: "E - Classroom" },
    { room: "230", name: "III B. Tech Classroom Sec -I" },
    { room: "210", name: "III B. Tech Classroom Sec -II" },
    { room: "230A", name: "III B. Tech Classroom Sec -III" },
  ];

  const labData = [
    { room: "208", name: "Artificail Intelligence & Machine Learning Lab, Dept of CSE" },
    { room: "216", name: "Application Development Lab, Dept of CSE" },
    { room: "224", name: "Programming Languages Lab, Dept of CSE"},
    { room: "229", name: "Metallurgy Lab, Dept of ME "},
    { room: "231", name: "Machine Dynamics Lab, Dept of ME " },
    // { room: "305", name: "Lab 5" },
    // { room: "306", name: "Lab 6" },
  ];

  const waitingHallData = [
    { room: "214", name: "Girls Waiting hall" },
    { room: "225", name: "Boys Waiting Hall" },
  ];

  const facultyRoomData = [
    { "name": "Dr. C. Subba Rao, Professor & Head", "room": "264, 265, 369" },
    { "name": "Dr. J. Ravindra Babu, Associate Professor", "room": "254" },
    { "name": "Dr. Ch. Gangadhar, Associate Professor", "room": "363, 364" },
    { "name": "Dr. T. Haritha, Associate Professor", "room": "267" },
    { "name": "Mr. M. Srinivasa Rao, Associate Professor", "room": "261" },
    { "name": "Mrs. K. Anitha, Associate Professor", "room": "370" },
    { "name": "Dr. A Geetha Devi, Associate Professor", "room": "367" },
    { "name": "Dr. B. Surya Prasada Rao, Associate Professor", "room": "363" },
    { "name": "Dr. Habibulla Mohammad, Associate Professor", "room": "344" },
    { "name": "Ms. K. Aruna Kumari, Senior Assistant Professor", "room": "335" },
    { "name": "Dr. B. Samuyelu, Senior Assistant Professor", "room": "358" },
    { "name": "Dr. T. Balaji, Senior Assistant Professor", "room": "253" },
    { "name": "Ms. T. Sushma, Assistant Professor", "room": "360" },
    { "name": "Dr. V. Ratna Kumari, Assistant Professor", "room": "256" },
    { "name": "Ms. D. Hareesha, Assistant Professor", "room": "340, 357" },
    { "name": "Ms. B. V. Subbayamma, Assistant Professor", "room": "256" },
    { "name": "Ms. B. Swathi Lakshmi, Assistant Professor", "room": "362" },
    { "name": "Mr. K. Phani Rama Krishna, Assistant Professor", "room": "254" },
    { "name": "Mr. A. Ashok Babu, Assistant Professor", "room": "358" },
    { "name": "Dr. P. Venu Madhav, Assistant Professor", "room": "355, 358" },
    { "name": "Ms. L. Madhavi Devi, Assistant Professor", "room": "255, 335" },
    { "name": "Dr. V. S.D. Rekha, Assistant Professor", "room": "362" },
    { "name": "Ms. D. Praveena Bai, Assistant Professor", "room": "343" },
    { "name": "Mrs. D. Swathi, Assistant Professor", "room": "340" },
    { "name": "Mrs. Sri Lakshmi Chandana, Assistant Professor", "room": "343" },
    { "name": "Dr. T. Maha Lakshmi, Assistant Professor", "room": "256" },
];

  const departmentRoomData = [
    { room: "204", name: "Department Examination Cell, Dept of CSE"},
    { room: "206", name: "Department Library, Dept of CSE",},
    { room: "211", name: "Invention and Innovation Cell, Dept of CSE"},
    { room: "212", name: "Department Office, Dept of CSE"},
    { room: "213", name: "Head of the Department, Dept of CSE"},
    { room: "218", name: "Reasearch & Development Lab, Dept of CSE"},
    { room: "227", name: "Department Library, Dept of ME" },
  ];


  const additionalRoomData = [
    { room: "215", name: "Tutorial Room" },
    // { room: "702", name: "Room 2" },
    // { room: "703", name: "Room 3" },
    // { room: "704", name: "Room 4" },
    // { room: "705", name: "Room 5" },
    // { room: "706", name: "Room 6" },
  ];

  return (
    <div className="container">
      <img src={mapImage} alt="CSE Department Map" className="map-image" />
      <h2 className="map-h2 text-center">Room Details</h2>

      <div className="tables-container">
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Classrooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {classroomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Labs</th>
              <th>Lab name</th>
            </tr>
          </thead>
          <tbody>
            {labData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Faculty Rooms</th>
              <th>Faculty Name</th>
            </tr>
          </thead>
          <tbody>
            {facultyRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Department Rooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {departmentRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Waiting Rooms</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody>
            {waitingHallData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <table className="rooms-table">
          <thead>
            <tr>
              <th>Additional Rooms</th>
              <th>Room Name</th>
            </tr>
          </thead>
          <tbody>
            {additionalRoomData.map((item, index) => (
              <tr key={index}>
                <td>{item.room}</td>
                <td>{item.name}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ECEMAP;
