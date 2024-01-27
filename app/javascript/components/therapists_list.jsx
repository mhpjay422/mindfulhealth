import React, { useState, useEffect } from "react";
import ReactDOM from "react-dom/client";

function TherapistsList() {
  const [loading, setLoading] = useState(true);
  const [loadedTherapists, setLoadedTherapists] = useState([]);

  useEffect(() => {
    const apiEndpoint = "/api/therapists";
    fetch(apiEndpoint)
      .then((response) => response.json())
      .then((therapists) => {
        setLoadedTherapists(therapists);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <h1>Loading...</h1>;
  } else {
    return loadedTherapists.map((therapist, index) => (
      <div key={index}>
        <table>
          <tr>
            <th>Name</th>
            <th>Address</th>
            <th>Location</th>
            <th>Insurance</th>
            <th>Remote</th>
          </tr>
          <tr>
            <td>{therapist.name}</td>
            <td>{therapist.address}</td>
            <td>{therapist.city}</td>
            <td>{therapist.insurance}</td>
            <td>{therapist.remote ? "Yes" : "No"}</td>
          </tr>
        </table>
      </div>
    ));
  }
}

const therapistsList = ReactDOM.createRoot(
  document.getElementById("therapist-list-container")
);
therapistsList.render(<TherapistsList />);
