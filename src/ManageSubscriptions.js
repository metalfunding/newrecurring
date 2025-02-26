import React, { useEffect, useState } from "react";

const ManageSubscriptions = () => {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch(
      "https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/subscriptions"
    )
      .then((response) => response.json())
      .then((data) => setSubscriptions(data))
      .catch((error) => console.error("Error fetching subscriptions:", error));
  }, []);

  const cancelSubscription = (id) => {
    fetch(
      `https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/cancel?subscriptionId=${id}`,
      {
        method: "POST",
      }
    )
      .then(() => {
        alert("Subscription canceled!");
        setSubscriptions(subscriptions.filter((sub) => sub.id !== id));
      })
      .catch((error) => console.error("Error canceling subscription:", error));
  };

  return (
    <div className="container">
      <h2>Manage Subscriptions</h2>
      {subscriptions.length === 0 ? (
        <p>Loading subscriptions...</p>
      ) : (
        subscriptions.map((sub) => (
          <div className="card" key={sub.id}>
            <p>
              <strong>Plan:</strong> {sub.plan_name}
            </p>
            <p>
              <strong>Next Billing:</strong> {sub.renewal_date}
            </p>
            <button onClick={() => cancelSubscription(sub.id)}>
              Cancel Subscription
            </button>
          </div>
        ))
      )}
    </div>
  );
};

export default ManageSubscriptions;
