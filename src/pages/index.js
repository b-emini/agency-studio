import React from "react";
import PageWrapper from "../components/PageWrapper";
import Hero from "../sections/Hero";
import Services from "../sections/Services";
import Content from "../sections/Content";
import Fact from "../sections/Fact";
import Feature from "../sections/Feature";
import CTA from "../sections/CTA";

const IndexPage = () => {
  return (
    <>
      <PageWrapper
        footerConfig={{
          style: "style1", //style1, style2
        }}
      >
        <Hero />
        <Services />
        <Content />
        <Fact />
        <Feature />
        <CTA />
      </PageWrapper>
    </>
  );
};
export default IndexPage;
