import "./App.css";
import { React, useState } from "react";

function App() {
  const formFields = ["FirstName", "LastName", "Contact", "Email"];

  const [formvalues, setFormvalues] = useState({
    FirstName: "",
    LastName: "",
    Contact: "",
    Email: "",
  });
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
    setFormvalues({FirstName: "",
      LastName: "",
      Contact: "",
      Email: "",})
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
      formvalues,
      gender,
      selectedOption,
      subjects,
      resume,
      url,
      about
    );
  };

  const handleOnclick = (name, value) => {
    console.log(name, value);
    setFormvalues({
      ...formvalues,
      [name]: value,
    });
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
            {formFields.map((field, index) => (
              <>
                <label htmlFor={field}>{field}:</label>
                <input
                  type="text"
                  name={field}
                  id={field}
                  placeholder={`Enter ${field}`}
                  value={formvalues[field]}
                  onChange={(e) => handleOnclick(field, e.target.value)}
                />
              </>
            ))}
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
