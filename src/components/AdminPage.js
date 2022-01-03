import React, { useEffect, useState } from 'react';
import Modal from './Modal';
import JobCreationForm from './JobCreationForm';
import JobListRow from './JobListRow';
import Pagination from './Pagination';
import { ReactComponent as PlusIcon } from '../assets/plus.svg';
import { ReactComponent as Filter } from '../assets/filter.svg';
import Layout from './Layout';
import { removeBaseUrl } from '../services/helpers';
import Axios from '../services/Axios';

const style = (
  <style jsx=''>
    {`
      .table {
        border-spacing: 0 15px;
      }

      .table tr {
        border-radius: 20px;
      }

      tr td:nth-child(n + 6),
      tr th:nth-child(n + 6) {
        border-radius: 0 0.625rem 0.625rem 0;
      }

      tr td:nth-child(1),
      tr th:nth-child(1) {
        border-radius: 0.625rem 0 0 0.625rem;
      }
    `}
  </style>
);

const AdminPage = () => {
  const [state, setState] = useState({
    viewModal: false,
  });
  const [jobsList, setJobsList] = useState([]);
  const [pageMeta, setPageMeta] = useState({});
  const { viewModal } = state;

  const toggleViewModal = () => setState({ ...state, viewModal: !viewModal });

  const fetchMyJobs = async (endpoint = null) => {
    const refinedEndpoint = removeBaseUrl(endpoint);

    try {
      const { data, status } = await Axios.get(
        refinedEndpoint || `/v1/my/jobs`
      );
      if (status === 200) {
        setJobsList(data.data);
        setPageMeta({ ...data.meta, buttonLinks: data.links });
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchMyJobs();
  }, []);

  return (
    <>
      <Modal
        isOpen={viewModal}
        size='md'
        component={JobCreationForm}
        toggle={toggleViewModal}
      />
      <Layout>
        <div className='container mx-auto'>
          <div className=' mb-8 flex justify-between'>
            <div className='flex flex-row shadow-lg py-2 px-2 rounded-lg bg-white'>
              <input
                className='outline-none border-0'
                type='text'
                placeholder='Search'
              />
              <button className='bg-bright-red text-white rounded-lg px-8 ml-4 '>
                Search
              </button>
            </div>
            <button
              className='rounded-lg bg-bright-red px-9 text-white flex items-center content-center'
              onClick={toggleViewModal}
            >
              <PlusIcon className='mr-4 text-sm' />
              New Job
            </button>
          </div>

          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className=''>
                  <table className='table min-w-full  border-separate'>
                    <thead className='bg-dark-cyan-blue'>
                      <tr className=''>
                        {[
                          '',
                          'Job title',
                          'Date modified',
                          'Candidates',
                          '',
                          'Filter',
                        ].map((he, idx) => (
                          <th
                            scope='col'
                            className='px-6 py-3 font-poppins text-left text-lg font-medium text-white uppercase tracking-wider'
                            key={idx}
                          >
                            <span className='flex'>
                              {he} {he === 'Filter' && <Filter />}
                            </span>
                          </th>
                        ))}
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y-8 divide-gray-200'>
                      {jobsList.length > 0 &&
                        jobsList.map((job) => (
                          <JobListRow key={job.id} job={job} />
                        ))}
                    </tbody>
                  </table>
                </div>

                <Pagination
                  meta={pageMeta}
                  recordFunc={(ep) => fetchMyJobs(ep)}
                />
              </div>
            </div>
          </div>
        </div>
      </Layout>
      {style}
    </>
  );
};

export default AdminPage;
