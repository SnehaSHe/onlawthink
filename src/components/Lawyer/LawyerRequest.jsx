import React, { useState, useEffect } from "react";

const LawyerRequest = () => {
  const [requests, setRequests] = useState([]);
  const lawyerID = localStorage.getItem("lawyerId");

  // Fetch lawyer requests data
  useEffect(() => {
    const fetchRequests = async () => {
      try {
        const response = await fetch(
          "http://localhost:5000/api/lawyer/getAllRequests"
        );
        if (response.ok) {
          const data = await response.json();
          setRequests(data);
        } else {
          throw new Error("Failed to fetch data");
        }
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchRequests();
  }, []);

  // Handle PATCH request when the button is clicked
  const handleToggleRequest = async (notificationId, acceptStatus) => {
    try {
      const response = await fetch(
        "http://localhost:5000/api/lawyer/acceptRequest",
        {
          method: "PATCH",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ notificationId, acceptStatus }),
        }
      );

      if (response.ok) {
        // Request was successfully accepted or rejected
        const updatedRequests = requests.map((request) => {
          if (request.notification._id === notificationId) {
            request.notification.acceptStatus = acceptStatus;
          }
          return request;
        });

        setRequests(updatedRequests);
      } else {
        // Handle request failure
        console.error("Failed to toggle request");
      }
    } catch (error) {
      console.error("Error toggling request:", error);
    }
  };

  return (
    <div className="bg-blue-200 p-4 rounded-lg shadow-lg">
      <h1 className="text-2xl font-bold mb-4">Lawyer Requests</h1>
      <div className="mt-4">
        {requests.map((request) => (
          <div
            key={request.notification._id}
            className="bg-white p-3 rounded-lg shadow mb-2 flex justify-between"
          >
            <div>
              <p className="font-semibold">
                User: {request.user.firstName} {request.user.lastName}
              </p>
              <p>Email: {request.user.emailAddress}</p>
              <p>Phone: {request.user.phoneNo}</p>
            </div>
            <div>
              {request.notification.acceptStatus === false ? (
                <button
                  className="bg-green-500 text-white py-2 px-4 rounded-lg mr-2"
                  onClick={() =>
                    handleToggleRequest(request.notification._id, true)
                  }
                >
                  Accept
                </button>
              ) : (
                <button
                  className="bg-red-500 text-white py-2 px-4 rounded-lg mr-2"
                  onClick={() =>
                    handleToggleRequest(request.notification._id, false)
                  }
                >
                  Reject
                </button>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LawyerRequest;
