import { navigate } from "gatsby"
import React, { useState } from "react";


import {Form, Label, LabelRgpd, Input, InputCheck, InputBtn,Textarea,SectionForm,H1Form} from "./ContactFormElements"
import {MyContainer} from "../ParentsComponents"


const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [rgpd, setRgpd] = useState("");


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
      "email": email,
      "message": message,
      "rgpd": rgpd,
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
    <SectionForm>
      <MyContainer>
        <H1Form>Contact</H1Form>
        <Form netlify action="/" name="contact" method="post" onSubmit={handleSubmit}>
          <Label>
            Votre Nom :
            <Input
              name="firstName"
              type="text"
              value={name}
              onChange={e => setName(e.target.value)}
              required
            />
          </Label>
          <Label>
            Votre e-mail:
            <Input
              name="email"
              type="email"
              value={email}
              onChange={e => setEmail(e.target.value)}
              required
            />
          </Label>
          <Label>
            Votre e-mail:
            <Textarea
              name="message"
              value={message}
              onChange={e => setMessage(e.target.value)}
              required
              rows="8"
            />
          </Label>
          RGPD :
          <LabelRgpd>
            <InputCheck
            type="checkbox"
            name="rgpd"
            value={rgpd}
            onChange={e => setRgpd(e.target.value)}
            required/>
            Je consens à ce que ce site stocke les informations que je lui ai soumises afin qu’il puisse répondre à ma demande.
          </LabelRgpd>
          <InputBtn type="submit" value="ENVOYER" />
        </Form>
      </MyContainer>
    </SectionForm>
  );
}

export default ContactForm