import React, { FC, useState } from "react";
import MainLayout from "../layouts/mainLayout";
import PageWithLayoutType from "../types/pageWithLayout";
import Header from "../components/Header/Header";
import styled from "styled-components";

const Root = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  min-height: calc(100vh - 180px);
  flex-direction: column;
`;

const Text = styled.p`
  font-family: "Roboto", sans-serif;
  font-size: 20px;
  margin-top: 40px;
  width: 40%;
  @media (max-width: 767px) {
    width: 80%;
    font-size: 15px;
  }
`;

const ContactContainer = styled.form`
  display: flex;
  flex-direction: column;
  width: 40%;
  margin: 30px 0;
  @media (max-width: 767px) {
    width: 80%;
    margin: 16px 0;
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

const SendButton = styled.button`
  background-color: #2896cc;
  color: white;
  padding: 4px;
  min-height: 50px;
  border-radius: 6px;
  border: none;
  cursor: pointer;
  font-size: 16px;
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

const HoneypotLabel = styled.label`
  display: none;
`;

const encode = (data: Record<string, string>) =>
  Object.keys(data)
    .map((k) => encodeURIComponent(k) + "=" + encodeURIComponent(data[k]))
    .join("&");

const Contact: FC = () => {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetch("/", {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: encode({ "form-name": "contact", ...form }),
    })
      .then(() => setSent(true))
      .catch((err) => console.log(err));
  };

  return (
    <>
      <Header />
      <Root>
        <Text>
          If you would like to find out more about Sarah's work or discuss
          future projects, please get in touch using the form below:
        </Text>
        <ContactContainer
          name="contact"
          method="POST"
          data-netlify="true"
          data-netlify-honeypot="bot-field"
          onSubmit={handleSubmit}
        >
          <input type="hidden" name="form-name" value="contact" />
          <HoneypotLabel>
            Don't fill this out: <input name="bot-field" onChange={handleChange} />
          </HoneypotLabel>
          <ContactNameEmailContainer>
            <ContactLabelInputPair>
              <ContactInput
                type="text"
                placeholder="Name"
                name="name"
                value={form.name}
                onChange={handleChange}
                required
              />
            </ContactLabelInputPair>
            <ContactLabelInputPair>
              <ContactInput
                type="email"
                placeholder="Email"
                name="email"
                value={form.email}
                onChange={handleChange}
                required
              />
            </ContactLabelInputPair>
          </ContactNameEmailContainer>
          <ContactMessageTextArea
            placeholder="Type your message here"
            name="message"
            value={form.message}
            onChange={handleChange}
            required
          />
          {!sent ? (
            <SendButton type="submit">Send</SendButton>
          ) : (
            <MessageSent>
              Message received! <br /> We will contact you within the next day
              or so
            </MessageSent>
          )}
        </ContactContainer>
      </Root>
    </>
  );
};

(Contact as PageWithLayoutType).layout = MainLayout;

export default Contact;
