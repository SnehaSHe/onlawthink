import React, { useEffect, useState } from "react";

const AcceptedUser = () => {
  const [acceptedUsers, setAcceptedUsers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Fetch accepted users data from the API
    fetch("http://localhost:5000/api/lawyer/getAcceptedRequests")
      .then((response) => response.json())
      .then((data) => {
        setAcceptedUsers(data.acceptedUsers);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false);
      });
  }, []);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Accepted Users</h2>
      <table className="min-w-full divide-y divide-gray-200">
        <thead>
          <tr>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Name
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Email
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Account Type
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Phone Number
            </th>
            <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              Chat Room
            </th>
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {acceptedUsers.map((user) => (
            <tr key={user._id}>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.firstName} {user.lastName}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.emailAddress}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">
                {user.accountType}
              </td>
              <td className="px-6 py-4 whitespace-nowrap">{user.phoneNo}</td>
              <td className="px-6 py-4 whitespace-nowrap">
                <button
                  className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded"
                  onClick={() => handleChatRoomButtonClick(user)}
                >
                  Chat Room
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AcceptedUser;
