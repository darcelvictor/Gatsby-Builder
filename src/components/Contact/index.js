import { navigate } from "gatsby"
import React, { useState } from "react";

import {Label, Input} from "./ContactElements"
import {MyContainer} from "../ParentsComponents"

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");


  // This function puts all the form fields into a FormData constructor, which we later encode with the URLSearchParams constructor
  const createFormDataObj = (data) => {
    const formData = new FormData();
    Object.keys(data).forEach((k)=>{
      formData.append(k,data[k])
    });
    return formData
  }

  const handleSubmit = (e) => {
    // This `data` object is what's passed to the createFormDataObj. It needs all of your form fields, where the key is the name= attribute and the value is the value=
    const data = { 
      "form-name": "contact",
      "name": name,
      "e-mail": email,
      "message":message
    }
    // This POSTs your encoded form to Netlify with the required headers (for text; headers will be different for POSTing a file) and, on success, redirects to the custom success page using Gatsby's `navigate` helper function that we imported at the top
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(createFormDataObj(data)).toString()
    })
      .then(() => navigate("/contact/thank-you/"))
      .catch(error => alert(error));
    // This is required to prevent the default onSubmit behavior
    e.preventDefault();
  };

  return (
    <MyContainer>
    <form netlify action="/" name="contact" method="post" onSubmit={handleSubmit}>
      <Label>
        Votre Nom :
        <input
          name="firstName"
          type="text"
          value={name}
          onChange={e => setName(e.target.value)}
        />
      </Label>
      <Label>
        Votre e-mail:
        <input
          name="email"
          type="email"
          value={email}
          onChange={e => setEmail(e.target.value)}
        />
      </Label>
      <Label>
        Votre e-mail:
        <textarea
          name="message"
          value={message}
          onChange={e => setMessage(e.target.value)}
        />
      </Label>
      <Input type="submit" value="Submit" />
    </form>
    </MyContainer>
  );
}

export default ContactForm