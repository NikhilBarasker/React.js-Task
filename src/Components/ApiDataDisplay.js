import React, { useState } from "react";
import axios from "axios";

const ApiDataDisplay = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    // Replace 'your_api_endpoint' with your actual API endpoint
    const apiUrl =
      "https://api.forexrateapi.com/v1/latest?api_key=a38b74a1258efc06bb2e934c9b489296&base=USD&currencies=EUR,INR,JPY";

    try {
      // Use Axios for the API request with async/await
      const response = await axios.get(apiUrl);
      // Update the state with fetched data
      setData(response.data);
    } catch (apiError) {
      // Update the state with error information
      setError(apiError.message || "Error fetching data. Please try again.");
    }
  };

  return (
    <div>
      <h1>API Data Display</h1>
      <button onClick={fetchData}>Fetch Data</button>
      {error && <p>{error}</p>}

      {data && (
        <div>
          <center>
            <table border={2}>
              <thead>
                <tr>
                  <th>Parameter</th>
                  <th>Value</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Success</td>
                  <td>{data.success.toString()}</td>
                </tr>
                <tr>
                  <td>Base</td>
                  <td>{data.base}</td>
                </tr>
                <tr>
                  <td>Timestamp</td>
                  <td>{data.timestamp}</td>
                </tr>
                <tr>
                  <td>Rates</td>
                  <td>
                    <ul>
                      <li>EUR: {data.rates.EUR}</li>
                      <li>INR: {data.rates.INR}</li>
                      <li>JPY: {data.rates.JPY}</li>
                    </ul>
                  </td>
                </tr>
              </tbody>
            </table>
          </center>
        </div>
      )}
    </div>
  );
};

export default ApiDataDisplay;
