import { useState } from "react";

import "./App.css";  
const translations = {
  English: {
    home: "Home",
    tagline: "MEDICAL ASSISTANCE, NEARBY",
    heading: "Find the right help,",
    subtitle: "right when you need it.",
    location: "Your Location",
    blood: "Blood Assistance",
    medicine: "Medicine",
    equipment: "Medical Equipment",
    hospitals: "Hospitals & Clinics",
    diagnostics: "Diagnostics",
    send: "Send Assistance Request",
    waiting: "Waiting for Response",
    accept: "Accept Request",
    reject: "Reject Request",
    search: "Search nearby help...",
    chooseLanguage: "Choose language",
    serviceTitle: "What do you need help with?",
serviceSubtitle: "Select a service to get started",
bloodDesc: "Find blood banks and donor support",
medicineDesc: "Find nearby medicine availability",
equipmentDesc: "Find or request equipment",
hospitalDesc: "Find nearby healthcare facilities",
diagnosticsDesc: "Find nearby diagnostic services",
volunteerTitle: "Volunteers",
volunteerDesc: "Connect with people willing to help",
findHelp: "Find Help",
  },
  Telugu: {
    home: "హోమ్",
    tagline: "వైద్య సహాయం, మీ సమీపంలో",
    heading: "సరైన సహాయాన్ని కనుగొనండి,",
    subtitle: "మీకు అవసరమైన సమయంలో.",
    location: "మీ స్థానం",
    blood: "రక్త సహాయం",
    medicine: "మందులు",
    equipment: "వైద్య పరికరాలు",
    hospitals: "ఆసుపత్రులు & క్లినిక్‌లు",
    diagnostics: "నిర్ధారణ పరీక్షలు",
    send: "సహాయం కోసం అభ్యర్థన పంపండి",
    waiting: "సమాధానం కోసం వేచి ఉంది",
    accept: "అభ్యర్థనను అంగీకరించండి",
    reject: "అభ్యర్థనను తిరస్కరించండి",
    search: "సమీపంలోని సహాయం కోసం వెతకండి...",
    chooseLanguage: "భాషను ఎంచుకోండి",
    serviceTitle: "మీకు ఏ సహాయం కావాలి?",
serviceSubtitle: "ప్రారంభించడానికి ఒక సేవను ఎంచుకోండి",
bloodDesc: "రక్త బ్యాంకులు మరియు రక్తదాతల సహాయం కనుగొనండి",
medicineDesc: "సమీపంలో మందుల లభ్యతను కనుగొనండి",
equipmentDesc: "వైద్య పరికరాలను కనుగొనండి లేదా అభ్యర్థించండి",
hospitalDesc: "సమీపంలోని ఆసుపత్రులను కనుగొనండి",
diagnosticsDesc: "సమీపంలోని నిర్ధారణ పరీక్షల సేవలను కనుగొనండి",
volunteerTitle: "స్వచ్ఛంద సేవకులు",
volunteerDesc: "సహాయం చేయడానికి సిద్ధంగా ఉన్న వ్యక్తులతో కలవండి",
findHelp: "సహాయం పొందండి",  
  },
  Hindi: {
    home: "होम",
    tagline: "चिकित्सा सहायता, आपके पास",
    heading: "सही सहायता खोजें,",
    subtitle: "जब आपको इसकी ज़रूरत हो।",
    location: "आपकी लोकेशन",
    blood: "रक्त सहायता",
    medicine: "दवाइयाँ",
    equipment: "चिकित्सा उपकरण",
    hospitals: "अस्पताल और क्लीनिक",
    diagnostics: "जाँच सेवाएँ",
    send: "सहायता अनुरोध भेजें",
    waiting: "जवाब की प्रतीक्षा है",
    accept: "अनुरोध स्वीकार करें",
    reject: "अनुरोध अस्वीकार करें",
    search: "आस-पास सहायता खोजें...",
    chooseLanguage: "भाषा चुनें",
    serviceTitle: "आपको किस चीज़ में मदद चाहिए?",
serviceSubtitle: "शुरू करने के लिए एक सेवा चुनें",
bloodDesc: "ब्लड बैंक और रक्तदाता सहायता खोजें",
medicineDesc: "आस-पास दवाओं की उपलब्धता खोजें",
equipmentDesc: "चिकित्सा उपकरण खोजें या अनुरोध करें",
hospitalDesc: "आस-पास के अस्पताल खोजें",
diagnosticsDesc: "आस-पास जाँच सेवाएँ खोजें",
volunteerTitle: "स्वयंसेवक",
volunteerDesc: "मदद करने के इच्छुक लोगों से जुड़ें",
findHelp: "मदद पाएँ",
  }
};

