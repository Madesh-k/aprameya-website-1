import React from "react";
import JobCard from "./JobCards";

function Job() {
  const jobDetails = [
    {
      title: "Reel Creation Intern",
      company: "APRAMEYA",
      location: "Mumbai",
      reviewTime: "Applicant Review time is typically 2 days",
      posted: "2 days ago",
    },
    {
      title: "Human Resource Intern",
      company: "APRAMEYA",
      location: "Mumbai",
      reviewTime: "Applicant Review time is typically 2 days",
      posted: "2 days ago",
    },
    {
      title: "Public Relation Intern",
      company: "APRAMEYA",
      location: "Mumbai",
      reviewTime: "Applicant Review time is typically 2 days",
      posted: "2 days ago",
    },
    {
      title: "Social Media Marketing Intern",
      company: "APRAMEYA",
      location: "Mumbai",
      reviewTime: "Applicant Review time is typically 2 days",
      posted: "2 days ago",
    },
  ];

  return (
    <div
      id="jobs"
      className="min-h-screen bg-white  flex flex-col items-center max-w-7xl mx-auto px-12 mt-20"
    >
      <h1 className="text-3xl font-bold mb-6">Jobs</h1>
      <div className="flex flex-wrap justify-between w-full gap-4">
        {jobDetails.map((job, index) => (
          <JobCard
            key={index}
            title={job.title}
            company={job.company}
            location={job.location}
            reviewTime={job.reviewTime}
            posted={job.posted}
          />
        ))}
      </div>
    </div>
  );
}

export default Job;
