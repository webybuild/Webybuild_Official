import Nav from "./components/Nav";
import { Route, Routes } from "react-router-dom";
import WebDesign from "./pages/WebDesign";
import CustomWebDev from "./pages/CustomWebDev";
import BlogFront from "./pages/BlogFront";
import Footer from "./components/Footer";
import BlogDetail from "./pages/BlogDetail";
import Home from "./pages/Home";
import Contacts from "./pages/Contacts";
import About from "./pages/About";
import TermsAndConditions from "./pages/TermsAndConditions";
import Inventory from "./pages/Inventory";
import MobileApp from "./pages/MobileApp";
import CloudService from "./pages/CloudService";
import LogoDesign from "./pages/LogoDesign";
import DigitalMarketing from "./pages/DigitalMarketing";
// import Blog from './components/Blog';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        {/* <Route path='/blog/:id/:title' element={ <Blog /> } />  */}
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services/web-design" element={<WebDesign />} />
        <Route path="/services/web-development" element={<CustomWebDev />} />
        <Route path="/services/inventory-management" element={<Inventory />} />
        <Route path="/services/mobile-application" element={<MobileApp />} />
        <Route path="/services/cloud-services" element={<CloudService />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route
          path="/services/digital-marketing"
          element={<DigitalMarketing />}
        />
        <Route path="/blogs" element={<BlogFront />} />
        <Route path="/blog/*" element={<BlogDetail />} />
        <Route path="/contacts" element={<Contacts />} />
        <Route path="/terms" element={<TermsAndConditions />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
