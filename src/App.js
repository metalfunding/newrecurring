import { useEffect, useState } from "react";

function App() {
  const [subscriptions, setSubscriptions] = useState([]);

  useEffect(() => {
    fetch(
      "https://your-api-id.execute-api.us-east-1.amazonaws.com/prod/subscriptions?customerId=12345"
    )
      .then((response) => response.json())
      .then((data) => setSubscriptions(data))
      .catch((error) => console.error("Error fetching subscriptions:", error));
  }, []);

  return (
    <div>
      <h2>My Subscriptions</h2>
      {subscriptions.length === 0 ? (
        <p>Loading...</p>
      ) : (
        subscriptions.map((sub) => (
          <div key={sub.id}>
            <p>
              <strong>Plan:</strong> {sub.plan_name}
            </p>
            <p>
              <strong>Card:</strong> {sub.card_label} (**** {sub.last4})
            </p>
            <p>
              <strong>Next Billing:</strong> {sub.renewal_date}
            </p>
          </div>
        ))
      )}
    </div>
  );
}

export default App;
