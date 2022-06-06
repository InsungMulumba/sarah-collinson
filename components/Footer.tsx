import React, { FC } from "react";

const Footer: FC = () => {
  return (
    <>
      <footer>© Insung Mulumba 2022</footer>
      <style jsx>{`
        footer {
          width: 100%;
          height: 40px;
          border-top: 1px solid #eaeaea;
          display: flex;
          justify-content: center;
          align-items: center;
          font-size: 12px;
          position: relative;
          bottom: 0;
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
