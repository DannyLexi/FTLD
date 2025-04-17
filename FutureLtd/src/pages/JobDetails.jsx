import React from "react";
import { useParams } from "react-router-dom";

const JobDetails = ({ jobs }) => {
  const { id } = useParams();
  const job = jobs.find((job) => job.id === parseInt(id));

  return (
    <div className="py-12 px-6 bg-gray-50 min-h-screen">
      {job ? (
        <div className="max-w-4xl mx-auto bg-white p-8 rounded-xl shadow-lg">
          <h1 className="text-3xl font-bold text-center text-gray-800 mb-6">{job.title}</h1>
          <p><strong>Company:</strong> {job.company}</p>
          <p><strong>Location:</strong> {job.location}</p>
          <p><strong>Type:</strong> {job.type}</p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-5 py-2 rounded-xl transition duration-200">
            Apply Now
          </button>
        </div>
      ) : (
        <p>Job not found!</p>
      )}
    </div>
  );
};

export default JobDetails;
