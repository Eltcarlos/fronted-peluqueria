import React from "react";
import About from "../components/About";
import Contact from "../components/Contact";
import Information from "../components/Information";
import Location from "../components/Location";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <Location />
      <About />
      <Information />
      <Contact />
    </Layout>
  );
};

export default HomeScreen;
