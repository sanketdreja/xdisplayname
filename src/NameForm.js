import React, { useState } from "react";

const NameForm = () => {
  // Declare state variables for first name, last name, and full name display
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (event) => {
    event.preventDefault(); // Prevent form from submitting
    // Display the full name if both fields are filled
    if (firstName && lastName) {
      setFullName(`Full Name: ${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1> Display Full Name</h1>
      <form onSubmit={handleSubmit}>
        {/* Input field for first name */}
        <label htmlFor="firstName">First Name:</label>
        <input
          type="text"
          id="firstName"
          value={firstName}
          onChange={(e) => setFirstName(e.target.value)}
          required
        />
        <br />
        <br />
        {/* Input field for last name */}
        <label htmlFor="lastName">Last Name:</label>
        <input
          type="text"
          id="lastName"
          value={lastName}
          onChange={(e) => setLastName(e.target.value)}
          required
        />
        <br />
        <br />
        {/* Submit button */}
        <button type="submit" disabled={!firstName || !lastName}>
          Submit
        </button>
      </form>

      {/* Display the full name */}
      <p>{fullName}</p>
    </div>
  );
};

export default NameForm;
