import React, { Component } from 'react';

import styled from 'styled-components';
import { colors, fonts } from '../../assets/identity';


class ContactForm extends Component {
  state = {
    name: '',
    email: '',
    message: '',
  };

  handleChange = e => {
    e.preventDefault();

    const { name, value } = e.target

    this.setState({
      [name]: value,
    });
  };

  render() {

    return (
      <FormContainer autoComplete="off" name="contact" method="POST" data-netlify="true">
        <TextInput
          name="name"
          onChange={this.handleChange}
          placeholder="Name"
          type="text"
          required
        />
        <TextInput
          name="email"
          onChange={this.handleChange}
          placeholder="Email"
          type="text"
          required
        />
        <TextBox
          name="message"
          onChange={this.handleChange}
          placeholder="A little about the project..."
        />
        <Button type="submit">
          Send It
        </Button>
      </FormContainer>
    );
  }
}

const FormContainer = styled.form`
  width: 80%;
  max-width: 300px;
  font-family: ${fonts.secondary};
  letter-spacing: 1px;
`;

const TextInput = styled.input`
  background: none;
  width: 100%;
  height: 35px;
  border: 1px solid ${colors.blue};
  border-radius: 5px;
  margin: 10px auto;
  padding: 10px;
  color: ${colors.white};

  &::placeholder {
    color: ${colors.white};
  }
`;

const TextBox = styled.textarea`
background: none;
width: 100%;
min-height: 150px;
border: 1px solid ${colors.blue};
border-radius: 5px;
margin: 10px auto;
padding: 10px;
color: ${colors.white};
resize: vertical;

&::placeholder {
  color: ${colors.white};
}
`;

const Button = styled.button`
  background: none;
  width: 100%;
  padding: 10px;
  margin: auto;
  border: 1px solid ${colors.blue};
  border-radius: 5px;
  font-family: ${fonts.primary};
  color: ${colors.white};
  margin-top: 25px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: ${colors.blue};
  }
`;

export default ContactForm;