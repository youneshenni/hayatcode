import React from "react";
import Links from "./components/Links";
import Form from "./Form/Main";
import Footer from "./components/Footer";

export default () => (
  <div
    style={{ display: "flex", flexDirection: "column", alignItems: "center" }}
  >
    <Links />
    <Form />
    <Footer />
  </div>
);
