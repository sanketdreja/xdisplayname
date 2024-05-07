import React, { useState } from "react";

const NameForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [fullName, setFullName] = useState("");

  const handleFirstNameChange = (event) => {
    setFirstName(event.target.value);
  };

  const handleLastNameChange = (event) => {
    setLastName(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (firstName && lastName) {
      setFullName(`${firstName} ${lastName}`);
    }
  };

  return (
    <div>
      <h1> Full Name Display</h1>
      <div>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="First Name"
            value={firstName}
            onChange={handleFirstNameChange}
          />
          <input
            type="text"
            placeholder="Last Name"
            value={lastName}
            onChange={handleLastNameChange}
          />
          <button type="submit">Submit</button>
        </form>
        <p>Full Name: {fullName}</p>
      </div>
    </div>
  );
};

export default NameForm;
