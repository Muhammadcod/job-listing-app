import React, { useEffect, useState } from 'react';
import JobSummaryCard from './JobSummaryCard';
import JobDetails from './JobDetails';
import Dropdown from './Dropdown';
import Layout from './Layout';
import Pagination from './Pagination';
import { removeBaseUrl } from '../services/helpers';
import Axios from '../services/Axios';

const Dashboard = () => {
  const [jobsList, setJobsList] = useState([]);
  const [selectedJob, setJob] = useState({});
  const [pageMeta, setPageMeta] = useState({});

  const fetchJobs = async (endpoint = null) => {
    const refinedEndpoint = removeBaseUrl(endpoint);
    try {
      const { data, status } = await Axios.get(refinedEndpoint || `/jobs`);
      if (status) {
        setJobsList(data.data);
        setJob(data.data[0]);
        setPageMeta({ ...data.meta, buttonLinks: data.links });
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
    <Layout showLandingDetails>
      <div className='container mx-auto mb-10'>
        <div className='grid grid-cols-2 md:grid-cols-3 gap-4 mb-10'>
          <div className='border-2 font-poppins text-xl pt-2'>
            <span>Showing {jobsList.length} results</span>
          </div>
          <div className='md:col-span-2 text-xl'>
            <span className='text-gray-400'>Sort by</span>
            <span className='mr-3'>:</span>
            <Dropdown />
          </div>
        </div>

        <div className='flex space-x-20 mb-10'>
          <main className='md:w-2/4 w-full px-3 md:px-0'>
            <div className='space-y-8 overflow-y-auto rounded-lg'>
              <JobSummaryCard
                jobsList={jobsList}
                displayJobDetails={displayJobDetails}
              />
            </div>
            <Pagination meta={pageMeta} recordFunc={(ep) => fetchJobs(ep)} />
          </main>

          <aside className='h-screen md:block hidden sticky top-0 w-2/4 mb-5'>
            {jobsList.length > 0 && <JobDetails job={selectedJob} />}
          </aside>
        </div>
      </div>
    </Layout>
  );
};

export default Dashboard;
