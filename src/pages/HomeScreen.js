import React from "react";
import About from "../components/About";
import Clients from "../components/Clients";
import Contact from "../components/Contact";
import Information from "../components/Information";
import Location from "../components/Location";
import Services from "../components/Services";
import Layout from "../Layout/Layout";

const HomeScreen = () => {
  return (
    <Layout>
      <Location />
      <About />
      <Information />
      <Services />
      <Information />
      <Clients />
      <Contact />
    </Layout>
  );
};

export default HomeScreen;
