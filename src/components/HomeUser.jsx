import React, { useState } from "react";

// Dummy lawyer data with images and contact info
const lawyers = [
  {
    id: 1,
    name: "Rajesh Patel",
    location: "Mumbai, Maharashtra",
    casesHandled: 50,
    successPercentage: 85,
    yearsOfExperience: 10,
    rating: 4.5,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    phoneNumber: "123-456-7890",
    address: "123 Main St, Mumbai, Maharashtra",
    email: "rajesh.patel@example.com",
  },
  {
    id: 2,
    name: "Neha Sharma",
    location: "Delhi",
    casesHandled: 75,
    successPercentage: 90,
    yearsOfExperience: 12,
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    phoneNumber: "987-654-3210",
    address: "456 Park Road, Delhi",
    email: "neha.sharma@example.com",
  },
  {
    id: 3,
    name: "Amit Khanna",
    location: "Bangalore, Karnataka",
    casesHandled: 60,
    successPercentage: 88,
    yearsOfExperience: 8,
    rating: 4.3,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    phoneNumber: "789-123-4567",
    address: "789 Lakeview Lane, Bangalore, Karnataka",
    email: "amit.khanna@example.com",
  },
  {
    id: 4,
    name: "Priya Verma",
    location: "Chennai, Tamil Nadu",
    casesHandled: 45,
    successPercentage: 92,
    yearsOfExperience: 11,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    phoneNumber: "876-543-2109",
    address: "567 Green Avenue, Chennai, Tamil Nadu",
    email: "priya.verma@example.com",
  },
  {
    id: 5,
    name: "Sanjay Gupta",
    location: "Kolkata, West Bengal",
    casesHandled: 65,
    successPercentage: 86,
    yearsOfExperience: 9,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1887&q=80",
    phoneNumber: "345-678-9012",
    address: "345 Oak Street, Kolkata, West Bengal",
    email: "sanjay.gupta@example.com",
  },
  {
    id: 6,
    name: "Anjali Singh",
    location: "Lucknow, Uttar Pradesh",
    casesHandled: 55,
    successPercentage: 87,
    yearsOfExperience: 10,
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    phoneNumber: "234-567-8901",
    address: "234 Lake Road, Lucknow, Uttar Pradesh",
    email: "anjali.singh@example.com",
  },
  {
    id: 7,
    name: "Rahul Kapoor",
    location: "Jaipur, Rajasthan",
    casesHandled: 70,
    successPercentage: 88,
    yearsOfExperience: 11,
    rating: 4.6,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    phoneNumber: "876-543-2109",
    address: "876 Forest Lane, Jaipur, Rajasthan",
    email: "rahul.kapoor@example.com",
  },
  {
    id: 8,
    name: "Preeti Sharma",
    location: "Pune, Maharashtra",
    casesHandled: 60,
    successPercentage: 86,
    yearsOfExperience: 9,
    rating: 4.4,
    image:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1000&q=80",
    phoneNumber: "789-123-4567",
    address: "789 Oak Street, Pune, Maharashtra",
    email: "preeti.sharma@example.com",
  },
  {
    id: 9,
    name: "Arun Kumar",
    location: "Hyderabad, Telangana",
    casesHandled: 65,
    successPercentage: 89,
    yearsOfExperience: 12,
    rating: 4.8,
    image: "https://example.com/arun-kumar-image.jpg",
    phoneNumber: "234-567-8901",
    address: "234 Park Road, Hyderabad, Telangana",
    email: "arun.kumar@example.com",
  },
  {
    id: 10,
    name: "Meera Pandey",
    location: "Ahmedabad, Gujarat",
    casesHandled: 50,
    successPercentage: 85,
    yearsOfExperience: 10,
    rating: 4.5,
    image: "https://example.com/meera-pandey-image.jpg",
    phoneNumber: "456-789-0123",
    address: "456 Main St, Ahmedabad, Gujarat",
    email: "meera.pandey@example.com",
  },
  {
    id: 11,
    name: "Rajat Sharma",
    location: "Chandigarh",
    casesHandled: 75,
    successPercentage: 90,
    yearsOfExperience: 11,
    rating: 4.7,
    image: "https://example.com/rajat-sharma-image.jpg",
    phoneNumber: "123-456-7890",
    address: "123 Oak Avenue, Chandigarh",
    email: "rajat.sharma@example.com",
  },
  {
    id: 12,
    name: "Sunita Verma",
    location: "Bengaluru, Karnataka",
    casesHandled: 55,
    successPercentage: 87,
    yearsOfExperience: 10,
    rating: 4.6,
    image: "https://example.com/sunita-verma-image.jpg",
    phoneNumber: "345-678-9012",
    address: "345 Park Road, Bengaluru, Karnataka",
    email: "sunita.verma@example.com",
  },
  {
    id: 13,
    name: "Amita Gupta",
    location: "Jaipur, Rajasthan",
    casesHandled: 65,
    successPercentage: 88,
    yearsOfExperience: 12,
    rating: 4.8,
    image: "https://example.com/amita-gupta-image.jpg",
    phoneNumber: "987-654-3210",
    address: "987 Forest Lane, Jaipur, Rajasthan",
    email: "amita.gupta@example.com",
  },
  {
    id: 14,
    name: "Vikas Kumar",
    location: "Lucknow, Uttar Pradesh",
    casesHandled: 60,
    successPercentage: 86,
    yearsOfExperience: 9,
    rating: 4.5,
    image: "https://example.com/vikas-kumar-image.jpg",
    phoneNumber: "234-567-8901",
    address: "234 Lake Road, Lucknow, Uttar Pradesh",
    email: "vikas.kumar@example.com",
  },
  {
    id: 15,
    name: "Sneha Singh",
    location: "Pune, Maharashtra",
    casesHandled: 70,
    successPercentage: 89,
    yearsOfExperience: 11,
    rating: 4.7,
    image: "https://example.com/sneha-singh-image.jpg",
    phoneNumber: "876-543-2109",
    address: "876 Forest Lane, Pune, Maharashtra",
    email: "sneha.singh@example.com",
  },
  // Add more lawyers with their contact info here
];


