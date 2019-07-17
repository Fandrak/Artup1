import Link from "next/link";
import MyDocument from "next/document";

import Banner from "../components/banner";
import Navbar from "../components/navbar";
import Services from "../components/services";
import About from "../components/about-us";
import Social_media from "../components/social-media";
import Footer from "../components/footer";

import "../styles.scss";

const Index = ({ user }) => (
  <>
    <Navbar user={user} />
    <Banner />
    <Services />
    <About />
    <Social_media />
    <Footer />
  </>
);

export default Index;
