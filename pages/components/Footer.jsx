import React, { useState } from "react";

export default function Footer() {

  const [name, setName] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleSubjectChange = (e) => {
    e.preventDefault();
    setSubject(e.target.value);
  }

  const handleMessageChange = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  }

  const handleSubmit = async (e) => {
    e.preventDefault();

    return fetch(import.meta.env.VITE_APP_URL + "/sendemail", {
      method: 'POST',
      headers: {
        Accept: 'application.json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        name,
        subject,
        message
      })
    }).then((res) => res.json())
      .then((data) => {
        if(data.success){
          setName("");
          setSubject("");
          setMessage("");
        }
      });
  }
  return (
    <>

      <div className="pt-32">
        <h1>
          Send Us a Message
        </h1>
        <form id="contact-form" className="" onSubmit={handleSubmit}>
          <div className="">
            <label className="" htmlFor="name">Name</label>
            <input className="" value={name} onChange={handleNameChange} required type="text" />
          </div>

          <div className="">
            <label className="" htmlFor="subject">Subject</label>
            <input className="" value={subject} onChange={handleSubjectChange} required type="text" />
          </div>

          <div className="">
            <label className="" htmlFor="message">Message</label>
            <input className="" value={message} onChange={handleMessageChange} required type="text" />
          </div>

          <button type="submit" className="">Send Message</button>
        </form>
      </div>
      <div className="bg-secondary h-12 mb-16 md:mb-0 inline-flex items-center w-full">
        <p className="text-white text-xs md:text-sm max-w-7xl w-full mx-auto px-6">
          @2023 RClark Maintenance Services, LLC. All rights reserved.
        </p>
      </div>
    </>
  );
}