function App() {
  const [language, setLanguage] = useState("English");
const t = (key) => translations[language][key] || key;
  
  const [volunteerCategory, setVolunteerCategory] = useState("Any Help");
  const [volunteerLocation, setVolunteerLocation] = useState("");
  const [volunteerName, setVolunteerName] = useState("");
  const [volunteerPhone, setVolunteerPhone] = useState("");
  const [volunteerSkills, setVolunteerSkills] = useState("");
  const [volunteerAvailability, setVolunteerAvailability] = useState("Available");
  const [registeredVolunteers, setRegisteredVolunteers] = useState([]);
  const [volunteerRequests, setVolunteerRequests] = useState({});

  const [page, setPage] = useState("home");


  // Blood request details

  const [bloodGroup, setBloodGroup] = useState("");

  const [units, setUnits] = useState("");

  const [urgency, setUrgency] = useState("");

  const [location, setLocation] = useState("");
  // Medicine request details
const [medicineName, setMedicineName] = useState("");
const [medicineQuantity, setMedicineQuantity] = useState("");
const [medicineLocation, setMedicineLocation] = useState("");
// Medical Equipment request details
const [equipmentName, setEquipmentName] = useState("");
const [equipmentQuantity, setEquipmentQuantity] = useState("");
const [equipmentLocation, setEquipmentLocation] = useState("");
const [equipmentMode, setEquipmentMode] = useState("");
  // Hospital & Clinic request details
const [hospitalRequirement, setHospitalRequirement] = useState("");
const [hospitalLocation, setHospitalLocation] = useState("");
const [hospitalUrgency, setHospitalUrgency] = useState("");
  // Diagnostic request details
const [diagnosticTest, setDiagnosticTest] = useState("");
const [diagnosticLocation, setDiagnosticLocation] = useState("");
const [diagnosticUrgency, setDiagnosticUrgency] = useState("");
// Matching resources
  const [matches, setMatches] = useState([]);



  // Assistance request

  const [selectedResource, setSelectedResource] = useState(null);

  const [patientName, setPatientName] = useState("");

  const [contactNumber, setContactNumber] = useState("");

  const [requestSent, setRequestSent] = useState(false);

  const [requestStatus, setRequestStatus] = useState("");



  // Services

  const services = [

    {

      icon: "🩸",

title: t("blood"),
text: t("bloodDesc"),
    },

    {

      icon: "💊",

      title: t("medicine"),
text: t("medicineDesc"),
    },

    {

      icon: "🦽",

      title: t("equipment"),

      text: t("equipmentDesc"),

    },

    {

      icon: "🏥",

      title: t("hospitals"),
      text: t("hospitalDesc"),
    },

    {

      icon: "🔬",

      title: t("diagnostics"),

      text: t("diagnosticsDesc"),

    },

    {

      icon: "🤝",

      title: t("volunteerTitle"),

      text:t("volunteerDesc"),

    },

  ];



  // Prototype/demo resources

  // Prototype/demo medicine resources
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
const medicineResources = [
  {
    name: "Apollo Pharmacy",
    type: "Pharmacy",
    medicines: ["Paracetamol", "Amoxicillin", "Cetirizine", "Azithromycin"],
    distance: 1.8,
    availability: "Available",
    verified: true,
  },
  {
    name: "MedPlus",
    type: "Pharmacy",
    medicines: ["Paracetamol", "Cetirizine", "Pantoprazole", "Azithromycin"],
    distance: 2.6,
    availability: "Available",
    verified: true,
  },
  {
    name: "Vijaya Medical & General Store",
    type: "Pharmacy",
    medicines: ["Paracetamol", "Ibuprofen", "Cetirizine"],
    distance: 3.2,
    availability: "Check Availability",
    verified: true,
  },
  {
    name: "LocalCare Pharmacy",
    type: "Pharmacy",
    medicines: ["Paracetamol", "Amoxicillin", "Ibuprofen"],
    distance: 4.5,
    availability: "Available",
    verified: true,
  },
];
  // Prototype/demo medical equipment resources
const equipmentResources = [
  {
    name: "Apollo Homecare",
    type: "Medical Equipment Provider",
    equipment: ["Wheelchair", "Oxygen Concentrator", "Hospital Bed"],
    distance: 2.4,
    availability: "Available",
    verified: true,
  },
  {
    name: "MedPlus Equipment Services",
    type: "Medical Equipment Provider",
    equipment: ["Wheelchair", "Walker", "Nebulizer"],
    distance: 3.1,
    availability: "Available",
    verified: true,
  },
  {
    name: "CarePlus Medical Equipment",
    type: "Medical Equipment Provider",
    equipment: ["Hospital Bed", "Wheelchair", "Crutches"],
    distance: 4.3,
    availability: "Check Availability",
    verified: true,
  },
  {
    name: "HealthAid Equipment Store",
    type: "Medical Equipment Provider",
    equipment: ["Walker", "Crutches", "Nebulizer"],
    distance: 5.2,
    availability: "Available",
    verified: true,
  },
];
  
  // Prototype/demo hospital and clinic resources
const hospitalResources = [
  {
    name: "Apollo Hospitals",
    type: "Multi-Specialty Hospital",
    services: ["Emergency Care", "General Medicine", "Cardiology", "Surgery"],
    distance: 2.1,
    availability: "Available",
    verified: true,
  },
  {
    name: "CARE Hospitals",
    type: "Multi-Specialty Hospital",
    services: ["Emergency Care", "General Medicine", "Orthopedics", "ICU"],
    distance: 3.4,
    availability: "Available",
    verified: true,
  },
  {
    name: "KIMS Hospitals",
    type: "Multi-Specialty Hospital",
    services: ["Emergency Care", "Cardiology", "Neurology", "Surgery"],
    distance: 4.2,
    availability: "Check Availability",
    verified: true,
  },
  {
    name: "LocalCare Clinic",
    type: "General Clinic",
    services: ["General Medicine", "Consultation", "First Aid"],
    distance: 1.7,
    availability: "Available",
    verified: true,
  },
];
  // Prototype/demo diagnostic resources
const diagnosticResources = [
  {
    name: "Apollo Diagnostics",
    type: "Diagnostic Center",
    tests: ["Blood Test", "X-Ray", "CT Scan", "MRI"],
    distance: 1.9,
    availability: "Available",
    verified: true,
  },
  {
    name: "Vijaya Diagnostic Centre",
    type: "Diagnostic Center",
    tests: ["Blood Test", "X-Ray", "Ultrasound"],
    distance: 2.7,
    availability: "Available",
    verified: true,
  },
  {
    name: "Lucid Diagnostics",
    type: "Diagnostic Center",
    tests: ["Blood Test", "CT Scan", "MRI"],
    distance: 3.5,
    availability: "Check Availability",
    verified: true,
  },
  {
    name: "Dr. Lal PathLabs",
    type: "Diagnostic Center",
    tests: ["Blood Test", "Urine Test", "X-Ray"],
    distance: 4.2,
    availability: "Available",
    verified: true,
  },
];
  // DIAGNOSTIC MATCHING
const findDiagnostics = () => {
  if (!diagnosticTest.trim()) {
    alert("Please enter a diagnostic test.");
    return;
  }

  const filtered = diagnosticResources.filter((resource) =>
    resource.tests.some(
      (test) =>
        test.toLowerCase() === diagnosticTest.trim().toLowerCase()
    )
  );

  setMatches(filtered);
  setPage("diagnostic-results");
};
  // HOSPITAL & CLINIC MATCHING
const findHospitals = () => {
  const filtered = hospitalResources.filter((resource) =>
    resource.services.some(
      (service) =>
        service.toLowerCase() === hospitalRequirement.toLowerCase()
    )
  );

  setMatches(filtered);
  setPage("hospital-results");
};
  

// MEDICAL EQUIPMENT MATCHING
const findEquipment = () => {
  const filtered = equipmentResources.filter((resource) =>
    resource.equipment.some(
      (equipment) =>
        equipment.toLowerCase() === equipmentName.toLowerCase()
    )
  );

  setMatches(filtered);
  setPage("equipment-results");
};
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
        // MEDICINE MATCHING
const findMedicine = () => {
  if (!medicineName || !medicineQuantity || !medicineLocation) {
    alert("Please fill all the required details.");
    return;
  }

  const searchMedicine = medicineName.trim().toLowerCase();

  const filtered = medicineResources.filter((resource) =>
    resource.medicines.some(
      (medicine) =>
        medicine.toLowerCase() === searchMedicine
    )
  );

  setMatches(filtered);
  setPage("medicine-results");
};



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
            📍 {t("location")}
          </div>
           <select
    value={language}
    onChange={(e) => setLanguage(e.target.value)}
    aria-label="Choose language"
  >
    <option value="English">English</option>
    <option value="Telugu">తెలుగు</option>
    <option value="Hindi">हिन्दी</option>
  </select>
</header>
        <main>
          <section className="hero">
            <p className="tagline">
              {t("tagline")}
            </p>
            <h1>
              {t("heading")}
              <br />
              <span>{t("subtitle")}</span>
            </h1>
            <p className="description">
              {t("description")}
            </p>
            <div className="search-box">



              🔍



              <input

                type="text"

                placeholder={t("search")}

              />



              <button>

                Find Help

              </button>



            </div>



          </section>



          <section className="services">



            <div className="section-heading">



              <h2>

                {t("serviceTitle")}

              </h2>



              <p>

{t("serviceSubtitle")}
              </p>



            </div>



            <div className="service-grid">



              {services.map((service) => (



                <div

                  className="service-card"

                  key={service.title}

                 
                  onClick={() =>
                    service.title === "Blood Assistance"
                      ? setPage("blood")
                      : service.title === "Medicine"
                      ? setPage("medicine")
                      : service.title === "Medical Equipment"
                      ? setPage("equipment")
                      : service.title === "Hospitals & Clinics"
                      ? setPage("hospital")
                      : service.title === "Diagnostics"
                      ? setPage("diagnostics")
                      : service.title === "Volunteers"
                      ? setPage("volunteers")
                      : alert(service.title + " module coming next!")
                  }
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

{t("findHelp")} →

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
  
if (page === "diagnostics-dashboard") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">✚ HelpNearby</div>
        <button onClick={() => setPage("diagnostic-results")}>
          ← Back to Results
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🔬 Diagnostics Dashboard</h1>
          <p>Selected diagnostic centre and request details.</p>
        </div>

        <div className="request-card">
          <h2>
            {selectedDiagnosticResource?.name || "Diagnostic Centre"}
          </h2>

          <p>
            🧪 Test: <strong>{diagnosticTest}</strong>
          </p>
          <p>
            📍 Your location: <strong>{diagnosticLocation}</strong>
          </p>
          <p>
            🚨 Urgency: <strong>{diagnosticUrgency || "Not specified"}</strong>
          </p>
          <p>
            📏 Distance:{" "}
            <strong>
              {selectedDiagnosticResource
                ? `${selectedDiagnosticResource.distance} km`
                : "Not available"}
            </strong>
          </p>
          <p>
            Availability:{" "}
            <strong>
              {selectedDiagnosticResource?.availability || "Not confirmed"}
            </strong>
          </p>

          <div className="status-box">
            🟡 <strong>Request not yet confirmed</strong>
            <p>
              This is a prototype. Centre availability and request
              delivery have not been verified.
            </p>
          </div>

          <button
            className="connect-button"
            onClick={() => setPage("diagnostics")}
          >
            ← Modify Search
          </button>
        </div>
      </main>
    </div>
  );
}
  
if (page === "diagnostic-results") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">✚ HelpNearby</div>
        <button onClick={() => setPage("diagnostics")}>
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🔬 Nearby Diagnostic Centres</h1>
          <p>Choose a centre for your required test.</p>
          <p>
            Test: <strong>{diagnosticTest}</strong>
          </p>
          <p>
            Location: <strong>{diagnosticLocation}</strong>
          </p>
        </div>

        {matches.length === 0 ? (
          <div className="request-card">
            <h2>No matching centres found</h2>
            <p>Try another diagnostic test.</p>
            <button onClick={() => setPage("diagnostics")}>
              Modify Search
            </button>
          </div>
        ) : (
          matches.map((resource) => (
            <div className="match-card" key={resource.name}>
              <div className="match-card-header">
                <h2>{resource.name}</h2>
                {resource.verified && (
                  <span className="verified-badge">
                    ✓ Verified
                  </span>
                )}
              </div>

              <p>🧪 Tests: {resource.tests.join(", ")}</p>
              <p>📍 {resource.distance} km away</p>
              <p>🟢 {resource.availability}</p>

              <button
                className="connect-button"
                onClick={() => {
                  setSelectedDiagnosticResource(resource);
                  setPage("diagnostics-dashboard");
                }}
              >
                View Centre Dashboard →
              </button>
            </div>
          ))
        )}
      </main>
    </div>
  );
}
  // DIAGNOSTIC SERVICES PAGE
