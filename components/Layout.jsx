import React from "react";
import { Header } from "./index";

// this pattern makes it Possible to use layout as parent of other components
// resndered within it, e.g <Layout> child components </Layout>

function Layout({ children }) {
  return (
    <React.Fragment>
      <Header />
      {children}
    </React.Fragment>
  );
}

export default Layout;
