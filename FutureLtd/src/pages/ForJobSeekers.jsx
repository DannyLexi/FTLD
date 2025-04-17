import React, { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";

const ForJobSeekers = ({ jobs }) => {
  const [search, setSearch] = useState("");
  const [filteredJobs, setFilteredJobs] = useState(jobs);
  const [cv, setCv] = useState(null);
  const fileInputRef = useRef();
  const navigate = useNavigate();

  const handleSearch = (e) => {
    const keyword = e.target.value.toLowerCase();
    setSearch(keyword);
    const filtered = jobs.filter(
      (job) =>
        job.title.toLowerCase().includes(keyword) ||
        job.company.toLowerCase().includes(keyword) ||
        job.location.toLowerCase().includes(keyword) ||
        job.type.toLowerCase().includes(keyword)
    );
    setFilteredJobs(filtered);
  };

  const handleCvUpload = (e) => {
    setCv(e.target.files[0]);
  };

  const handleCvSubmit = (e) => {
    e.preventDefault();
    if (cv) {
      alert(`CV submitted: ${cv.name}`);
      setCv(null);
      fileInputRef.current.value = null; // Reset file input visually
    } else {
      alert("Please upload your CV first.");
    }
  };

  const handleApply = (id) => {
    navigate(`/apply/${id}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen px-6 py-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-3xl font-bold text-center mb-8 text-gray-800">
          Welcome Job Seeker
        </h1>

        {/* Search Section */}
        <div className="mb-8">
          <input
            type="text"
            value={search}
            onChange={handleSearch}
            placeholder="Search jobs by title, company, location..."
            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* CV Submission */}
        <div className="bg-white p-6 rounded-xl shadow mb-10">
          <h2 className="text-xl font-semibold mb-4 text-gray-700">Submit Your CV</h2>
          <form onSubmit={handleCvSubmit} className="space-y-4">
            <input
              type="file"
              accept=".pdf,.doc,.docx"
              onChange={handleCvUpload}
              ref={fileInputRef}
              className="w-full border border-gray-300 rounded px-4 py-2"
            />
            {cv && (
              <p className="text-sm text-gray-600">
                Selected file: <span className="font-medium">{cv.name}</span>
              </p>
            )}
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
            >
              Submit CV
            </button>
          </form>
        </div>

        {/* Job Listings */}
        <div className="space-y-6">
          <h2 className="text-2xl font-semibold text-gray-700 mb-4">Available Jobs</h2>
          {filteredJobs.length > 0 ? (
            filteredJobs.map((job) => (
              <div
                key={job.id}
                className="bg-white p-5 rounded-xl border border-gray-200 shadow"
              >
                <h3 className="text-xl font-bold text-blue-700">{job.title}</h3>
                <p className="text-gray-600">
                  <strong>Company:</strong> {job.company}
                </p>
                <p className="text-gray-600">
                  <strong>Location:</strong> {job.location}
                </p>
                <p className="text-gray-600 mb-3">
                  <strong>Type:</strong> {job.type}
                </p>
                <button
                  onClick={() => handleApply(job.id)}
                  className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700"
                >
                  Apply
                </button>
              </div>
            ))
          ) : (
            <p className="text-gray-500">No jobs found for your search.</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ForJobSeekers;
