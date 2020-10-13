import React from 'react'

const ContactForm = () => (
<form name="contact" method="post" data-netlify="true" data-netlify-honeypot="bot-field" action="/contact/thank-you">
  {/* You still need to add the hidden input with the form name to your JSX form */}
    <input type="hidden" name="form-name" value="contact" />
    <input type="text" name="name" />
    <input type="email" name="email" />
    <textarea name="message" />
    <button type="submit">Send</button>
</form>
)

export default ContactForm