import React from "react";
import Image from "next/image";

import Container from "../Container";
import { Badge } from "../ui/badge";
import JobCard from "./JobCard";

type Props = {};

const JOBS = [
  {
    company: "Company Name",
    title: "Job Title",
    tags: ["Full Time", "Visa Sponsorship", "Insurance"],
  },
];

function Jobs({}: Props) {
  return (
    <div id="jobs">
      <Container className="mt-20">
        <h2 className="text-base sm:text-lg md:text-xl font-bold">
          Latest jobs
        </h2>
        <div className="mt-2 flex flex-col gap-1">
          <JobCard /> <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
          <JobCard />
        </div>
      </Container>
    </div>
  );
}

export default Jobs;
