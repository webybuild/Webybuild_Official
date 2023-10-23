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
        <Route
          path="/services/custom-web-development"
          element={<CustomWebDev />}
        />
        <Route path="/blogs" element={<BlogFront />} />
        <Route path="/blog/*" element={<BlogDetail />} />
        <Route path="/contacts" element={<Contacts />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
