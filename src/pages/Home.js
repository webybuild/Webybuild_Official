import AboutButtonCta from "../components/AboutButtonCta";
import Banner from "../components/Banner";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HomeTechTab from "../components/HomeTechTab";
// import TabComponent from "./TabComponent";
import IndustryTab from "../components/IndustryTab";
import OurBlog from "../components/OurBlog";
import Process from "../components/Process";
import Testimonial from "../components/Testimonial";
// import VideoBanner from "../components/VideoBanner";

function Home() {
  return (
    <>
      <Header />
      <Banner />
      <Hero />
      <IndustryTab />
      <Process />
      <HomeTechTab />
      <OurBlog />
      <Testimonial />
      <AboutButtonCta />
      {/* <VideoBanner />  */}
    </>
  );
}

export default Home;
