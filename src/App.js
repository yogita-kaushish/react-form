import "./App.css";
import { React, useState } from "react";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [contact, setContact] = useState("");
  const [email, setEmail] = useState("");
  const [gender, setGender] = useState("male");
  const [subjects, setSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resume, setResume] = useState("");
  const [url, setUrl] = useState();
  const [selectedOption, setSelectedOption] = useState("");
  const [about, setAbout] = useState("");

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setContact("");
    setEmail("");
    setGender("");
    setSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResume("");
    setUrl("");
    setSelectedOption("");
    setAbout("");
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      contact,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };

  const handleSubjectChange = (sub) => {
    setSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };
  return (
    <>
      <div className="App">
        <h1>Form in ReactJS</h1>
        <fieldset>
          <form action="#" method="get">
            <label htmlFor="firstname">First Name:</label>
            <input
              type="text"
              name="firstname"
              id="firstname"
              placeholder="Enter FirstName"
              value={firstName}
              onChange={(e) => setFirstName(e.target.value)}
              required
            />
            <label htmlFor="lastname">Last Name:</label>
            <input
              type="text"
              name="lastname"
              id="lastname"
              placeholder="Enter LastName"
              value={lastName}
              onChange={(e) => setLastName(e.target.value)}
              required
            />
            <label htmlFor="contact">Contact</label>
            <input
              type="tel"
              name="contact"
              id="contact"
              placeholder="Enter your mobile Number"
              value={contact}
              onChange={(e) => setContact(e.target.value)}
              required
            />
            <label htmlFor="email">Enter your Email :</label>
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            {/* RadioButtons */}
            <label htmlFor="gender">Gender :</label>
            <input
              type="radio"
              name="gender"
              id="male"
              value="male"
              onChange={(e) => setGender(e.target.value)}
            />
            Male
            <input
              type="radio"
              name="gender"
              id="female"
              value="female"
              onChange={(e) => setGender(e.target.value)}
            />
            Female
            <input
              type="radio"
              name="gender"
              id="other"
              value="other"
              onChange={(e) => setGender(e.target.value)}
            />
            Other
            {/* checkboxes */}
            <label htmlFor="lang">Your Best Subject :</label>
            <input
              type="checkbox"
              name="lang"
              id="english"
              checked={subjects.english === true}
              onChange={(e) => handleSubjectChange("english")}
            />
            English
            <input
              type="checkbox"
              name="lang"
              id="maths"
              checked={subjects.maths === true}
              onChange={(e) => handleSubjectChange("maths")}
            />
            Maths
            <input
              type="checkbox"
              name="lang"
              id="physics"
              checked={subjects.physics === true}
              onChange={(e) => handleSubjectChange("physics")}
            />
            Physics
            {/* uploading documents */}
            <label htmlFor="file">Upload Resume</label>
            <input
              type="file"
              name="file"
              id="file"
              onChange={(e) => setResume(e.target.files)}
              required
            />
            {/* url */}
            <label htmlFor="url">Enter URL :</label>
            <input
              type="url"
              name="url"
              id="url required"
              onChange={(e) => setUrl(e.target.url)}
            />
            {/* selection */}
            <label htmlFor="selection">Select your Choice :</label>
            <select
              name="select"
              id="select"
              value={selectedOption}
              onChange={(e) => setSelectedOption(e.target.value)}
            >
              <option value="" disabled>
                Select your Choice
              </option>
              <optgroup label="Beginners">
                <option value="1">HTML</option>
                <option value="2">CSS</option>
                <option value="3">Javascript</option>
              </optgroup>
              <optgroup label="Advanced">
                <option value="4">React</option>
                <option value="5">Node</option>
                <option value="6">Express</option>
                <option value="7">MongoDB</option>
              </optgroup>
            </select>
            {/* textarea */}
            <label htmlFor="about">About</label>
            <textarea
              name="about"
              id="about"
              cols="30"
              rows="10"
              placeholder="About Yourself"
              onChange={(e) => setAbout(e.target.value)}
              required
            ></textarea>
            {/* buttons */}
            <button type="reset" value="reset" onClick={() => handleReset()}>
              Reset
            </button>
            <button
              type="submit"
              value="submit"
              onClick={(e) => handleSubmit(e)}
            >
              Submit
            </button>
          </form>
        </fieldset>
      </div>
    </>
  );
}

export default App;
