import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <footer>
        © Insung Mulumba 2021
        <img src="/netliheart.svg" alt="Netlify Logo" className="logo" />
      </footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 50px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
        }

        .logo {
          height: 1em;
          margin: 5px;
        }
      `}</style>
    </>
  );
};

export default Footer;
