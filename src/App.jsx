import { useState } from "react";
import "./App.css";

function App() {
  const [page, setPage] = useState("home");

  // Blood request
  const [bloodGroup, setBloodGroup] = useState("");
  const [units, setUnits] = useState("");
  const [urgency, setUrgency] = useState("");
  const [location, setLocation] = useState("");

  // Patient details
  const [patientName, setPatientName] = useState("");
  const [contactNumber, setContactNumber] = useState("");

  // Request
  const [requestData, setRequestData] = useState(null);
  const [requestStatus, setRequestStatus] =
    useState("Waiting for Response");

  // Selected blood resource
  const [selectedResource, setSelectedResource] = useState(null);

  // Demo blood resources
  const bloodResources = [
    {
      name: "Indian Red Cross Society Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "A+", "B+"],
      distance: 2.1,
      verified: true,
    },
    {
      name: "Institute of Preventive Medicine Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "O-", "A+"],
      distance: 3.4,
      verified: true,
    },
    {
      name: "TSRTC Hospital Blood Bank",
      type: "Blood Bank",
      blood: ["O+", "B+"],
      distance: 4.2,
      verified: true,
    },
    {
      name: "Thalassemia & Sickle Cell Society Blood Bank",
      type: "Blood Bank",
      blood: ["A+", "O+"],
      distance: 6.8,
      verified: true,
    },
  ];

  // Find matching resources
  const matches = bloodResources.filter((resource) =>
    resource.blood.includes(bloodGroup)
  );

  // Smart emergency analysis
  const priority =
    urgency === "Emergency"
      ? "HIGH"
      : urgency === "Urgent"
      ? "MEDIUM"
      : "NORMAL";

  const recommendedAction =
    urgency === "Emergency"
      ? "Contact nearby verified blood resources immediately."
      : "Find and connect with suitable nearby healthcare resources.";

  // Submit blood request
  const handleBloodRequest = (e) => {
    e.preventDefault();

    if (
      !bloodGroup ||
      !units ||
      !urgency ||
      !location
    ) {
      alert("Please fill all blood request details.");
      return;
    }

    setPage("results");
  };

  // Send assistance request
  const handleSendRequest = () => {
    if (!selectedResource) {
      alert("Please select a blood bank first.");
      return;
    }

    if (!patientName || !contactNumber) {
      alert("Please enter patient name and contact number.");
      return;
    }

    const newRequest = {
      requestId: "#HN-001",
      patientName: patientName,
      contactNumber: contactNumber,
      bloodGroup: bloodGroup,
      units: units,
      location: location,
      urgency: urgency,
      resourceName: selectedResource.name,
    };

    // IMPORTANT:
    // Store the actual submitted request
    setRequestData(newRequest);

    // Reset status for new request
    setRequestStatus("Waiting for Response");

    // Close popup
    setSelectedResource(null);

    // Open dashboard
    setPage("dashboard");
  };

  // Accept request
  const handleAccept = () => {
    setRequestStatus("Accepted");
  };

  // Reject request
  const handleReject = () => {
    setRequestStatus("Rejected");
  };

  // HOME PAGE
  if (page === "home") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">HelpNearby</div>

          <div className="nav-links">
            <button onClick={() => setPage("home")}>
              Home
            </button>

            <button onClick={() => setPage("dashboard")}>
              Blood Bank Dashboard
            </button>
          </div>
        </nav>

        <main className="hero">
          <div className="hero-content">
            <h1>
              Hyperlocal Medical
              <br />
              <span>Assistance Platform</span>
            </h1>

            <p>
              Find nearby medical assistance, blood,
              medicines and healthcare resources when
              you need them most.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("blood")}
            >
              🩸 Request Blood Assistance
            </button>
          </div>

          <div className="hero-card">
            <h2>How HelpNearby Works</h2>

            <div className="step">
              <span>1</span>
              <div>
                <strong>Create Request</strong>
                <p>Tell us what medical help you need.</p>
              </div>
            </div>

            <div className="step">
              <span>2</span>
              <div>
                <strong>Smart Matching</strong>
                <p>Find suitable nearby resources.</p>
              </div>
            </div>

            <div className="step">
              <span>3</span>
              <div>
                <strong>Connect</strong>
                <p>Connect with the available resource.</p>
              </div>
            </div>

            <div className="step">
              <span>4</span>
              <div>
                <strong>Get Assistance</strong>
                <p>Track your request until resolved.</p>
              </div>
            </div>
          </div>
        </main>
      </div>
    );
  }

  // BLOOD REQUEST PAGE
  if (page === "blood") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">HelpNearby</div>

          <button
            className="back-button"
            onClick={() => setPage("home")}
          >
            ← Home
          </button>
        </nav>

        <main className="form-page">
          <div className="form-card">
            <h1>🩸 Blood Assistance Request</h1>

            <p className="form-subtitle">
              Enter the details below to find nearby
              blood assistance.
            </p>

            <form onSubmit={handleBloodRequest}>
              <label>Blood Group</label>

              <select
                value={bloodGroup}
                onChange={(e) =>
                  setBloodGroup(e.target.value)
                }
              >
                <option value="">Select Blood Group</option>
                <option value="O+">O+</option>
                <option value="O-">O-</option>
                <option value="A+">A+</option>
                <option value="A-">A-</option>
                <option value="B+">B+</option>
                <option value="B-">B-</option>
                <option value="AB+">AB+</option>
                <option value="AB-">AB-</option>
              </select>

              <label>Units Required</label>

              <input
                type="number"
                min="1"
                placeholder="Example: 2"
                value={units}
                onChange={(e) =>
                  setUnits(e.target.value)
                }
              />

              <label>Urgency</label>

              <select
                value={urgency}
                onChange={(e) =>
                  setUrgency(e.target.value)
                }
              >
                <option value="">
                  Select Urgency
                </option>
                <option value="Emergency">
                  Emergency
                </option>
                <option value="Urgent">
                  Urgent
                </option>
                <option value="Normal">
                  Normal
                </option>
              </select>

              <label>Location</label>

              <input
                type="text"
                placeholder="Example: Hyderabad"
                value={location}
                onChange={(e) =>
                  setLocation(e.target.value)
                }
              />

              <button
                type="submit"
                className="primary-button full"
              >
                Find Nearby Assistance
              </button>
            </form>
          </div>
        </main>
      </div>
    );
  }

  // RESULTS PAGE
  if (page === "results") {
    return (
      <div className="app">
        <nav className="navbar">
          <div className="logo">HelpNearby</div>

          <button
            className="back-button"
            onClick={() => setPage("blood")}
          >
            ← Back
          </button>
        </nav>

        <main className="results-page">
          <h1>Nearby Matches</h1>

          <p>
            Showing resources matching{" "}
            <strong>{bloodGroup}</strong> blood
            requirement near{" "}
            <strong>{location}</strong>.
          </p>

          {/* SMART ANALYSIS */}
          <div className="smart-analysis">
            <h2>🤖 Smart Emergency Analysis</h2>

            <p>
              <strong>Requirement:</strong>{" "}
              Blood Assistance
            </p>

            <p>
              <strong>Blood Group:</strong>{" "}
              {bloodGroup}
            </p>

            <p>
              <strong>Units:</strong> {units}
            </p>

            <p>
              <strong>Location:</strong>{" "}
              {location}
            </p>

            <p>
              <strong>Priority:</strong>{" "}
              {priority}
            </p>

            <p>
              <strong>Recommended Action:</strong>{" "}
              {recommendedAction}
            </p>
          </div>

          <h2>
            {matches.length} Nearby Matches
          </h2>

          {matches.length === 0 ? (
            <div className="empty-box">
              No matching resources found.
            </div>
          ) : (
            <div className="matches">
              {matches.map((resource, index) => (
                <div
                  className="match-card"
                  key={index}
                >
                  <div>
                    <h2>{resource.name}</h2>

                    <p>{resource.type}</p>

                    <p>
                      🩸 Available Groups:{" "}
                      {resource.blood.join(", ")}
                    </p>

                    <p>
                      📍 {resource.distance} km away
                    </p>

                    {resource.verified && (
                      <span className="verified">
                        ✓ Verified Resource
                      </span>
                    )}
                  </div>

                  <button
                    className="primary-button"
                    onClick={() =>
                      setSelectedResource(resource)
                    }
                  >
                    Connect
                  </button>
                </div>
              ))}
            </div>
          )}
        </main>

        {/* CONNECT MODAL */}
        {selectedResource && (
          <div className="modal-overlay">
            <div className="modal">
              <h2>
                Send Assistance Request
              </h2>

              <p>
                Request assistance from:
              </p>

              <strong>
                {selectedResource.name}
              </strong>

              <label>Patient Name</label>

              <input
                type="text"
                placeholder="Enter patient name"
                value={patientName}
                onChange={(e) =>
                  setPatientName(e.target.value)
                }
              />

              <label>Contact Number</label>

              <input
                type="text"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) =>
                  setContactNumber(e.target.value)
                }
              />

              <div className="modal-buttons">
                <button
                  className="secondary-button"
                  onClick={() =>
                    setSelectedResource(null)
                  }
                >
                  Cancel
                </button>

                <button
                  className="primary-button"
                  onClick={handleSendRequest}
                >
                  Send Assistance Request
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }

  // BLOOD BANK DASHBOARD
  if (page === "dashboard") {
  return (
    <div className="app">
      <nav className="navbar">
        <div className="logo">
          HelpNearby
        </div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </nav>

      <main
        style={{
          maxWidth: "1100px",
          margin: "40px auto",
          padding: "20px",
        }}
      >

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            marginBottom: "25px",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <div>
            <p
              style={{
                color: "#22c55e",
                fontWeight: "bold",
                marginBottom: "5px",
              }}
            >
              RESOURCE DASHBOARD
            </p>

            <h1 style={{ margin: 0 }}>
              🏥 Blood Bank Dashboard
            </h1>

            <p style={{ color: "#666" }}>
              Manage incoming medical assistance requests.
            </p>
          </div>

          <div
            style={{
              background: "#e8f8ed",
              color: "#16803c",
              padding: "10px 18px",
              borderRadius: "20px",
              fontWeight: "bold",
            }}
          >
            🟢 Online
          </div>
        </div>

        {requestData ? (
          <div
            style={{
              background: "white",
              borderRadius: "18px",
              padding: "30px",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >

            {/* REQUEST HEADER */}
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: "20px",
                flexWrap: "wrap",
              }}
            >

              <div>

                <span
                  style={{
                    display: "inline-block",
                    background:
                      requestData.urgency === "Emergency"
                        ? "#ffe1e1"
                        : "#fff2cc",
                    color:
                      requestData.urgency === "Emergency"
                        ? "#c62828"
                        : "#8a6500",
                    padding: "7px 14px",
                    borderRadius: "20px",
                    fontWeight: "bold",
                  }}
                >
                  🚨 {requestData.urgency}
                </span>

                <h2 style={{ marginTop: "15px" }}>
                  🩸 Blood Assistance Request
                </h2>

                <p style={{ color: "#666" }}>
                  Request received from a patient in{" "}
                  {requestData.location}
                </p>

              </div>

              <div
                style={{
                  background: "#f1f5f9",
                  padding: "10px 15px",
                  borderRadius: "10px",
                  fontWeight: "bold",
                }}
              >
                {requestData.requestId || "#HN-001"}
              </div>

            </div>


            {/* REQUEST DETAILS */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns:
                  "repeat(2, minmax(0, 1fr))",
                gap: "18px",
                marginTop: "25px",
              }}
            >

              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Patient
                </span>

                <strong style={{ fontSize: "17px" }}>
                  {requestData.patientName}
                </strong>
              </div>


              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Blood Group
                </span>

                <strong style={{ fontSize: "17px" }}>
                  🩸 {requestData.bloodGroup}
                </strong>
              </div>


              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Units Required
                </span>

                <strong style={{ fontSize: "17px" }}>
                  {requestData.units} Unit(s)
                </strong>
              </div>


              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Contact
                </span>

                <strong style={{ fontSize: "17px" }}>
                  {requestData.contactNumber}
                </strong>
              </div>


              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Location
                </span>

                <strong style={{ fontSize: "17px" }}>
                  📍 {requestData.location}
                </strong>
              </div>


              <div
                style={{
                  background: "#f7f9fa",
                  padding: "18px",
                  borderRadius: "12px",
                }}
              >
                <span
                  style={{
                    display: "block",
                    color: "#777",
                    fontSize: "14px",
                    marginBottom: "7px",
                  }}
                >
                  Requested Resource
                </span>

                <strong style={{ fontSize: "17px" }}>
                  🏥 {requestData.resourceName}
                </strong>
              </div>

            </div>


            {/* CURRENT STATUS */}
            <div
              style={{
                marginTop: "25px",
                padding: "18px 20px",
                borderRadius: "12px",
                background:
                  requestStatus === "Accepted"
                    ? "#e8f8ed"
                    : requestStatus === "Rejected"
                    ? "#ffe9e9"
                    : "#fff8df",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >

              <span
                style={{
                  color: "#777",
                  fontSize: "15px",
                }}
              >
                Current Status
              </span>

              <strong style={{ fontSize: "18px" }}>
                {requestStatus === "Accepted"
                  ? "🟢 Request Accepted"
                  : requestStatus === "Rejected"
                  ? "🔴 Request Rejected"
                  : "🟡 Waiting for Response"}
              </strong>

            </div>


            {/* ACCEPT / REJECT BUTTONS */}
            {requestStatus === "Waiting for Response" && (
              <div
                style={{
                  display: "flex",
                  gap: "15px",
                  marginTop: "25px",
                  width: "100%",
                }}
              >

                <button
                  onClick={() =>
                    setRequestStatus("Accepted")
                  }
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "#22c55e",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ✓ Accept Request
                </button>


                <button
                  onClick={() =>
                    setRequestStatus("Rejected")
                  }
                  style={{
                    flex: 1,
                    padding: "16px",
                    background: "#ef4444",
                    color: "white",
                    border: "none",
                    borderRadius: "10px",
                    fontSize: "16px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  ✕ Reject Request
                </button>

              </div>
            )}


            {/* ACCEPTED MESSAGE */}
            {requestStatus === "Accepted" && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  background: "#e8f8ed",
                  borderRadius: "12px",
                  color: "#176b35",
                }}
              >

                <h3>
                  ✅ Request Accepted
                </h3>

                <p>
                  The blood bank has accepted the
                  assistance request.
                </p>

                <p>
                  The patient can now be contacted
                  using the provided contact number.
                </p>

              </div>
            )}


            {/* REJECTED MESSAGE */}
            {requestStatus === "Rejected" && (
              <div
                style={{
                  marginTop: "20px",
                  padding: "20px",
                  background: "#ffe9e9",
                  borderRadius: "12px",
                  color: "#a51d1d",
                }}
              >

                <h3>
                  ❌ Request Rejected
                </h3>

                <p>
                  This resource cannot fulfil the
                  request.
                </p>

                <button
                  onClick={() => {
                    setRequestStatus(
                      "Waiting for Response"
                    );
                    setPage("results");
                  }}
                  style={{
                    marginTop: "10px",
                    padding: "12px 20px",
                    background: "#2563eb",
                    color: "white",
                    border: "none",
                    borderRadius: "8px",
                    fontWeight: "bold",
                    cursor: "pointer",
                  }}
                >
                  Find Another Resource
                </button>

              </div>
            )}

          </div>
        ) : (

          /* NO REQUEST */
          <div
            style={{
              background: "white",
              padding: "50px",
              borderRadius: "18px",
              textAlign: "center",
              boxShadow: "0 8px 30px rgba(0,0,0,0.08)",
            }}
          >

            <div style={{ fontSize: "50px" }}>
              📭
            </div>

            <h2>
              No Active Requests
            </h2>

            <p style={{ color: "#777" }}>
              There are currently no blood assistance
              requests.
            </p>

            <button
              onClick={() => setPage("blood")}
              style={{
                padding: "13px 24px",
                background: "#2563eb",
                color: "white",
                border: "none",
                borderRadius: "9px",
                fontWeight: "bold",
                cursor: "pointer",
              }}
            >
              Create Blood Request
            </button>

          </div>

        )}

      </main>

    </div>
  );
}
  // RESULTS PAGE
if (page === "results") {
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

        {/* RESULTS HEADER */}
        <div className="results-header">

          <div>
            <p className="tagline">
              SMART RESOURCE MATCHING
            </p>

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


        {/* REQUEST SUMMARY */}
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


        {/* SMART EMERGENCY ANALYSIS */}
        <div
          style={{
            background: "#eef8ff",
            border: "1px solid #8dd3ff",
            borderRadius: "14px",
            padding: "20px",
            margin: "25px 0",
          }}
        >

          <h2>
            🤖 Smart Emergency Analysis
          </h2>

          <p>
            <strong>Requirement:</strong>{" "}
            Blood Assistance
          </p>

          <p>
            <strong>Blood Group:</strong>{" "}
            {bloodGroup}
          </p>

          <p>
            <strong>Units:</strong>{" "}
            {units}
          </p>

          <p>
            <strong>Location:</strong>{" "}
            {location}
          </p>

          <p>
            <strong>Priority:</strong>{" "}
            {urgency === "Emergency"
              ? "HIGH"
              : urgency === "Urgent"
              ? "MEDIUM"
              : "NORMAL"}
          </p>

          <p>
            <strong>Recommended Action:</strong>{" "}
            {urgency === "Emergency"
              ? "Contact nearby verified blood resources immediately."
              : "Find and connect with suitable nearby healthcare resources."}
          </p>

        </div>


        {/* MATCHING RESOURCES */}
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
                  🩸
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
                Try changing the blood group,
                location or requirement.
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
                    🩸
                  </div>

                  <h2>
                    Request Blood Assistance
                  </h2>

                  <p>
                    Send an assistance request to{" "}
                    <strong>
                      {selectedResource.name}
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

                      setRequestData({
                        requestId: "#HN-001",
                        patientName,
                        contactNumber,
                        bloodGroup,
                        units,
                        urgency,
                        location,
                        resourceName:
                          selectedResource.name,
                      });

                      setRequestStatus(
                        "Waiting for Response"
                      );

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
                    Your assistance request has been
                    sent to:
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
                      The blood bank/resource can now
                      review your request.
                    </small>

                  </div>


                  <button
                    className="send-request-button"
                    onClick={() => {
                      setSelectedResource(null);
                      setPage("dashboard");
                    }}
                  >
                    Open Blood Bank Dashboard
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
