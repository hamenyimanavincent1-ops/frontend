import React, { useState } from 'react';

const InsertFirm = () => {
  const [firm, setFirm] = useState("");
  const [contactName, setContactName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState("");
  const [message, setMessage] = useState("");
  const createFirm=() => {
    fetch('http://localhost:3000/add-firm', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({ firmName: firm, contactName, phone, email, status }),
    })
      .then((response) => response.text())
      .then((data) => setMessage(data));
  }
  return (
    <div>
      <h1>Add Firm</h1>
      <input type="text" placeholder="Firm Name" value={firm} onChange={(e) => setFirm(e.target.value)} /> <br />
      <input type="text" placeholder="Contact Name" value={contactName} onChange={(e) => setContactName(e.target.value)} /> <br />
      <input type="text" placeholder="Phone" value={phone} onChange={(e) => setPhone(e.target.value)} /> <br />
      <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} /> <br />
      <input type="text" placeholder="Status" value={status} onChange={(e) => setStatus(e.target.value)} /> <br />  
      <button onClick={createFirm}>Add Firm</button>
       <p>{message}</p>
    </div>
  );
}

export default InsertFirm;