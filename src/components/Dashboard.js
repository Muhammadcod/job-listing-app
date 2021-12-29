import React, { useEffect, useState } from 'react';
import Header from './Header';
import JobSummaryCard from './JobSummaryCard';
import axios from 'axios';
import JobDetails from './JobDetails';

const Dashboard = () => {
  const [jobsList, setJobsList] = useState([]);
  const [job, setJob] = useState({});

  const fetchJobs = async () => {
    try {
      const { data, status } = await axios.get(`/jobs`);
      if (status) {
        setJobsList(data.data);
        setJob(data.data[0]);
      }
    } catch (error) {
      // Do something
    }
  };

  useEffect(() => {
    fetchJobs();
  }, []);

  const displayJobDetails = (jobDetails) => {
    if (jobDetails) {
      setJob(jobDetails);
    }
  };

  return (
    <div className='bg-base-color min-h-screen relative'>
      <Header showLandingDetails />
      <div className='container mx-auto'>
        <div className='grid grid-cols-2 gap-12'>
          <div>
            <div className='space-y-8 overflow-y-auto h-3/5'>
              <JobSummaryCard
                jobsList={jobsList}
                displayJobDetails={displayJobDetails}
              />
            </div>
          </div>
          <div>
            <JobDetails job={job} />
          </div>
        </div>
      </div>

      <footer className='bg-dark-cyan-blue h-24'>A</footer>
    </div>
  );
};

export default Dashboard;
