import React, { useState, useRef, useEffect } from "react";
import "./home.css";

const Home = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [coordinates, setCoordinates] = useState({ latitude: null, longitude: null });
  const [destinationCoords, setDestinationCoords] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  // Predefined locations on campus
  const locations = {
    "Administration Block": { lat: 12.9716, lng: 77.5946 },
    "Central Library": { lat: 12.9721, lng: 77.5951 },
    "Parking": { lat: 12.9708, lng: 77.5939 },
    "Canteen": { lat: 12.9712, lng: 77.5932 },
    "Sports Complex": { lat: 12.9699, lng: 77.5925 },
    "Auditorium": { lat: 12.9725, lng: 77.5943 },
    "Hall 1": { lat: 12.9730, lng: 77.5950 },
    "Hall 2": { lat: 12.9735, lng: 77.5948 },
    "Hall 3": { lat: 12.9740, lng: 77.5946 },
    "Hall 4": { lat: 12.9745, lng: 77.5944 },
    "Hall 5": { lat: 12.9750, lng: 77.5942 },
    "Hall 6": { lat: 12.9755, lng: 77.5940 }
  };

  const handleButtonClick = (e) => {
    const destination = locations[e.target.innerText];

    if (!destination) {
      alert("Invalid destination");
      return;
    }

    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setCoordinates({
            latitude: position.coords.latitude,
            longitude: position.coords.longitude
          });

          setDestinationCoords(destination);
        },
        (error) => {
          console.error(error);
          alert("Unable to retrieve your location.");
        }
      );
    } else {
      alert("Geolocation is not supported by this browser.");
    }
  };

  return (
    <div className="home-container">
      <h1 className="log">Campus Navigator</h1>

      <div className="search-bar">
        <span className="search-icon">🔍</span>
        <input type="text" placeholder="Search Campus or type a location" />
      </div>

      <div className="nav-buttons">
        {Object.keys(locations).slice(0, 6).map((place) => (
          <button key={place} className="nav-btn" onClick={handleButtonClick}>{place}</button>
        ))}

        <div className={`dropdown ${dropdownOpen ? "dropdown-open" : ""}`} ref={dropdownRef}>
          <button className="nav-btn" onClick={() => setDropdownOpen(!dropdownOpen)}>Seminary Halls ⏷</button>
          {dropdownOpen && (
            <div className="dropdown-content">
              {Object.keys(locations).slice(6).map((hall) => (
                <button key={hall} onClick={handleButtonClick}>{hall}</button>
              ))}
            </div>
          )}
        </div>
      </div>

      {coordinates.latitude && coordinates.longitude && (
        <div className="coordinates-display">
          <p><strong>Latitude:</strong> {coordinates.latitude}</p>
          <p><strong>Longitude:</strong> {coordinates.longitude}</p>
        </div>
      )}

      
    </div>
  );
};

export default Home;
