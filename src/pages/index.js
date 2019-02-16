import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Skills from "../components/Home/Skills"

import HomeSection from "../components/Home/HomeSection";
import AboutSection from "../components/About/AboutSection";
import ProjectSection from "../components/Projects/ProjectSection";
import ContactSection from "../components/Contact/ContactSection";
import FlyingDiv from "../components/FlyingDiv";

const IndexPage = () => (
  <Layout>
    <SEO title="Home" keywords={[`blake`, `hartman`, `react`, 'web-development', 'freelance']} />
    <HomeSection />
    <Skills />
    <AboutSection />
    <ProjectSection />
    <ContactSection />
    <FlyingDiv />
  </Layout>
)

export default IndexPage
