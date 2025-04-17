import React from "react";
import { FaMapMarkerAlt, FaBriefcase, FaDollarSign } from "react-icons/fa";
import { Link } from "react-router-dom";

const JobDetails = () => {
  const job = {
    title: "Senior Frontend Developer",
    company: "Future Professionals Ltd",
    location: "Accra, Ghana",
    type: "Full-time",
    salary: "$5,000/mo",
    posted: "April 15, 2025",
    description:
      "We’re looking for a Senior Frontend Developer to join our growing tech team. You’ll be responsible for building modern, responsive user interfaces using React and collaborating closely with our backend team.",
    responsibilities: [
      "Develop and maintain frontend features using React",
      "Collaborate with designers and backend developers",
      "Ensure high performance across devices and browsers",
      "Participate in code reviews and team discussions",
    ],
    requirements: [
      "5+ years experience with React.js",
      "Strong knowledge of HTML, CSS, and JavaScript",
      "Experience with RESTful APIs and Git",
      "Understanding of UI/UX best practices",
    ],
  };

  return (
    <section className="bg-white py-16 px-4 md:px-10 lg:px-20 text-[#1E2424]">
      <div className="max-w-5xl mx-auto">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">{job.title}</h1>
          <p className="text-gray-600 text-sm mb-4">{job.company}</p>
          <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-2">
              <FaMapMarkerAlt />
              <span>{job.location}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaBriefcase />
              <span>{job.type}</span>
            </div>
            <div className="flex items-center gap-2">
              <FaDollarSign />
              <span>{job.salary}</span>
            </div>
            <div className="text-xs text-gray-400 ml-auto">Posted: {job.posted}</div>
          </div>
        </div>

        <div className="space-y-6">
          <div>
            <h2 className="text-xl font-semibold mb-2">Job Description</h2>
            <p className="text-gray-700">{job.description}</p>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Responsibilities</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.responsibilities.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div>
            <h2 className="text-xl font-semibold mb-2">Requirements</h2>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {job.requirements.map((item, index) => (
                <li key={index}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="mt-8">
            <Link
              to="/apply"
              className="bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg font-medium transition"
            >
              Apply Now
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default JobDetails;
