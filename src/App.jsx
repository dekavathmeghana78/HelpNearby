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
          <div className="logo">HelpNearby</div>

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
          <h1>Blood Bank Dashboard</h1>

          <p style={{ color: "#666" }}>
            Manage incoming blood assistance requests.
          </p>

          {/* REQUEST EXISTS */}
          {requestData ? (
            <div
              style={{
                background: "white",
                borderRadius: "18px",
                padding: "30px",
                marginTop: "30px",
                boxShadow:
                  "0 8px 30px rgba(0,0,0,0.08)",
              }}
            >
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <div>
                  <span
                    style={{
                      background:
                        requestData.urgency ===
                        "Emergency"
                          ? "#ffe1e1"
                          : "#fff2cc",
                      color:
                        requestData.urgency ===
                        "Emergency"
                          ? "#c62828"
                          : "#8a6500",
                      padding: "7px 14px",
                      borderRadius: "20px",
                      fontWeight: "bold",
                    }}
                  >
                    {requestData.urgency}
                  </span>

                  <h2 style={{ marginTop: "15px" }}>
                    🩸 Blood Assistance Request
                  </h2>

                  <p>
                    Request received from a
                    patient in{" "}
                    {requestData.location}
                  </p>
                </div>

                <strong>
                  {requestData.requestId}
                </strong>
              </div>

              {/* DETAILS */}
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns:
                    "repeat(2, minmax(0, 1fr))",
                  gap: "18px",
                  marginTop: "25px",
                }}
              >
                <Detail
                  title="Patient"
                  value={requestData.patientName}
                />

                <Detail
                  title="Blood Group"
                  value={`🩸 ${requestData.bloodGroup}`}
                />

                <Detail
                  title="Units Required"
                  value={`${requestData.units} Unit(s)`}
                />

                <Detail
                  title="Contact"
                  value={requestData.contactNumber}
                />

                <Detail
                  title="Location"
                  value={`📍 ${requestData.location}`}
                />

                <Detail
                  title="Resource"
                  value={requestData.resourceName}
                />
              </div>

              {/* STATUS */}
              <div
                style={{
                  marginTop: "25px",
                  padding: "18px",
                  borderRadius: "12px",
                  background:
                    requestStatus === "Accepted"
                      ? "#e8f8ed"
                      : requestStatus === "Rejected"
                      ? "#ffe9e9"
                      : "#fff8df",
                  display: "flex",
                  justifyContent:
                    "space-between",
                  alignItems: "center",
                  flexWrap: "wrap",
                  gap: "10px",
                }}
              >
                <span>Current Status</span>

                <strong
                  style={{ fontSize: "18px" }}
                >
                  {requestStatus === "Accepted"
                    ? "🟢 Request Accepted"
                    : requestStatus === "Rejected"
                    ? "🔴 Request Rejected"
                    : "🟡 Waiting for Response"}
                </strong>
              </div>

              {/* ACTION BUTTONS */}
              {requestStatus ===
                "Waiting for Response" && (
                <div
                  style={{
                    display: "flex",
                    gap: "15px",
                    marginTop: "25px",
                    width: "100%",
                  }}
                >
                  <button
                    onClick={handleAccept}
                    style={{
                      flex: 1,
                      padding: "15px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#22c55e",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    ✓ Accept Request
                  </button>

                  <button
                    onClick={handleReject}
                    style={{
                      flex: 1,
                      padding: "15px",
                      border: "none",
                      borderRadius: "10px",
                      background: "#ef4444",
                      color: "white",
                      fontSize: "16px",
                      fontWeight: "bold",
                      cursor: "pointer",
                    }}
                  >
                    ✕ Reject Request
                  </button>
                </div>
              )}

              {/* ACCEPTED */}
              {requestStatus === "Accepted" && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "18px",
                    borderRadius: "12px",
                    background: "#e8f8ed",
                    color: "#176b35",
                  }}
                >
                  <h3>
                    ✅ Request Accepted
                  </h3>

                  <p>
                    The blood bank has accepted
                    the assistance request.
                  </p>

                  <p>
                    The patient can now be
                    contacted using the provided
                    contact number.
                  </p>
                </div>
              )}

              {/* REJECTED */}
              {requestStatus === "Rejected" && (
                <div
                  style={{
                    marginTop: "20px",
                    padding: "18px",
                    borderRadius: "12px",
                    background: "#ffe9e9",
                    color: "#a51d1d",
                  }}
                >
                  <h3>
                    ❌ Request Rejected
                  </h3>

                  <p>
                    This request was rejected by
                    the blood bank.
                  </p>
                </div>
              )}
            </div>
          ) : (
            <div
              style={{
                marginTop: "30px",
                padding: "40px",
                background: "white",
                borderRadius: "18px",
                textAlign: "center",
              }}
            >
              <h2>No Active Requests</h2>

              <p>
                Submit a blood assistance request
                to see it here.
              </p>

              <button
                className="primary-button"
                onClick={() => setPage("blood")}
              >
                Create Blood Request
              </button>
            </div>
          )}
        </main>
      </div>
    );
  }

  return null;
}


// Reusable detail box
function Detail({ title, value }) {
  return (
    <div
      style={{
        background: "#f7f9fa",
        padding: "18px",
        borderRadius: "12px",
      }}
    >
      <div
        style={{
          color: "#777",
          fontSize: "14px",
          marginBottom: "7px",
        }}
      >
        {title}
      </div>

      <strong
        style={{
          fontSize: "17px",
        }}
      >
        {value}
      </strong>
    </div>
  );
}

export default App;
