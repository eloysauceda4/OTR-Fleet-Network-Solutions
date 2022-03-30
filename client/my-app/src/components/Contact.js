import React, { useState } from "react"

const Contact = () => {

    const [status, details] = useState("Submit");
    const handleSubmit = async (e) => {
      e.preventDefault();
   
      const { name, email, message } = e.target.elements;
      let details = {
        name: name.value,
        email: email.value,
        message: message.value,
      };
      let response = await fetch("http://localhost:3001/contact", {
        method: "POST",
       
      });
    
    };
    return (
   <div className="Contact">
       <h1>Contact Us</h1>
         <h2>Please submit your information below and we will get back to you as soon as possible.</h2>
          
           <form onSubmit={handleSubmit}>
      <div>
        <label details="name">Name:</label>
        <input type="text" id="name" required />
      </div>
      <div>
        <label details="email">Email:</label>
        <input type="email" id="email" required />
      </div>
      <div>
        <label details="message">Message:</label>
        <textarea id="message" required />
      </div>
      <button type="submit">{status}</button>
    </form>
       
   </div>
    )
}

export default Contact