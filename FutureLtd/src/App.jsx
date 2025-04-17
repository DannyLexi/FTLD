import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useState } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import HeroSection from "./components/HeroSection";
import Login from "./pages/LogIn";
import Signup from "./pages/Signup";
import AboutUs from "./pages/AboutUs";
import Blog from "./pages/Blog";
import JobBoard from "./pages/JobBoard";
import JobApplication from "./pages/JobApplication";
import ForEmployers from "./pages/ForEmployers";
import ForJobSeekers from "./pages/ForJobSeekers";
import JobDetails from "./pages/JobDetails";

import "./App.css";

function App() {
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Senior Recruitment Consultant",
      company: "Future Professionals Ltd",
      location: "London, UK",
      type: "Full-Time",
    },
    {
      id: 2,
      title: "Finance Analyst",
      company: "Finance & Co.",
      location: "Romford, Essex",
      type: "Contract",
    },
    {
      id: 3,
      title: "Construction Project Manager",
      company: "BuildRight Ltd",
      location: "Barking, London",
      type: "Temporary",
    },
  ]);

  const handleAddJob = (newJob) => {
    setJobs((prev) => [...prev, newJob]);
  };

  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HeroSection />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/job-board" element={<JobBoard jobs={jobs} />} />
        <Route path="/apply/:id" element={<JobApplication />} />
        <Route path="/for-employers" element={<ForEmployers onAddJob={handleAddJob} />} />
        <Route path="/for-jobseekers" element={<ForJobSeekers jobs={jobs} />} />
        <Route path="/job-details" element={<JobDetails />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
