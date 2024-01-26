import React from "react";
import ReactDOM from "react-dom/client";

class TherapistsList extends React.Component {
  render() {
    return (
      <div>
        <h1>Therapists Listttg</h1>
      </div>
    );
  }
}

const therapistsList = ReactDOM.createRoot(
  document.getElementById("therapist-list-container")
);
therapistsList.render(<TherapistsList />);
