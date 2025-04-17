import React from "react";
import { Link } from "react-router-dom";

const JobBoard = ({ jobs }) => {
  return (
    <div className="py-12 px-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-10 text-gray-800">
        Current Job Openings
      </h1>
      <div className="max-w-4xl mx-auto space-y-6">
        {jobs && jobs.length > 0 ? (
          jobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-2xl shadow-md p-6 border border-gray-200"
            >
              <h2 className="text-xl font-semibold text-blue-700">{job.title}</h2>
              <p className="text-gray-600 mt-1">
                <strong>Company:</strong> {job.company}
              </p>
              <p className="text-gray-600">
                <strong>Location:</strong> {job.location}
              </p>
              <p className="text-gray-600">
                <strong>Type:</strong> {job.type}
              </p>
              <Link to={`/apply/${job.id}`}>
                <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-200">
                  Apply Now
                </button>
              </Link>
            </div>
          ))
        ) : (
          <p className="text-center text-gray-600">No jobs posted yet.</p>
        )}
      </div>
    </div>
  );
};

export default JobBoard;
