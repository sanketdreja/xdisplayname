import React, { useState } from "react";

function NameForm() {
  // Define state for the first name, last name, and full name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Check if both first and last name are not empty
    if (firstName && lastName) {
      // Concatenate first and last name and update full name state
      setFullName(`${firstName} ${lastName}`);
    } else {
      // If either first or last name is empty, clear the fullName state
      setFullName("");
    }
  };

  // Handle first name input change
  const handleFirstNameChange = (e) => {
    setFirstName(e.target.value);
  };

  // Handle last name input change
  const handleLastNameChange = (e) => {
    setLastName(e.target.value);
  };

  return (
    <div>
      <h1>Full Name Display</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="firstName">First Name:</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={handleFirstNameChange}
            required
          />
        </div>
        <div>
          <label htmlFor="lastName">Last Name:</label>
          <input
            type="text"
            id="lastName"
            value={lastName}
            onChange={handleLastNameChange}
            required
          />
        </div>
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>
      {/* Display the full name only if it is set */}
      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default NameForm;
