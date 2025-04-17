import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Sample job data, you can fetch this data from an API or backend
const jobs = [
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
];

const JobApplication = () => {
  const { id } = useParams(); // Get the job id from the URL
  const [job, setJob] = useState(null);

  useEffect(() => {
    // Find the job from the jobs array using the job id
    const selectedJob = jobs.find((job) => job.id === parseInt(id));
    setJob(selectedJob);
  }, [id]);

  if (!job) return <div>Loading...</div>;

  return (
    <div className="bg-gray-50 min-h-screen py-10 px-4">
      <div className="max-w-3xl mx-auto bg-white shadow-xl rounded-2xl p-8">
        <h1 className="text-2xl font-bold text-gray-800 mb-6 text-center">
          Apply for {job.title}
        </h1>
        <p className="text-center text-gray-600 mb-6">
          <strong>Company:</strong> {job.company}
        </p>

        <form className="space-y-6">
          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Upload CV
            </label>
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              className="w-full text-gray-700 border border-gray-300 rounded-lg px-3 py-2 bg-white"
              required
            />
          </div>

          <div>
            <label className="block mb-1 font-medium text-gray-700">
              Cover Letter (optional)
            </label>
            <textarea
              rows="5"
              placeholder="Write your message here..."
              className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-3 rounded-lg font-semibold hover:bg-blue-700 transition"
          >
            Submit Application
          </button>
        </form>
      </div>
    </div>
  );
};

export default JobApplication;