if (page === "diagnostics") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">
          <span>✚</span>
          HelpNearby
        </div>

        <button onClick={() => setPage("home")}>
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🔬 Diagnostic Services</h1>
          <p>Find nearby diagnostic centers for the tests you need.</p>
        </div>

        <div className="request-card">
          <h2>Find Diagnostic Services</h2>

          <label>Diagnostic Test</label>
          <input
            type="text"
            placeholder="Example: Blood Test"
            value={diagnosticTest}
            onChange={(e) => setDiagnosticTest(e.target.value)}
          />

          <label>Location</label>
          <input
            type="text"
            placeholder="Example: Hyderabad"
            value={diagnosticLocation}
            onChange={(e) => setDiagnosticLocation(e.target.value)}
          />

          <label>Urgency</label>
          <select
            value={diagnosticUrgency}
            onChange={(e) => setDiagnosticUrgency(e.target.value)}
          >
            <option value="">Select urgency</option>
            <option value="Normal">Normal</option>
            <option value="Urgent">Urgent</option>
            <option value="Emergency">Emergency</option>
          </select>
          <button onClick={findDiagnostics}>
  Find Nearby Diagnostics →
</button>
        </div>
      </main>
    </div>
  );
}
  
      // MEDICINE REQUEST PAGE
if (page === "medicine") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>💊 Medicine Assistance</h1>
          <p>
            Find nearby pharmacies and medical stores that may have
            the medicine you need.
          </p>
        </div>

        <div className="request-card">
          <h2>Request Medicine</h2>

          <label>Medicine Name</label>
          <input
            type="text"
            placeholder="Example: Paracetamol"
            value={medicineName}
            onChange={(e) => setMedicineName(e.target.value)}
          />

          <label>Quantity Required</label>
          <input
            type="number"
            placeholder="Example: 10"
            value={medicineQuantity}
            onChange={(e) => setMedicineQuantity(e.target.value)}
          />

          <label>Your Location</label>
          <input
            type="text"
            placeholder="Example: Hyderabad"
            value={medicineLocation}
            onChange={(e) => setMedicineLocation(e.target.value)}
          />

          <button
            className="primary-button"
            onClick={findMedicine}
            disabled={!medicineName || !medicineQuantity || !medicineLocation}
          >
            🔎 Find Nearby Medicine
          </button>
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
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("medicine")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>💊 Nearby Medicine Matches</h1>

          <p>
            Showing pharmacies matching{" "}
            <strong>{medicineName}</strong> near{" "}
            <strong>{medicineLocation}</strong>.
          </p>
        </div>

        <div className="match-count">
          {matches.length} Matches
        </div>

        {matches.length === 0 ? (
          <div className="no-results">
            <h2>😔 No Nearby Matches Found</h2>
            <p>
              We couldn't find this medicine in the
              available prototype resources.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("medicine")}
            >
              ← Try Another Medicine
            </button>
          </div>
        ) : (
          <div className="matches-list">
            {matches.map((resource) => (
              <div
                className="match-card"
                key={resource.name}
              >
                <div className="match-card-header">
                  <div>
                    <h2 style={{ color: "#172033" }}>{resource.name}</h2>
                  </div>

                  {resource.verified && (
                    <span className="verified-badge">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div className="match-details">
                  <span>
                    💊 {medicineName}
                  </span>

                  <span>
                    📍 {resource.distance} km away
                  </span>

                  <span>
                    🟢 {resource.availability}
                  </span>
                </div>

                <button
                  className="connect-button"
                  onClick={() => {
  setSelectedResource(resource);
  setRequestSent(false);
}}
                  
                >
                  🤝 Connect
                </button>
              </div>
            ))}
          </div>
        )}
        {/* MEDICINE REQUEST POPUP */}
{selectedResource && page === "medicine-results"&& (
  <div className="request-overlay">

    <div className="request-modal">

      <button
        className="close-modal"
        onClick={() => setSelectedResource(null)}
      >
        ✕
      </button>

      {!requestSent ? (
        <>
          <div className="modal-icon">
            💊
          </div>

          <h2>
            Request Medicine Assistance
          </h2>

          <p>
            Send a medicine request to{" "}
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
              💊 Medicine:{" "}
              <strong>{medicineName}</strong>
            </p>

            <p>
              🔢 Quantity:{" "}
              <strong>{medicineQuantity}</strong>
            </p>

            <p>
              📍 Location:{" "}
              <strong>{medicineLocation}</strong>
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

              setRequestSent(true);
            }}
          >
            Send Medicine Request
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
            Your medicine request has been sent to:
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
              The pharmacy/resource can now review
              your medicine request.
            </small>

          </div>

          <button
            className="send-request-button"
            onClick={() => {
              setRequestSent(false);
              setPage("medicine-dashboard");
            }}
          >
            Continue
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

// MEDICINE RESOURCE DASHBOARD
if (page === "medicine-dashboard") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("medicine-results")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>💊 Medicine Request Dashboard</h1>
          <p>
            Manage incoming medicine assistance requests.
          </p>
        </div>

        <div className="request-card">
          <h2>📋 Current Request</h2>

          <div className="modal-summary">
            <p>
              👤 Patient:{" "}
              <strong>{patientName || "Not provided"}</strong>
            </p>

            <p>
              📞 Contact:{" "}
              <strong>{contactNumber || "Not provided"}</strong>
            </p>

            <p>
              💊 Medicine:{" "}
              <strong>{medicineName}</strong>
            </p>

            <p>
              🔢 Quantity:{" "}
              <strong>{medicineQuantity}</strong>
            </p>

            <p>
              📍 Location:{" "}
              <strong>{medicineLocation}</strong>
            </p>

            <p>
              🏪 Resource:{" "}
              <strong>
                {selectedResource?.name || "Medicine Resource"}
              </strong>
            </p>
          </div>

          {requestStatus === "Accepted" ? (

  <div className="accepted-message">
    🟢 <strong>Request Accepted</strong>
    <p>
      The medicine request has been accepted successfully.
    </p>
  </div>

) : requestStatus === "Rejected" ? (

  <div className="rejected-message">
    🔴 <strong>Request Rejected</strong>
    <p>
      The medicine request has been rejected.
    </p>
  </div>

) : (

  <>
    <div className="status-box">
      🟡 <strong>Request Received</strong>
      <br />
      Review the request and choose an action.
    </div>

    {requestStatus === "" && (
  <div className="button-group">
    
  </div>
)}
    {requestStatus === "Accepted" && (
  <div className="accepted-message">
    🟢 <strong>Request Accepted</strong>
    <p>The medicine request has been accepted successfully.</p>
  </div>
)}

{requestStatus === "Rejected" && (
  <div className="rejected-message">
    🔴 <strong>Request Rejected</strong>
    <p>The medicine request has been rejected.</p>
  </div>
)}
  </>

)}
          </div>
      </main>
    </div>
  );
}
// HOSPITAL & CLINICS PAGE
if (page === "hospital") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🏥 Hospitals & Clinics</h1>
          <p>
            Find nearby hospitals and clinics based on your healthcare
            requirement and urgency.
          </p>
        </div>

        <div className="request-card">
          <h2>Find Healthcare Assistance</h2>

          <label>Healthcare Requirement</label>

          <input
            type="text"
            placeholder="Example: Emergency Care"
            value={hospitalRequirement}
            onChange={(e) =>
              setHospitalRequirement(e.target.value)
            }
          />

          <label>Your Location</label>

          <input
            type="text"
            placeholder="Example: Hyderabad"
            value={hospitalLocation}
            onChange={(e) =>
              setHospitalLocation(e.target.value)
            }
          />

          <label>Urgency</label>

          <select
            value={hospitalUrgency}
            onChange={(e) =>
              setHospitalUrgency(e.target.value)
            }
          >
            <option value="">Select urgency</option>
            <option value="Emergency">🚨 Emergency</option>
            <option value="Urgent">🟠 Urgent</option>
            <option value="Normal">🟢 Normal</option>
          </select>

          <button
            className="primary-button"
            onClick={findHospitals}
            disabled={
              !hospitalRequirement ||
              !hospitalLocation ||
              !hospitalUrgency
            }
          >
            🔎 Find Nearby Hospitals
          </button>
        </div>
        {/* HOSPITAL REQUEST POPUP */}
{selectedResource && (
  <div className="request-overlay">
    <div className="request-modal">

      <button
        className="close-modal"
        onClick={() => setSelectedResource(null)}
      >
        ✕
      </button>

      {!requestSent ? (
        <>
          <div className="modal-icon">🏥</div>

          <h2>Request Hospital Assistance</h2>

          <p>
            Send your request to{" "}
            <strong>{selectedResource.name}</strong>
          </p>

          <label>Patient Name</label>

          <input
            type="text"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <label>Contact Number</label>

          <input
            type="tel"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <div className="modal-summary">
            <p>
              🏥 Hospital:{" "}
              <strong>{selectedResource.name}</strong>
            </p>

            <p>
              🩺 Requirement:{" "}
              <strong>{hospitalRequirement}</strong>
            </p>

            <p>
              🚨 Urgency:{" "}
              <strong>{hospitalUrgency}</strong>
            </p>

            <p>
              📍 Location:{" "}
              <strong>{hospitalLocation}</strong>
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

              setRequestSent(true);
            }}
          >
            Send Hospital Request
          </button>
        </>
      ) : (
        <div className="success-message">
          <div className="success-icon">✅</div>

          <h2>Request Sent Successfully!</h2>

          <p>Your hospital assistance request has been sent to:</p>

          <strong>{selectedResource.name}</strong>

          <div className="status-box">
            🟡 <strong>Waiting for Response</strong>
            <br />
            <small>
              The hospital can now review your request.
            </small>
          </div>

          <button
            className="send-request-button"
            onClick={() => {
              setRequestSent(false);
              setPage("hospital-dashboard");
            }}
          >
            Continue
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
  // DIAGNOSTIC SERVICES PAGE
if (page === "diagnostic") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🧪 Diagnostic Services</h1>
          <p>
            Find nearby diagnostic centers for the tests you need.
          </p>
        </div>

        <div className="request-card">
          <h2>Find Diagnostic Services</h2>

          <label>Diagnostic Test</label>
          <input
            type="text"
            placeholder="Example: Blood Test"
            value={diagnosticTest}
            onChange={(e) => setDiagnosticTest(e.target.value)}
          />

          <label>Your Location</label>
          <input
            type="text"
            placeholder="Example: Hyderabad"
            value={diagnosticLocation}
            onChange={(e) => setDiagnosticLocation(e.target.value)}
          />

          <label>Urgency</label>
          <select
            value={diagnosticUrgency}
            onChange={(e) => setDiagnosticUrgency(e.target.value)}
          >
            <option value="">Select urgency</option>
            <option value="Emergency">🚨 Emergency</option>
            <option value="Urgent">🟠 Urgent</option>
            <option value="Normal">🟢 Normal</option>
          </select>

          <button
            className="primary-button"
            onClick={findDiagnostics}
            disabled={
              !diagnosticTest ||
              !diagnosticLocation ||
              !diagnosticUrgency
            }
          >
            🔎 Find Nearby Diagnostics
          </button>
        </div>
      </main>
    </div>
  );
}
  // DIAGNOSTIC REQUEST PAGE
if (page === "diagnostic-request") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">✚ HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("diagnostic-results")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🔬 Diagnostic Assistance Request</h1>
          <p>Send an assistance request to the selected diagnostic center.</p>
        </div>

        <div className="request-card">
          <h2>{selectedResource?.name}</h2>

          <p>
            <strong>Service:</strong>{" "}
            {selectedResource?.type}
          </p>

          <p>
            <strong>Distance:</strong>{" "}
            {selectedResource?.distance} km away
          </p>

          {!requestSent ? (
            <>
              <label>Patient Name</label>
              <input
                type="text"
                placeholder="Enter patient name"
                value={patientName}
                onChange={(e) => setPatientName(e.target.value)}
              />

              <label>Contact Number</label>
              <input
                type="text"
                placeholder="Enter contact number"
                value={contactNumber}
                onChange={(e) => setContactNumber(e.target.value)}
              />

              <button
                className="primary-button"
                onClick={() => {
                  setRequestSent(true);
                  setRequestStatus("Waiting for Response");
                }}
              >
                📩 Send Request
              </button>
            </>
          ) : (
            <div className="status-box">
              🟡 <strong>Request Sent Successfully!</strong>
              <br />
              Your diagnostic assistance request has been sent to:
              <br />
              <strong>{selectedResource?.name}</strong>
              <br /><br />
              Current Status: <strong>Waiting for Response</strong>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
  // MEDICAL EQUIPMENT PAGE
if (page === "equipment") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🦽 Medical Equipment</h1>
          <p>
            Find nearby medical equipment or request equipment
            when you need assistance.
          </p>
        </div>

        <div className="request-card">
          <h2>What do you need?</h2>

          <button
            className="primary-button"
            onClick={() =>
              setPage("equipment-request")}
          >
            🔎 Find Equipment
          </button>

          <button
            className="primary-button"
            onClick={() => 
              setPage("equipment-request")}
          >
            📋 Request Equipment
          </button>
        </div>
      </main>
    </div>
  );
}
// MEDICAL EQUIPMENT REQUEST PAGE
if (page === "equipment-request") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("home")}
        >
          ← Home
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🦽 Medical Equipment Assistance</h1>
          <p>
            Find nearby medical equipment providers for your needs.
          </p>
        </div>

        <div className="request-card">
          <h2>Request Medical Equipment</h2>

          <label>Equipment Name</label>
          <input
            type="text"
            placeholder="Example: Wheelchair"
            value={equipmentName}
            onChange={(e) =>
              setEquipmentName(e.target.value)
            }
          />

          <label>Quantity Required</label>
          <input
            type="number"
            placeholder="Example: 1"
            value={equipmentQuantity}
            onChange={(e) =>
              setEquipmentQuantity(e.target.value)
            }
          />

          <label>Request Type</label>
          <select
            value={equipmentMode}
            onChange={(e) =>
              setEquipmentMode(e.target.value)
            }
          >
            <option value="">Select request type</option>
            <option value="Request">Request</option>
            <option value="Rent">Rent</option>
            <option value="Borrow">Borrow</option>
          </select>

          <label>Your Location</label>
          <input
            type="text"
            placeholder="Example: Hyderabad"
            value={equipmentLocation}
            onChange={(e) =>
              setEquipmentLocation(e.target.value)
            }
          />

          <button
            className="primary-button"
            onClick={findEquipment}
            disabled={
              !equipmentName ||
              !equipmentQuantity ||
              !equipmentMode ||
              !equipmentLocation
            }
          >
            🔎 Find Nearby Equipment
          </button>
        </div>
      </main>
    </div>
  );
}
  // HOSPITAL & CLINIC RESULTS PAGE
