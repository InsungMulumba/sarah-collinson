import React from "react";

import Header from "../components/Header/Header";

type LayoutProps = {
  children: React.ReactNode;
  posts?: any;
};

const Layout: React.FunctionComponent<LayoutProps> = ({ children, posts }) => {
  return (
    <>
      <Header showBulletin={false} />
      {posts}
      {children}
    </>
  );
};

export default Layout;
