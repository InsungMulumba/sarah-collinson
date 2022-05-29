import React, { FC } from "react";
import styled from "styled-components";
import EmailForm from "../Home/EmailForm";

const Root = styled.div`
  width: 100%;
  border-top: 1px solid grey;
  justify-content: center;
  display: flex;
`;
const Contact: FC = () => {
  return (
    <Root id="contact">
      <EmailForm />
    </Root>
  );
};

export default Contact;
