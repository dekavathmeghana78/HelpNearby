import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");
    // Medicine request details
  const [medicineName, setMedicineName] = useState("");
  const [medicineQuantity, setMedicineQuantity] = useState("");
  const [medicineLocation, setMedicineLocation] = useState("");

  // Blood request details
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [urgency, setUrgency] = useState("");
  const [location, setLocation] = useState("");

  // Matching resources
  const [matches, setMatches] = useState([]);

  // Assistance request
  const [selectedResource, setSelectedResource] = useState(null);
  const [requestType, setRequestType] = useState("");
  const [patientName, setPatientName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [requestSent, setRequestSent] = useState(false);
  const [requestStatus, setRequestStatus] = useState("Waiting for Respons");

  // Services
  const services = [
    {
      icon: "🩸",
      title: "Blood Assistance",
      text: "Find blood banks and donor support",
    },
    {
      icon: "💊",
      title: "Medicine",
      text: "Find nearby medicine availability",
    },
    {
      icon: "🦽",
      title: "Medical Equipment",
      text: "Find or request equipment",
    },
    {
      icon: "🏥",
      title: "Hospitals & Clinics",
      text: "Find nearby healthcare facilities",
    },
    {
      icon: "🔬",
      title: "Diagnostics",
      text: "Find nearby diagnostic services",
    },
    {
      icon: "🤝",
      title: "Volunteers",
      text: "Connect with people willing to help",
    },
  ];

  // Prototype/demo resources
  const bloodResources = [
    {
      name: "Indian Red Cross Society Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "A+", "B+"],
      distance: 2.1,
      availability: "Check Availability",
      verified: true,
    },
    {
      name: "Institute of Preventive Medicine Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "O-", "A+"],
      distance: 3.4,
      availability: "Check Availability",
      verified: true,
    },
    {
      name: "TSRTC Hospital Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "B+"],
      distance: 4.2,
      availability: "Check Availability",
      verified: true,
    },
    {
      name: "Thalassemia & Sickle Cell Society Blood Bank",
      type: "Blood Bank",
      blood: ["A+", "O+"],
      distance: 6.8,
      availability: "Check Availability",
      verified: true,
    },
  ];

  // Find nearby matching resources
  function findMatches() {
    if (!bloodGroup || !units || !urgency || !location) {
      alert("Please fill all the required details.");
      return;
    }

    const filtered = bloodResources
      .filter((resource) => resource.blood.includes(bloodGroup))
      .sort((a, b) => a.distance - b.distance);

    setMatches(filtered);
    setPage("results");
  }

  // HOME PAGE
  if (page === "home") {
    return (
      <div className="app">

        <header className="navbar">

          <div className="logo">
            <span>✚</span>
            HelpNearby
          </div>

          <div className="location">
            📍 Your Location
          </div>

        </header>

        <main>

          <section className="hero">

            <p className="tagline">
              MEDICAL ASSISTANCE, NEARBY
            </p>

            <h1>
              Find the right help,
              <br />
              <span>when you need it.</span>
            </h1>

            <p className="description">
              HelpNearby connects you with nearby verified medical
              resources, healthcare services and willing volunteers.
            </p>

            <div className="search-box">

              🔍

              <input
                type="text"
                placeholder="What medical help do you need?"
              />

              <button>
                Find Help
              </button>

            </div>

          </section>

          <section className="services">

            <div className="section-heading">

              <h2>
                What do you need help with?
              </h2>

              <p>
                Select a service to get started
              </p>

            </div>

            <div className="service-grid">

              {services.map((service) => (

                <div
                  className="service-card"
                  key={service.title}
                  onClick={() => {
                    if (service.title === "Blood Assistance") {
                      setPage("blood");
                    } else if (service.title === "Medicine") {
                      setPage("medicine");
                    } else {
                      alert(`${service.title} module coming next!`);
                    }
                  }}
                >

                  <div className="service-icon">
                    {service.icon}
                  </div>

                  <h3>
                    {service.title}
                  </h3>

                  <p>
                    {service.text}
                  </p>

                  <button className="view-button">
                    Find Help →
                  </button>

                </div>

              ))}

            </div>

          </section>

          <section className="emergency">

            <div>

              <h2>
                🚨 Need urgent assistance?
              </h2>

              <p>
                Create an urgent request and find relevant
                nearby support.
              </p>

            </div>

            <button>
              Request Urgent Help
            </button>

          </section>

        </main>

        <footer>

          <p>
            HelpNearby © 2026
          </p>

          <p>
            Connecting people with nearby medical assistance.
          </p>

        </footer>

      </div>
    );
  }

  // BLOOD REQUEST PAGE
  if (page === "blood") {
    return (
      <div className="app">

        <header className="navbar">

          <div
            className="logo"
            onClick={() => setPage("home")}
            style={{ cursor: "pointer" }}
          >
            <span>✚</span>
            HelpNearby
          </div>

          <div className="location">
            📍 Your Location
          </div>

        </header>

        <main className="request-page">

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="request-container">

            <div className="request-header">

              <div className="large-icon">
                🩸
              </div>

              <h1>
                Blood Assistance
              </h1>

              <p>
                Enter the requirement and we will find relevant
                nearby resources.
              </p>

            </div>

            <form className="request-form">

              <label>
                Blood Group
              </label>

              <select
                value={bloodGroup}
                onChange={(e) =>
                  setBloodGroup(e.target.value)
                }
              >

                <option value="">
                  Select blood group
                </option>

                <option value="A+">
                  A+
                </option>

                <option value="A-">
                  A-
                </option>

                <option value="B+">
                  B+
                </option>

                <option value="B-">
                  B-
                </option>

                <option value="AB+">
                  AB+
                </option>

                <option value="AB-">
                  AB-
                </option>

                <option value="O+">
                  O+
                </option>

                <option value="O-">
                  O-
                </option>

              </select>

              <label>
                Units Required
              </label>

              <input
                type="number"
                min="1"
                value={units}
                onChange={(e) =>
                  setUnits(e.target.value)
                }
                placeholder="Enter number of units"
              />

              <label>
                Urgency
              </label>

              <select
                value={urgency}
                onChange={(e) =>
                  setUrgency(e.target.value)
                }
              >

                <option value="">
                  Select urgency
                </option>

                <option value="Normal">
                  Normal
                </option>

                <option value="Urgent">
                  Urgent
                </option>

                <option value="Emergency">
                  Emergency
                </option>

              </select>

              <label>
                Location
              </label>

              <input
                type="text"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
                placeholder="Enter hospital or location"
              />

              <button
                type="button"
                className="find-button"
                onClick={findMatches}
              >
                Find Nearby Help
              </button>

            </form>

          </div>

        </main>

      </div>
    );
  } 
    // MEDICINE ASSISTANCE PAGE
  if (page === "medicine") {
    return (
      <div className="app">

        <header className="navbar">

          <div
            className="logo"
            onClick={() => setPage("home")}
            style={{ cursor: "pointer" }}
          >
            <span>✚</span>
            HelpNearby
          </div>

          <div className="location">
            📍 Your Location
          </div>

        </header>

        <main className="request-page">

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Back
          </button>

          <div className="request-container">

            <div className="request-header">

              <div className="large-icon">
                💊
              </div>

              <h1>
                Medicine Assistance
              </h1>

              <p>
                Enter the medicine you need and we will help
                you find nearby availability.
              </p>

            </div>

            <form
              className="request-form"
              onSubmit={(e) => {
                e.preventDefault();

                if (!medicineName || !medicineLocation) {
                  alert("Please enter medicine name and location.");
                  return;
                }

                setPage("medicine-results");
              }}
            >

              <label>
                Medicine Name
              </label>

              <input
                type="text"
                value={medicineName}
                onChange={(e) =>
                  setMedicineName(e.target.value)
                }
                placeholder="Enter medicine name"
              />

              <label>
                Quantity Required
              </label>

              <input
                type="number"
                min="1"
                value={medicineQuantity}
                onChange={(e) =>
                  setMedicineQuantity(e.target.value)
                }
                placeholder="Enter quantity"
              />

              <label>
                Location
              </label>

              <input
                type="text"
                value={medicineLocation}
                onChange={(e) =>
                  setMedicineLocation(e.target.value)
                }
                placeholder="Enter hospital or location"
              />

              <label>
                Prescription (Optional)
              </label>

              <input
                type="file"
                accept=".jpg,.jpeg,.png,.pdf"
              />

              <button
                type="submit"
                className="find-button"
              >
                Find Nearby Medicine
              </button>

            </form>

          </div>

        </main>

      </div>
    );
  }
    // MEDICINE RESULTS PAGE
  if (page === "medicine-results") {
    return (
      <div className="app">

        <header className="navbar">

          <div
            className="logo"
            onClick={() => setPage("home")}
            style={{ cursor: "pointer" }}
          >
            <span>✚</span>
            HelpNearby
          </div>

          <div className="location">
            📍 {medicineLocation}
          </div>

        </header>

        <main className="results-page">

          <button
            className="back-button"
            onClick={() => setPage("medicine")}
          >
            ← Back
          </button>

          <div className="results-header">
            <h1>Medicine Availability</h1>
            <p>
              Showing nearby medicine providers for your request.
            </p>
          </div>

          <div className="request-summary">
            <p>
              <strong>Medicine:</strong> {medicineName}
            </p>

            <p>
              <strong>Quantity:</strong>{" "}
              {medicineQuantity || "Not specified"}
            </p>

            <p>
              <strong>Location:</strong> {medicineLocation}
            </p>
          </div>

          <div className="results-list">

            <div className="result-card">

              <div className="result-info">

                <h3>Demo Pharmacy 1</h3>

                <div className="result-details">
                  📍 Near your requested location
                </div>

                <div className="available">
                  ✓ Medicine available
                </div>

                <div className="verified">
                  ✓ Verified provider
                </div>

              </div>

              <button
                className="connect-button"
                onClick={() => {
                  setSelectedResource(medicineName);
                  setRequestSent(false);
                  setRequestStatus("");
                }}
              >
                Connect
              </button>

            </div>

            <div className="result-card">

              <div className="result-info">

                <h3>Demo Pharmacy 2</h3>

                <div className="result-details">
                  📍 Nearby medicine provider
                </div>

                <div className="available">
                  ✓ Medicine available
                </div>

                <div className="verified">
                  ✓ Verified provider
                </div>

              </div>

              <button
                className="connect-button"
                onClick={() => {
                  setSelectedResource(medicineName);
                  setRequestSent(false);
                  setRequestStatus("");
                }}
              >
                Connect
              </button>

            </div>

          </div>

        </main>

      </div>
    );
  }
    // BLOOD BANK DASHBOARD
  if (page === "dashboard") {
    return (
      <div className="app">

        <header className="navbar">

          <div
            className="logo"
            onClick={() => setPage("home")}
            style={{ cursor: "pointer" }}
          >
            <span>✚</span>
            HelpNearby
          </div>

          <div className="location">
            🏥 Blood Bank Dashboard
          </div>

        </header>

        <main className="dashboard-page">

          <button
            className="back-button"
            onClick={() => setPage("results")}
          >
            ← Back to Requests
          </button>

          <div className="dashboard-header">

            <div>
              <p className="tagline">
                RESOURCE DASHBOARD
              </p>

              <h1>
                Blood Bank Dashboard
              </h1>

              <p>
                Manage incoming medical assistance requests.
              </p>
            </div>

            <div className="dashboard-status">
              🟢 Online
            </div>

          </div>

          <div className="dashboard-card">

            <div className="request-top">

              <div>
                <span className="emergency-badge">
                  🚨 {urgency}
                </span>

                <h2>
                  Blood Assistance Request
                </h2>

                <p>
                  Request received from a patient in Hyderabad
                </p>
              </div>

              <div className="request-number">
                #HN-001
              </div>

            </div>

            <div className="dashboard-details">

              <div>
                <span>Patient</span>
                <strong>
                  {patientName || "Patient"}
                </strong>
              </div>

              <div>
                <span>Blood Group</span>
                <strong>
                  🩸 {bloodGroup}
                </strong>
              </div>

              <div>
                <span>Units Required</span>
                <strong>
                  {units} Unit(s)
                </strong>
              </div>

              <div>
                <span>Contact</span>
                <strong>
                  {contactNumber || "Not provided"}
                </strong>
              </div>

              <div>
                <span>Location</span>
                <strong>
                  📍 {location}
                </strong>
              </div>

            </div>

            <div className="dashboard-request-status">

              <span>
                Current Status
              </span>

              <strong>
                {requestStatus === "Accepted"
                  ? "🟢 Request Accepted"
                  : requestStatus === "Rejected"
                  ? "🔴 Request Rejected"
                  : "🟡 Waiting for Response"}
              </strong>

            </div>

            {requestStatus === "Waiting for Response" && (

              <div className="dashboard-actions">

                <button
                  className="accept-button"
                  onClick={() =>
                    setRequestStatus("Accepted")
                  }
                >
                  ✓ Accept Request
                </button>

                <button
                  className="reject-button"
                  onClick={() =>
                    setRequestStatus("Rejected")
                  }
                >
                  ✕ Reject Request
                </button>

              </div>

            )}

            {requestStatus === "Accepted" && (

              <div className="accepted-message">

                <h3>
                  ✅ Request Accepted
                </h3>

                <p>
                  The blood bank has accepted the assistance
                  request. The patient can now be contacted.
                </p>

              </div>

            )}

            {requestStatus === "Rejected" && (

              <div className="rejected-message">

                <h3>
                  ❌ Request Rejected
                </h3>

                <p>
                  This resource cannot fulfil the request.
                  The system can search for another nearby
                  resource.
                </p>

                <button
                  className="send-request-button"
                  onClick={() => {
                    setRequestStatus("Waiting for Response");
                    setPage("results");
                  }}
                >
                  Find Another Resource
                </button>

              </div>

            )}

          </div>

        </main>

      </div>
    );
  }


  // RESULTS PAGE
  return (
    <div className="app">

      <header className="navbar">

        <div
          className="logo"
          onClick={() => setPage("home")}
          style={{ cursor: "pointer" }}
        >
          <span>✚</span>
          HelpNearby***
        </div>

        <div className="location">
          📍 {location}
        </div>

      </header>

      <main className="results-page">

        <button
          className="back-button"
          onClick={() => setPage("blood")}
        >
          ← Modify Request
        </button>

        <div className="results-header">

          <div>

            <h1>
              Nearby Matches
            </h1>

            <p>
              Showing resources matching{" "}
              <strong>{bloodGroup}</strong> blood
              requirement near{" "}
              <strong>{location}</strong>.
            </p>

          </div>

          <div className="match-count">
            {matches.length} Matches
          </div>

        </div>

        <div className="request-summary">

          <span>
            🩸 {bloodGroup}
          </span>

          <span>
            Units: {units}
          </span>

          <span>
            ⚠️ {urgency}
          </span>

          <span>
            📍 {location}
          </span>

        </div>

        <div className="results-list">

          {matches.length > 0 ? (

            matches.map((resource, index) => (

              <div
                className="result-card"
                key={resource.name}
              >

                <div className="result-rank">
                  #{index + 1}
                </div>

                <div className="result-icon">
                  {resource.type === "Blood Bank"
                    ? "🩸"
                    : "🤝"}
                </div>

                <div className="result-info">

                  <h2>
                    {resource.name}
                  </h2>

                  <p>
                    {resource.type}
                  </p>

                  <div className="result-details">

                    <span>
                      📍 {resource.distance} km
                    </span>

                    <span className="available">
                      🟢 {resource.availability}
                    </span>

                    {resource.verified && (
                      <span className="verified">
                        ✓ Verified
                      </span>
                    )}

                  </div>

                </div>

                <button
                  className="connect-button"
                  onClick={() => {
                    setSelectedResource(resource);
                    setRequestSent(false);
                  }}
                >
                  Connect
                </button>

              </div>

            ))

          ) : (

            <div className="no-results">

              <h2>
                No matching resources found
              </h2>

              <p>
                Try expanding the search radius or changing
                the requirement.
              </p>

            </div>

          )}

        </div>

        {/* ASSISTANCE REQUEST POPUP */}

        {selectedResource && (

          <div className="request-overlay">

            <div className="request-modal">

              <button
                className="close-modal"
                onClick={() =>
                  setSelectedResource(null)
                }
              >
                ✕
              </button>

              {!requestSent ? (

                <>

                  <div className="modal-icon">
                    {requestType === "medicine" ? "💊" : "🩸"}
                  </div>

                  <h2>
                    {requestType === "medicine"
                    ? "Request Medicine Assistance"
                    : "Request Blood Assistance"}
                    </h2>

                  <p>
                    {requestType === "medicine"
                      ? "Send an assistance request for "
                      : "Send an assistance request to "}
                      <strong>
                        {requestType === "medicine"
                        ? selectedResource
                        : selectedResource.name}
                      </strong>
                  </p>

                  <label>
                    Patient Name
                  </label>

                  <input
                    type="text"
                    placeholder="Enter patient name"
                    value={patientName}
                    onChange={(e) =>
                      setPatientName(e.target.value)
                    }
                  />

                  <label>
                    Contact Number
                  </label>

                  <input
                    type="tel"
                    placeholder="Enter contact number"
                    value={contactNumber}
                    onChange={(e) =>
                      setContactNumber(e.target.value)
                    }
                  />

                  <div className="modal-summary">

  {requestType === "medicine" ? (
    <>
      <p>
        💊 Medicine:{" "}
        <strong>{medicineName}</strong>
      </p>

      <p>
        📦 Quantity Required:{" "}
        <strong>
          {medicineQuantity || "Not specified"}
        </strong>
      </p>

      <p>
        📍 Location:{" "}
        <strong>{medicineLocation}</strong>
      </p>
    </>
  ) : (
    <>
      <p>
        🩸 Blood Group:{" "}
        <strong>{bloodGroup}</strong>
      </p>

      <p>
        💉 Units Required:{" "}
        <strong>{units}</strong>
      </p>

      <p>
        ⚠️ Urgency:{" "}
        <strong>{urgency}</strong>
      </p>

      <p>
        📍 Location:{" "}
        <strong>{location}</strong>
      </p>
    </>
  )}

</div>

                  <button
                    className="send-request-button"
                    onClick={() => {

                      if (!patientName || !contactNumber) {

                        alert(
                          "Please enter patient name and contact number."
                        );

                        return;
                      }

                      setRequestSent(true);

                    }}
                  >
                    Send Assistance Request
                  </button>

                </>

              ) : (

                <div className="success-message">

                  <div className="success-icon">
                    ✅
                  </div>

                  <h2>
                    Request Sent Successfully!
                  </h2>

                  <p>
                    Your assistance request has been sent to:
                  </p>

                  <strong>
                    {selectedResource.name}
                  </strong>

                  <div className="status-box">

  🟡{" "}
  <strong>
    Waiting for Response
  </strong>

  <br />

  <small>
    {requestType === "medicine"
      ? "The medicine provider can now review your request."
      : "The blood bank/resource can now review your request."}
  </small>

</div>

                  <button
                    className="send-request-button"
                    onClick={() => {
  setSelectedResource(null);

  if (requestType === "medicine") {
    setPage("medicine-results");
  } else {
    setPage("dashboard");
  }
}}
                  >
                    {requestType === "medicine"
  ? "Back to Medicine Results"
  : "Open Blood Bank Dashboard"}
                  </button>

                </div>

              )}

            </div>

          </div>

        )}

      </main>

    </div>
  );
}

export default App;
