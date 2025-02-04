import React from "react";
import { useParams } from "react-router-dom";
import "../departmentdetails/DepartmentDetails.css"

const DepartmentDetailPage = () => {
  const { floor, department } = useParams(); 
  if (!floor || !department) {
    return (
      <div className="error-message">
        <h2>Error: Invalid department details</h2>
        <p>The department or floor information is missing. Please check the URL.</p>
      </div>
    );
  }

  return (
    <div className="department-detail-page">
      <h2>Department Details</h2>
      <p>Department: {department}</p>
      <p>Floor: {floor}</p>
    </div>
  );
};

export default DepartmentDetailPage;