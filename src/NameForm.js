import React, { useEffect, useState } from "react";

function NameForm() {
  // Define state for the first name, last name, and full name
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    // If either first or last name is empty, clear the fullName state
    // 
    setFirstName("");
    setLastName("");

    if(!firstName || !lastName){
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

  useEffect(() => {
    setFullName(`${firstName} ${lastName}`);
  }, [firstName, lastName]);
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
        <button type="submit" disabled={!firstName && !lastName}>
          Submit
        </button>
      </form>

      {fullName && <p>Full Name: {fullName}</p>}
    </div>
  );
}

export default NameForm;
