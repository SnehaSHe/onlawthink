import React, { useState, useEffect } from "react";
import { Navigate } from "react-router-dom";

const LawyerInfo = ({ isLawyerAuthenticated }) => {
  if (!isLawyerAuthenticated) {
    return <Navigate to="/" />;
  }
  const [lawyerData, setLawyerData] = useState(null);
  const lawyerID = localStorage.getItem("lawyerId");

  useEffect(() => {
    // Fetch lawyer information based on lawyerID
    const fetchLawyerInfo = async () => {
      try {
        const response = await fetch(
          `http://localhost:5000/api/lawyer/getLawyerById/${lawyerID}`
        );
        const data = await response.json();

        if (response.ok) {
          setLawyerData(data.lawyer);
        } else {
          // Handle error here if needed
          console.error("Failed to fetch lawyer information");
        }
      } catch (error) {
        console.error("Error fetching data: ", error);
      }
    };

    fetchLawyerInfo();
  }, [lawyerID]);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-4xl text-purple-800 font-bold mb-4">
        Lawyer Information
      </h1>
      {lawyerData ? (
        <div>
          <p className="text-lg">
            Name: {lawyerData.firstName} {lawyerData.lastName}
          </p>
          <p className="text-lg">Email Address: {lawyerData.emailAddress}</p>
          <p className="text-lg">Phone Number: {lawyerData.phoneNo}</p>
          <p className="text-lg">Case Domain: {lawyerData.caseDomain}</p>
          <p className="text-lg">Location: {lawyerData.location}</p>
          <p className="text-lg">Year of Joining: {lawyerData.yearOfJoining}</p>
          <p className="text-lg">Bio: {lawyerData.bio}</p>
          <div>
            <p className="text-lg">Achievements:</p>
            <ul className="list-disc ml-6">
              {lawyerData.achievements.map((achievement, index) => (
                <li key={index} className="text-lg">
                  {achievement}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <p className="text-lg">Qualifications:</p>
            <ul className="list-disc ml-6">
              {lawyerData.qualifications.map((qualification, index) => (
                <li key={index} className="text-lg">
                  {qualification}
                </li>
              ))}
            </ul>
          </div>
        </div>
      ) : (
        <p className="text-lg">Loading lawyer information...</p>
      )}
    </div>
  );
};

export default LawyerInfo;
