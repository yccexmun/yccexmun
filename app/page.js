'use client'
import HeroSec from "../components/hero-sec";
import InitialLoader from "../components/initial-loader";
import Carousel from "./components/Carousel";
import Navbar from "./components/Navbar";
import "./components/ui/styles.css";
import ContentSection from "../components/ContentSection";
import ImportantDates from "../components/ImportantDates";
import Footer from "../components/Footer";
import Sponsors from "../components/sponsors";

const Page = () => {
  return (
    <>
      <Navbar />
      <InitialLoader />
      <div className="page-container">
        <div className="px-1 py-2 sm:px-2 sm:py-3  md:py-6 md:px-10">
          <HeroSec />
          <Carousel />
          <ContentSection />
          <Sponsors />
          <ImportantDates />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default Page;