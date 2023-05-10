import React, { useState } from "react";

export default function Footer() {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const [sent, setSent] = useState(false);

  const handleNameChange = (e) => {
    e.preventDefault();
    setName(e.target.value);
  }

  const handleEmailChange = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
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
        email,
        subject,
        message
      })
    }).then((res) => res.json())
      .then((data) => {
        if (data.success) {
          setName("");
          setSubject("");
          setMessage("");
        }

        setSent(data.success);
        alert(data.message);
      });
  }
  return (
    <>

      <div id="contact" className="w-full mt-64">
        <h2 className="mb-4 text-4xl text-center font-header-medium">
         Send us a Message
        </h2>
        <form id="contact-form" className="flex flex-col gap-6 max-w-xl mb-16 mx-auto [&_input]:border-secondary [&_label]:text-sm [&_label]:mb-1 px-12 py-10" onSubmit={handleSubmit}>
          <div className="flex flex-col">
            <label className="font-bold" htmlFor="name">Your Name</label>
            <input className="border px-3 py-2 placeholder:text-secondary/50" 
            placeholder="Enter your name" 
            value={name} 
            onChange={handleNameChange} required type="text" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold" htmlFor="email">Your Email</label>
            <input className="border px-3 py-2 placeholder:text-secondary/50" 
            placeholder="Enter your email" 
            value={email} 
            onChange={handleEmailChange} required type="text" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold" htmlFor="subject">Subject</label>
            <input className="border px-3 py-2 placeholder:text-secondary/50" 
            placeholder="Enter the subject" 
            value={subject} 
            onChange={handleSubjectChange} required type="text" />
          </div>

          <div className="flex flex-col">
            <label className="font-bold" htmlFor="message">Message</label>
            <textarea className="border px-3 py-2 placeholder:text-secondary/50 max-h-[100px] min-h-[100px]" 
            placeholder="Enter the message" 
            value={message} 
            onChange={handleMessageChange} required type="text" />
          </div>

          <button type="submit" className="bg-primary mt-4 text-secondary py-4 uppercase font-bold tracking-wide" disabled={sent}>Send Message</button>
        </form>
      </div>
      <div className="bg-secondary h-12 mb-16 md:mb-0 inline-flex items-center w-full">
        <p className="text-white text-xs md:text-sm max-w-7xl w-full mx-auto px-6 font-header tracking-wider">
          @2023 RClark Maintenance Services, LLC. All rights reserved.
        </p>
      </div>
    </>
  );
}