function HomeUser() {
  const [selectedLawyer, setSelectedLawyer] = useState(null);
  const [selectedContactInfo, setSelectedContactInfo] = useState(null);

  const openLawyerInfo = (lawyer) => {
    setSelectedLawyer(lawyer);
  };

  const openContactInfo = (lawyer) => {
    setSelectedContactInfo(lawyer);
  };

  const closeInfo = () => {
    setSelectedLawyer(null);
    setSelectedContactInfo(null);
  };

  return (
    <div className="relative">
      <h1 className="text-4xl text-purple-800 font-bold text-center mt-8">
        Available Lawyers
      </h1>
      <div className="absolute top-0 right-0 mt-8 mr-8">
        <input
          type="text"
          className="px-3 py-2 border border-purple-800 rounded-lg focus:outline-none bg-purple-100 text-purple-800"
          placeholder="Search..."
        />
        <button className="ml-2 px-4 py-2 bg-purple-500 text-white rounded-lg hover:bg-pink-600">
          Search By Location
        </button>
      </div>
      <div className="mt-12 mx-auto max-w-screen-xl">
        <table className="min-w-full table-auto">
          <thead>
            <tr className="bg-purple-500 text-white">
              <th className="py-2 px-4">Lawyer Name</th>
              <th className="py-2 px-4">Location</th>
              <th className="py-2 px-4">Cases Handled</th>
              <th className="py-2 px-4">Success %</th>

              <th className="py-2 px-4">Rating</th>
              <th className="py-2 px-4">Action</th>
            </tr>
          </thead>
          <tbody>
            {lawyers.map((lawyer) => (
              <tr key={lawyer.id} className="bg-purple-100">
                <td className="py-2 px-4 font-bold text-black">
                  {lawyer.name}
                </td>
                <td className="py-2 px-4 font-bold text-black">
                  {lawyer.location}
                </td>
                <td className="py-2 px-4 font-bold text-black">
                  {lawyer.casesHandled}
                </td>
                <td className="py-2 px-4 font-bold text-black">
                  {lawyer.successPercentage}%
                </td>

                <td className="py-2 px-4 font-bold text-black">
                  {lawyer.rating} ⭐
                </td>
                <td className="py-2 px-4">
                  <div className="flex space-x-2">
                    <button
                      className="px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
                      onClick={() => openLawyerInfo(lawyer)}
                    >
                      More Info
                    </button>
                    <button
                      className="px-2 py-1 bg-yellow-500 text-white rounded-lg hover:bg-yellow-600"
                      onClick={() => openContactInfo(lawyer)}
                    >
                      Contact Lawyer
                    </button>
                    <button className="px-2 py-1 bg-green-500 text-white rounded-lg hover:bg-yellow-600">
                      Chat Room
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {selectedLawyer && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl">
            <h2 className="text-xl font-semibold mb-2">Lawyer Information</h2>
            <div className="flex space-x-4">
              <div>
                <img
                  src={selectedLawyer.image}
                  alt={`${selectedLawyer.name}'s image`}
                  className="h-32 w-32 object-cover rounded-full"
                />
              </div>
              <div>
                <p>
                  Name: <strong>{selectedLawyer.name}</strong>
                </p>
                <p>
                  Location: <strong>{selectedLawyer.location}</strong>
                </p>
                <p>
                  Cases Handled: <strong>{selectedLawyer.casesHandled}</strong>
                </p>
                <p>
                  Success Percentage:{" "}
                  <strong>{selectedLawyer.successPercentage}% </strong>
                </p>
                <p>
                  Years of Experience:{" "}
                  <strong>{selectedLawyer.yearsOfExperience}</strong>
                </p>
                <p>
                  Rating: <strong>{selectedLawyer.rating} </strong>⭐
                </p>
              </div>
            </div>
            <button
              className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={closeInfo}
            >
              Close
            </button>
          </div>
        </div>
      )}
      {selectedContactInfo && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg p-4 max-w-3xl">
            <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
            <p>
              Phone Number: <strong>{selectedContactInfo.phoneNumber}</strong>
            </p>
            <p>
              Address: <strong>{selectedContactInfo.address}</strong>
            </p>
            <p>
              Email: <strong>{selectedContactInfo.email}</strong>
            </p>
            <button
              className="mt-4 px-2 py-1 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
              onClick={closeInfo}
            >
              Close
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

export default HomeUser;
