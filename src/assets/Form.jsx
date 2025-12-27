import { useState } from "react";
import "./form.css";

function Form() {
  const [fname, setFname] = useState("");
  const [lname, setLname] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("");
  const [subjects, setSubjects] = useState([]);
  const [resume, setResume] = useState(null);
  const [ans, setAns] = useState("");
  const [url, setUrl] = useState("");
  const [about, setAbout] = useState("");

  const [fnameError, setFnameError] = useState("");
  const [lnameError, setLnameError] = useState("");
  const [contactError, setContactError] = useState("");
  const [emailError, setEmailError] = useState("");
  const [genderError, setGenderError] = useState("");
  const [resumeError, setResumeError] = useState("");

  const handelForm = (e) => {
    e.preventDefault();

    // First Name
    if (fname.trim() === "") {
      setFnameError("First name is required*");
      return;
    }
    setFnameError("");

    // Last Name
    if (lname.trim() === "") {
      setLnameError("Last name is required*");
      return;
    }
    setLnameError("");

    // Email
    if (!email.includes("@")) {
      setEmailError("Enter a valid email*");
      return;
    }
    setEmailError("");

    // Contact
    if (contact.length !== 10) {
      setContactError("Phone number must be 10 digits*");
      return;
    }
    setContactError("");

    // Gender
    if (gender === "") {
      setGenderError("Please select gender*");
      return;
    }
    setGenderError("");

    // Resume
    if (resume === null){
      setResumeError("Please upload your resume*");
      return;
    }
    setResumeError("");

    console.log({
      fname,
      lname,
      email,
      contact,
      gender,
      subjects,
      resume,
      url,
      ans,
      about,
    });
  };

  const handleSubjects = (e) => {
    const value = e.target.value;
    // if (e.target.checked) {
    //   setSubjects([...subjects, value]);
    // } else {
    //   setSubjects(subjects.filter((item) => item !== value));
    // }
    setSubjects((data) => {
      return subjects.includes(value)
        ? subjects.filter((item) => item != value)
        : [...data, value];
    });
  };

  const handleReset = () => {
    setFname("");
    setLname("");
    setEmail("");
    setContact("");
    setGender("");
    setSubjects([]);
    setResume(null);
    setUrl("");
    setAns("");
    setAbout("");

    setFnameError("");
    setLnameError("");
    setEmailError("");
    setContactError("");
    setGenderError("");
    setResumeError("");
  };

  return (
    <div className="parent">
      <h1>Form in React</h1>

      <form onSubmit={handelForm} className="form-container">
        {/* First Name */}
        <div className="inputs">
          <label htmlFor="fname">
            <div>First Name*</div>
            <input
              type="text"
              placeholder="Enter your first name..."
              id="fname"
              value={fname}
              onChange={(e) => setFname(e.target.value)}
            />
            {fnameError && <p className="nameError">{fnameError}</p>}
          </label>
        </div>

        {/* Last Name */}
        <div className="inputs">
          <label htmlFor="lname">
            <div>Last Name*</div>
            <input
              type="text"
              placeholder="Enter your last name..."
              value={lname}
              onChange={(e) => setLname(e.target.value)}
            />
            {lnameError && <p className="nameError">{lnameError}</p>}
          </label>
        </div>

        {/* Email */}
        <div className="inputs">
          <label htmlFor="email">
            <div>Email*</div>
            <input
              type="email"
              placeholder="Enter your email..."
              value={email}
              id="email"
              onChange={(e) => setEmail(e.target.value)}
            />
            {emailError && <p className="nameError">{emailError}</p>}
          </label>
        </div>

        {/* Contact */}
        <div className="inputs">
          <label htmlFor="contact">
            <div>Contact*</div>
            <input
              type="tel"
              placeholder="Enter your phone..."
              value={contact}
              onChange={(e) => setContact(e.target.value)}
            />
            {contactError && <p className="nameError">{contactError}</p>}
          </label>
        </div>

        {/* Gender */}
        <div className="inputs">Gender*</div>
        <div className="container">
          <label>
            <input
              type="radio"
              name="gender"
              value="male"
              checked={gender === "male"}
              onChange={(e) => setGender(e.target.value)}
            />
            Male
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="female"
              checked={gender === "female"}
              onChange={(e) => setGender(e.target.value)}
            />
            Female
          </label>

          <label>
            <input
              type="radio"
              name="gender"
              value="other"
              checked={gender === "other"}
              onChange={(e) => setGender(e.target.value)}
            />
            Other
          </label>

          {genderError && <p className="nameError">{genderError}</p>}
        </div>

        {/* Subjects */}
        <div className="inputs">Your best subject</div>
        <div className="container">
          <label>
            <input
              type="checkbox"
              value="English"
              checked={subjects.includes("English")}
              onChange={handleSubjects}
            />
            English
          </label>

          <label>
            <input
              type="checkbox"
              value="Maths"
              checked={subjects.includes("Maths")}
              onChange={handleSubjects}
            />
            Maths
          </label>

          <label>
            <input
              type="checkbox"
              value="Physics"
              checked={subjects.includes("Physics")}
              onChange={handleSubjects}
            />
            Physics
          </label>
        </div>

        {/* Resume */}
        <div className="inputs resume" >
          <div>Upload Resume*</div>
          <label htmlFor="file">
            <input
              id="file"
              type="file"
              onChange={(e) => {
                setResume(e.target.files[0]);
              }}
            />
          </label>
          {resumeError && <p className="nameError">{resumeError}</p>}

        </div>

        {/* URL */}
        <div className="inputs">
          <div>URL</div>
          <input
            type="url"
            placeholder="Enter your URL"
            value={url}
            onChange={(e) => setUrl(e.target.value)}
          />
        </div>

        {/* select */}
        <div className="inputs">
          <div>Select Your Choice</div>
          <select
            onChange={(e) => {
              setAns(e.target.value);
            }}
          >
            <option value="A">A</option>
            <option value="B">B</option>
            <option value="C">C</option>
            <option value="D">D</option>
          </select>
        </div>

        {/* About */}
        <div className="inputs">
          <div>About</div>
          <textarea
            type="text"
            placeholder="About yourself"
            value={about}
            onChange={(e) => setAbout(e.target.value)}
          />
        </div>

        <div className="buttons">
          <button type="button" onClick={handleReset}>
          Reset
        </button>
        <button>Submit</button>
        </div>
        
      </form>
    </div>
  );
}

export default Form;
