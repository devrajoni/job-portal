import { Route, Routes } from "react-router-dom";
import Layout from "./components/Layout";
import About from "./pages/about";
import Blog from "./pages/blog";
import Candidate from "./pages/candidate";
import Company from "./pages/company";
import Contact from "./pages/contact";
import Home from "./pages/home";
import Job from "./pages/job";
import Details from "./pages/job-details";
import Price from "./pages/price";

const App = () => {
  return (
    <>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/job" element={<Job />} />
          <Route path="/candidate" element={<Candidate />} />
          <Route path="/company" element={<Company />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/price" element={<Price />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/job-details" element={<Details />} />
        </Routes>
      </Layout>
    </>
  );
};

export default App;
