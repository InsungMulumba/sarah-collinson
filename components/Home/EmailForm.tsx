import React, { FC } from "react";
import emailjs from "emailjs-com";
import styled from "styled-components";
import { useState } from "react";

const ContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 50%;
  margin: 30px 0;
  align-self: center;
  @media (max-width: 767px) {
    width: fill-available;
    margin: 16px 32px;
  }
`;

const ContactNameEmailContainer = styled.div`
  display: flex;
  justify-content: space-between;
  @media (max-width: 767px) {
    flex-direction: column;
  }
`;

const ContactLabelInputPair = styled.div`
  display: flex;
  flex-direction: column;
  width: 48%;
  @media (max-width: 767px) {
    width: 100%;
    margin: 12px 0px;
  }
`;

const ContactInput = styled.input`
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px black;
  height: 40px;
  :hover {
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px black;
  }
`;
const ContactMessageTextArea = styled.textarea`
  margin: 16px 0px;
  border-top: none;
  border-left: none;
  border-right: none;
  border-bottom: solid 1px black;
  height: 100px;

  :hover {
    border-top: solid 1px black;
    border-left: solid 1px black;
    border-right: solid 1px black;
  }
`;

const SendButton = styled.input`
  background-color: #2896cc;
  color: white;
  padding: 4px;
  min-height: 50px;
  border-radius: 6px;
`;

const MessageSent = styled.div`
  background-color: green;
  color: white;
  padding: 8px;
  font-family: Inter, sans serif;
  text-align: center;
  min-height: 50px;
  border-radius: 6px;
`;

const EmailForm: FC = () => {
  const [messageSent, setMessageSent] = useState(false);

  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_yx36wzl",
        "template_wyztnul",
        e.target,
        "user_RuLiGftAy33pk6JiXJrmj"
      )
      .then(
        () => {
          setTimeout(() => setMessageSent(true), 2500);
        },
        (error) => {
          console.log(error.text);
        }
      );
  }

  return (
    <ContactContainer className="contact-form" onSubmit={sendEmail}>
      <input type="hidden" name="contact_number" />
      <ContactNameEmailContainer>
        <ContactLabelInputPair>
          <ContactInput type="text" placeholder="Name" name="user_name" />
        </ContactLabelInputPair>
        <ContactLabelInputPair>
          <ContactInput type="email" placeholder="Email" name="user_email" />
        </ContactLabelInputPair>
      </ContactNameEmailContainer>

      <ContactMessageTextArea
        placeholder="Type your message here"
        name="message"
      />
      {!messageSent ? (
        <SendButton type="submit" value="Send" />
      ) : (
        <MessageSent>
          Message received! <br /> We will contact you within the next day or so
        </MessageSent>
      )}
    </ContactContainer>
  );
};
export default EmailForm;