if (page === "hospital-results") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("hospital")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🏥 Nearby Hospitals & Clinics</h1>
          <p>
            Showing healthcare resources matching{" "}
            <strong>{hospitalRequirement}</strong> near{" "}
            <strong>{hospitalLocation}</strong>.
          </p>
        </div>

        <div className="match-count">
          {matches.length} Matches
        </div>

        {matches.length === 0 ? (
          <div className="no-results">
            <h2>😔 No Nearby Matches Found</h2>
            <p>
              We couldn't find a matching hospital or clinic in
              the available prototype resources.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("hospital")}
            >
              ← Try Another Requirement
            </button>
          </div>
        ) : (
          <div className="matches-list">
            {matches.map((resource) => (
              <div
                className="match-card"
                key={resource.name}
              >
                <div className="match-card-header">
                  <div>
                    <h2>{resource.name}</h2>
                    <p>{resource.type}</p>
                  </div>

                  {resource.verified && (
                    <span className="verified-badge">
                      ✓ Verified
                    </span>
                  )}
                </div>
                

                <div className="match-details">
                  <span>
                    🏥 {hospitalRequirement}
                  </span>

                  <span>
                    📍 {resource.distance} km away
                  </span>

                  <span>
                    🟢 {resource.availability}
                  </span>
                </div>
                <button
  className="primary-button"
  onClick={() => {
    setSelectedResource(resource);
    setRequestSent(false);
    setPage("diagnostic-results");
  }}
>
  Request Assistance
</button>

                <button
                  className="connect-button"
                  onClick={() => {
                    setSelectedResource(resource);
                    setRequestSent(false);
                  }}
                >
                  🤝 Connect
                </button>
              </div>
            ))}
          </div>
        )}
        {/* HOSPITAL REQUEST POPUP */}
{selectedResource && (
  <div className="request-overlay">
    <div className="request-modal">

      <button
        className="close-modal"
        onClick={() => setSelectedResource(null)}
      >
        ✕
      </button>

      {!requestSent ? (
        <>
          <div className="modal-icon">🏥</div>

          <h2>Request Hospital Assistance</h2>

          <p>
            Send your request to{" "}
            <strong>{selectedResource.name}</strong>
          </p>

          <label>Patient Name</label>
          <input
            type="text"
            placeholder="Enter patient name"
            value={patientName}
            onChange={(e) => setPatientName(e.target.value)}
          />

          <label>Contact Number</label>
          <input
            type="tel"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />

          <div className="modal-summary">
            <p>
              🏥 Hospital: <strong>{selectedResource.name}</strong>
            </p>

            <p>
              🩺 Requirement: <strong>{hospitalRequirement}</strong>
            </p>

            <p>
              🚨 Urgency: <strong>{hospitalUrgency}</strong>
            </p>

            <p>
              📍 Location: <strong>{hospitalLocation}</strong>
            </p>
          </div>

          <button
            className="send-request-button"
            onClick={() => {
              if (!patientName || !contactNumber) {
                alert("Please enter patient name and contact number.");
                return;
              }

              setRequestSent(true);
            }}
          >
            Send Hospital Request
          </button>
        </>
      ) : (
        <div className="success-message">

          <div className="success-icon">✅</div>

          <h2>Request Sent Successfully!</h2>

          <p>Your hospital assistance request has been sent to:</p>

          <strong>{selectedResource.name}</strong>

          <div className="status-box">
            🟡 <strong>Waiting for Response</strong>
            <br />
            <small>
              The hospital can now review your request.
            </small>
          </div>

          <button
            className="send-request-button"
            onClick={() => {
              setRequestSent(false);
              setPage("hospital-dashboard");
            }}
          >
            Continue
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
  // HOSPITAL RESOURCE DASHBOARD
if (page === "hospital-dashboard") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => 
            setPage("hospital-results")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🏥 Hospital Resource Dashboard</h1>
          <p>Manage incoming hospital assistance requests.</p>
        </div>

        <div className="request-card">
          <h2>📋 Hospital Assistance Request</h2>

          <p>
            👤 Patient: <strong>{patientName}</strong>
          </p>

          <p>
            📞 Contact: <strong>{contactNumber}</strong>
          </p>

          <p>
            🏥 Hospital:{" "}
            <strong>{selectedResource?.name}</strong>
          </p>

          <p>
            🩺 Requirement:{" "}
            <strong>{hospitalRequirement}</strong>
          </p>

          <p>
            🚨 Urgency: <strong>{hospitalUrgency}</strong>
          </p>

          <p>
            📍 Location: <strong>{hospitalLocation}</strong>
          </p>

          <div className="status-box">
            🟡 <strong>Request Status: Waiting for Response</strong>
          </div>

          <button
            className="primary-button"
            onClick={() => {
              setRequestStatus("Accepted");
            }}
          >
            ✅ Accept Request
          </button>

          <button
            className="primary-button"
            onClick={() => {
              setRequestStatus("Rejected");
            }}
          >
            ❌ Reject Request
          </button>

          {requestStatus === "Accepted" && (
            <div className="status-box">
              🟢 <strong>Request Accepted</strong>
              <br />
              The hospital has accepted the assistance request.
            </div>
          )}

          {requestStatus === "Rejected" && (
            <div className="status-box">
              🔴 <strong>Request Rejected</strong>
              <br />
              The hospital has rejected the assistance request.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
  // DIAGNOSTIC PROVIDER DASHBOARD
if (page === "diagnostic-dashboard") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("diagnostic-results")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🔬 Diagnostic Provider Dashboard</h1>
          <p>Manage incoming diagnostic assistance requests.</p>
        </div>

        <div className="request-card">
          <h2>Diagnostic Assistance Request</h2>

          <p>
            Request received from a patient in Hyderabad.
          </p>

          <div className="status-box">
            <strong>Current Status:</strong>{" "}
            {requestStatus || "Waiting for Response"}
          </div>

          <div style={{ display: "flex", gap: "15px", marginTop: "20px" }}>
            <button
              className="primary-button"
              onClick={() => setRequestStatus("Accepted")}
            >
              ✅ Accept Request
            </button>

            <button
              className="primary-button"
              onClick={() => setRequestStatus("Rejected")}
            >
              ❌ Reject Request
            </button>
          </div>

          {requestStatus === "Accepted" && (
            <div className="status-box">
              🟢 <strong>Request Accepted</strong>
              <br />
              The diagnostic center has accepted the assistance request.
            </div>
          )}

          {requestStatus === "Rejected" && (
            <div className="status-box">
              🔴 <strong>Request Rejected</strong>
              <br />
              The diagnostic center has rejected the assistance request.
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
  
  // MEDICAL EQUIPMENT RESULTS PAGE
if (page === "equipment-results") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("equipment")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🦽 Nearby Equipment Matches</h1>

          <p>
            Showing equipment matching{" "}
            <strong>{equipmentName}</strong> near{" "}
            <strong>{equipmentLocation}</strong>.
          </p>
        </div>

        <div className="match-count">
          {matches.length} Matches
        </div>

        {matches.length === 0 ? (
          <div className="no-results">
            <h2>😔 No Nearby Equipment Found</h2>

            <p>
              We couldn't find this equipment in the
              available prototype resources.
            </p>

            <button
              className="primary-button"
              onClick={() => setPage("equipment")}
            >
              ← Try Another Equipment
            </button>
          </div>
        ) : (
          <div className="matches-list">
            {matches.map((resource) => (
              <div
                className="match-card"
                key={resource.name}
              >
                <div className="match-card-header">
                  <div>
                    <h2>{resource.name}</h2>
                    <p>{resource.type}</p>
                  </div>

                  {resource.verified && (
                    <span className="verified-badge">
                      ✓ Verified
                    </span>
                  )}
                </div>

                <div className="match-details">
                  <span>
                    🦽 {equipmentName}
                  </span>

                  <span>
                    📍 {resource.distance} km away
                  </span>

                  <span>
                    🟢 {resource.availability}
                  </span>

                  <span>
                    📋 {equipmentMode}
                  </span>
                </div>

                <button
                  className="connect-button"
                  onClick={() => {
                    setSelectedResource(resource);
                    setRequestSent(false);
                  }}
                >
                  🤝 Connect
                </button>
              </div>
            ))}
          </div>
        )}
        {/* EQUIPMENT REQUEST POPUP */}
{selectedResource && (
  <div className="request-overlay">
    <div className="request-modal">

      <button
        className="close-modal"
        onClick={() => setSelectedResource(null)}
      >
        ✕
      </button>

      {!requestSent ? (
        <>
          <div className="modal-icon">
            🦽
          </div>

          <h2>Request Equipment Assistance</h2>

          <p>
            Send a request to{" "}
            <strong>{selectedResource.name}</strong>
          </p>

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
            type="tel"
            placeholder="Enter contact number"
            value={contactNumber}
            onChange={(e) =>
              setContactNumber(e.target.value)
            }
          />

          <div className="modal-summary">
            <p>
              🦽 Equipment:{" "}
              <strong>{equipmentName}</strong>
            </p>

            <p>
              🔢 Quantity:{" "}
              <strong>{equipmentQuantity}</strong>
            </p>

            <p>
              📋 Request Type:{" "}
              <strong>{equipmentMode}</strong>
            </p>

            <p>
              📍 Location:{" "}
              <strong>{equipmentLocation}</strong>
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

              setRequestSent(true);
            }}
          >
            Send Equipment Request
          </button>
        </>
      ) : (
        <div className="success-message">

          <div className="success-icon">
            ✅
          </div>

          <h2>Request Sent Successfully!</h2>

          <p>
            Your equipment request has been sent to:
          </p>

          <strong>{selectedResource.name}</strong>

          <div className="status-box">
            🟡 <strong>Waiting for Response</strong>
            <br />
            <small>
              The equipment provider can now review
              your request.
            </small>
          </div>

          <button
            className="send-request-button"
            onClick={() => {
              setRequestSent(false);
              setPage("equipment-dashboard");
            }}
          >
            Continue
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
  // MEDICAL EQUIPMENT DASHBOARD
if (page === "equipment-dashboard") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo">HelpNearby</div>

        <button
          className="back-button"
          onClick={() => setPage("equipment-results")}
        >
          ← Back
        </button>
      </header>

      <main className="container">
        <div className="page-header">
          <h1>🦽 Equipment Request Dashboard</h1>
          <p>
            Manage incoming medical equipment requests.
          </p>
        </div>

        <div className="request-card">
          <h2>📋 Current Request</h2>

          <div className="modal-summary">
            <p>
              👤 Patient:{" "}
              <strong>{patientName || "Not provided"}</strong>
            </p>

            <p>
              📞 Contact:{" "}
              <strong>{contactNumber || "Not provided"}</strong>
            </p>

            <p>
              🦽 Equipment:{" "}
              <strong>{equipmentName}</strong>
            </p>

            <p>
              🔢 Quantity:{" "}
              <strong>{equipmentQuantity}</strong>
            </p>

            <p>
              📋 Request Type:{" "}
              <strong>{equipmentMode}</strong>
            </p>

            <p>
              📍 Location:{" "}
              <strong>{equipmentLocation}</strong>
            </p>

            <p>
              🏪 Provider:{" "}
              <strong>
                {selectedResource?.name || "Equipment Provider"}
              </strong>
            </p>
          </div>

          <div className="status-box">
            🟡 <strong>Request Received</strong>
            <br />
            <small>
              Review the request and choose an action.
            </small>
          </div>

          <div className="button-group">
          
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
  
if (page === "volunteers") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          <span>✚</span> HelpNearby
        </div>
      </header>

      <main className="service-page">
        <button className="back-button" onClick={() => setPage("home")}>
          ← Back to Home
        </button>

        <div className="service-heading">
          <h1>Volunteer Support 🤝</h1>
          <p>Find people willing to help or join our volunteer community.</p>
        </div>

        <div className="dashboard-card volunteer-form">
          <h2>Find Volunteers</h2>

          <label>Type of Help Needed</label>
          <select
            value={volunteerCategory}
            onChange={(e) => setVolunteerCategory(e.target.value)}
          >
            <option>Any Help</option>
            <option>Hospital Support</option>
            <option>Medical Transport</option>
            <option>Medicine Pickup</option>
          </select>

          <label>Your Location</label>
          <input
            value={volunteerLocation}
            onChange={(e) => setVolunteerLocation(e.target.value)}
            placeholder="Enter your area"
          />

          <button
            className="send-request-button"
            onClick={() => {
              if (!volunteerLocation.trim()) {
                alert("Please enter your location.");
                return;
              }
              setPage("volunteer-results");
            }}
          >
            Find Volunteers
          </button>

          <button
            className="volunteer-secondary-button"
            onClick={() => setPage("volunteer-register")}
          >
            + Become a Volunteer
          </button>
        </div>
      </main>
    </div>
  );
}
  
if (page === "volunteer-results") {
  const matchingVolunteers = registeredVolunteers.filter((volunteer) => {
    const categoryMatches =
      volunteerCategory === "Any Help" ||
      volunteer.category === volunteerCategory ||
      volunteer.category === "Any Help";

    const locationMatches = volunteer.location
      .toLowerCase()
      .includes(volunteerLocation.trim().toLowerCase());

    return categoryMatches && locationMatches;
  });

  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          <span>✚</span> HelpNearby
        </div>
      </header>

      <main className="results-page">
        <button
          className="back-button"
          onClick={() => setPage("volunteers")}
        >
          ← Modify Search
        </button>

        <div className="results-header">
          <div>
            <h1>Nearby Volunteers</h1>
            <p>Volunteers matching your search.</p>
          </div>
          <div className="match-count">
            {matchingVolunteers.length} Matches
          </div>
        </div>

        <div className="results-list">
          {matchingVolunteers.length > 0 ? (
            matchingVolunteers.map((volunteer) => (
              <div className="result-card" key={volunteer.id}>
                <div className="result-icon">🤝</div>

                <div className="result-info">
                  <h2>{volunteer.name}</h2>
                  <p>{volunteer.category}</p>
                  <p>📍 {volunteer.location}</p>
                  <p>{volunteer.skills}</p>
                  <span className="available">
                    {volunteer.availability === "Currently Unavailable"
                      ? "⚪ Currently Unavailable"
                      : `🟢 ${volunteer.availability}`}
                  </span>
                </div>

                <button
                  className="connect-button"
                  disabled={
                    volunteer.availability === "Currently Unavailable" ||
                    Boolean(volunteerRequests[volunteer.id])
                  }
                  onClick={() => {
                    setVolunteerRequests((previous) => ({
                      ...previous,
                      [volunteer.id]: "Request Sent",
                    }));
                  }}
                >
                  {volunteerRequests[volunteer.id] || "Request Help"}
                </button>
              </div>
            ))
          ) : (
            <div className="no-results">
              <h2>No matching volunteers found</h2>
              <p>Try another location or select Any Help.</p>
              <button
                className="send-request-button"
                onClick={() => setPage("volunteer-register")}
              >
                Become a Volunteer
              </button>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}
  
if (page === "volunteer-register") {
  return (
    <div className="app">
      <header className="navbar">
        <div className="logo" onClick={() => setPage("home")}>
          <span>✚</span> HelpNearby
        </div>
      </header>

      <main className="service-page">
        <button
          className="back-button"
          onClick={() => setPage("volunteers")}
        >
          ← Back
        </button>

        <div className="dashboard-card volunteer-form">
          <h1>Become a Volunteer 🤝</h1>
          <p>Register to help people in your community.</p>

          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={volunteerName}
            onChange={(e) => setVolunteerName(e.target.value)}
          />

          <label>Contact Number</label>
          <input
            type="tel"
            placeholder="10-digit mobile number"
            value={volunteerPhone}
            onChange={(e) => setVolunteerPhone(e.target.value)}
          />

          <label>Location</label>
          <input
            type="text"
            placeholder="e.g. Ameerpet, Hyderabad"
            value={volunteerLocation}
            onChange={(e) => setVolunteerLocation(e.target.value)}
          />

          <label>Type of Help</label>
          <select
            value={volunteerCategory}
            onChange={(e) => setVolunteerCategory(e.target.value)}
          >
            <option>Any Help</option>
            <option>Hospital Support</option>
            <option>Medical Transport</option>
            <option>Medicine Pickup</option>
          </select>

          <label>Skills or Additional Details</label>
          <textarea
            placeholder="Describe how you can help"
            value={volunteerSkills}
            onChange={(e) => setVolunteerSkills(e.target.value)}
          />

          <label>Availability</label>
          <select
            value={volunteerAvailability}
            onChange={(e) => setVolunteerAvailability(e.target.value)}
          >
            <option>Available</option>
            <option>Available on Weekends</option>
            <option>Currently Unavailable</option>
          </select>

          <button
            className="send-request-button"
            onClick={() => {
              if (
                !volunteerName.trim() ||
                !volunteerPhone.trim() ||
                !volunteerLocation.trim()
              ) {
                alert("Please fill in your name, phone number and location.");
                return;
              }

              if (!/^[0-9]{10}$/.test(volunteerPhone.trim())) {
                alert("Enter a valid 10-digit mobile number.");
                return;
              }

              setRegisteredVolunteers((previous) => [
                ...previous,
                {
                  id: Date.now(),
                  name: volunteerName.trim(),
                  phone: volunteerPhone.trim(),
                  location: volunteerLocation.trim(),
                  category: volunteerCategory,
                  skills: volunteerSkills.trim() || "General assistance",
                  availability: volunteerAvailability,
                },
              ]);

              alert("Volunteer registered successfully!");

              setVolunteerName("");
              setVolunteerPhone("");
              setVolunteerSkills("");
              setVolunteerAvailability("Available");
              setPage("volunteers");
            }}
          >
            Register as Volunteer
          </button>
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

          HelpNearby

        </div>


        <div className="location">

          📍 {location}

        </div>



      </header>



      <main className="results-page">



        <button

          className="back-button"

          onClick={() => setPage("diagnostics-dashboard")}

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

                      The blood bank/resource can now

                      review your request.

                    </small>



                  </div>



                  <button

                    className="send-request-button"

                    onClick={() =>{

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
