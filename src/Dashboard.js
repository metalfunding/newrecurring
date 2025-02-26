import React, { useEffect, useState } from "react";

const Dashboard = () => {
  const [activeSubscriptions, setActiveSubscriptions] = useState(0);

  useEffect(() => {
    fetch(
      "https://uhu1gw9ofi.execute-api.us-east-2.amazonaws.com/GetSubscriptions/subscriptions"
    )
      .then((response) => response.json())
      .then((data) => {
        setActiveSubscriptions(data.length);
      })
      .catch((error) => console.error("Error fetching subscriptions:", error));
  }, []);

  return (
    <div className="container">
      <h2>Dashboard</h2>
      <div className="card">
        <h3>Active Subscriptions</h3>
        <p>{activeSubscriptions}</p>
      </div>
    </div>
  );
};

export default Dashboard;
