import React, { Component } from 'react'
import { Container, Heading } from "../Container"
import ContactForm from './ContactForm';

class ContactSection extends Component {
  render() {
    return (
      <Container id="contact" style={{ flexDirection: 'column', margin: `85px auto` }}>
        <Heading>Contact</Heading>
        <ContactForm />
      </Container>
    )
  }
}

export default ContactSection
