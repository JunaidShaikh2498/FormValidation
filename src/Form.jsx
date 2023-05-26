import React, { useState } from "react";
import "./form.css";
const Form = () => {
  const [name, setName] = useState("");
  const [mob, setMob] = useState("");
  const [address, setAddress] = useState("");
  const [file, setFile] = useState(null);
  const [salary, setSalary] = useState();
  const [age, setAge] = useState();
  const [birthDate, setBirthDate] = useState();

  const submitForm = () => {
    setAge("");
    setBirthDate("");
    setFile("");
    setMob("");
    setName("");
    setSalary("");
    alert("Form Submitted Successfully");
  };
  const clearForm = () => {
    setAge("");
    setBirthDate("");
    setFile("");
    setMob("");
    setName("");
    setSalary("");
  };

  const handleSalarySlider = (e) => {
    setSalary(e.target.value);
  };
  const handleBirthDate = (e) => {
    setBirthDate(e.target.value);

    const birthdateObj = new Date(birthDate);
    const today = new Date();
    const diff = today - birthdateObj;
    const ageDate = new Date(diff);
    const calculatedAge = Math.abs(ageDate.getUTCFullYear() - 1970);
    if (calculatedAge >= 18) {
      setAge(calculatedAge);
    } else {
      alert("Invalid age");
    }
  };

  const handleName = (e) => {
    var alphabets = /^[a-zA-Z\s\b]+$/;
    if (e.target.value.match(alphabets)) {
      setName(e.target.value);
      return true;
    } else {
      alert("Enter Letters");
      return false;
    }
  };

  const handleMob = (e) => {
    const { newMob } = e.target;
    if (/^\d+$/.test(newMob)) {
      setMob(newMob);
    } else {
      alert("Please enter numeric characters.");
    }
  };

  const handleKeyDownName = (e) => {
    if (e.key === "Backspace") {
      setName((prevValue) => prevValue.slice(0, -1));
    }
  };

  // const handleKeyDownMob = (e) => {
  //   if (e.key === "Backspace") {
  //     setMob((prevValue) => prevValue.slice(0, -1));
  //   }
  // };

  const fileChange = (e) => {
    console.log(e.target.files[0].name.split(".")[1]);
    if (
      e.target.files[0].name.split(".")[1] === "docx" ||
      e.target.files[0].name.split(".")[1] === "doc"
    ) {
      setFile(e.target.files[0]);
      console.log(file);
      alert("File type supported");
    } else if (
      e.target.files[0].name.split(".")[1] !== "docx" ||
      e.target.files[0].name.split(".")[1] !== "doc"
    ) {
      setFile(null);
      console.log(file);
      alert("Invalid File");
    }
  };

  return (
    <div className="main-container">
      <h1 className="heading">Student Application</h1>
      <div className="form-container">
        <form>
          <label className="inputLabels" htmlFor="name">
            Name
          </label>
          <input
            type="text"
            id="name"
            className="name"
            value={name}
            onChange={(e) => {
              handleName(e);
            }}
            onKeyDown={(e) => {
              handleKeyDownName(e);
            }}
          />
          <br /> <br />
          <label
            style={{ marginRight: "118px" }}
            className="inputLabels"
            htmlFor="birthdate"
          >
            Birthdate
          </label>
          <input
            type="date"
            id="birth-date"
            value={birthDate}
            onChange={(e) => {
              handleBirthDate(e);
            }}
          />
          <br /> <br />
          <label
            style={{ marginRight: "152px" }}
            className="inputLabels"
            htmlFor="age"
          >
            Age
          </label>
          <input type="number" disabled={true} id="age" value={age} />
          <br /> <br />
          <label
            style={{ marginRight: "107px" }}
            className="inputLabels"
            htmlFor="mob"
          >
            Mobile no.
          </label>
          <input
            type="text"
            id="mob"
            value={mob}
            onChange={(e) => {
              handleMob(e);
            }}
          />
          <br /> <br />
          <div>
            <label className="inputLabels" htmlFor="salary">
              Salary
            </label>
            <input
              type="text"
              className="salaryClass"
              id="salary"
              disabled={true}
              value={salary}
            />

            <label style={{ marginRight: "20px",fontWeight:"bold" }} htmlFor="2000">
              2000
            </label>
            <input
              type="range"
              value={salary}
              min={2000}
              max={10000}
              onChange={(e) => {
                handleSalarySlider(e);
              }}
            />
            <label
              style={{ marginLeft: "10px" }}
              className="inputLabels"
              htmlFor="10000"
            >
              10000
            </label>
          </div>
          <br />
          <label
            style={{ marginRight: "127px" }}
            className="inputLabels"
            id="addressLabel"
            htmlFor="address"
          >
            Address
          </label>
          <textarea
            id="address"
            value={address}
            onChange={(e) => {
              setAddress(e.target.value);
            }}
          />
          <br />
          <br />
          <label className="inputLabels" htmlFor="gender">
            Gender
          </label>
          <input type="radio" name="gender" id="male" value="male" />
          <label style={{marginLeft:"7px"}} className="inputLabels" htmlFor="male">
            Male
          </label>
          <input type="radio" name="gender" id="female" value="female" />
          <label style={{marginLeft:"7px"}} className="inputLabels" htmlFor="male">
            Female
          </label>
          <br />
          <br />
          <label className="inputLabels" htmlFor="upload">
            Upload
          </label>
          {
            <input
              type="file"
              name="docx"
              id="document"
              onChange={(e) => {
                fileChange(e);
              }}
            />
          }
          <br />
          <br />
          <label className="inputLabels" htmlFor="country">
            Country
          </label>
          <select id="country" className="classCountry">
            <option value="india">India</option>

            <option value="japan">Japan</option>

            <option value="germany">Germany</option>

            <option value="sweden">Sweden</option>

            <option value="spain">Spain</option>
          </select>
          <br />
          <br />
          <div style={{paddingLeft:"50px",paddingTop:"30px"}}>
          <button
            className="submitBtn inputLabels"
            onClick={() => {
              submitForm();
            }}
          >
            Save
          </button>
          <button
          className="clearBtn inputLabels"
            onClick={() => {
              clearForm();
            }}
          >
            Clear
          </button>
          </div>
          
        </form>
      </div>
    </div>
  );
};

export default Form;
