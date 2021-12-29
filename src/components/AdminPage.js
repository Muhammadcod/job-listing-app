import React, { useState } from 'react';
import Modal from './Modal';
import JobCreationForm from './JobCreationForm';

const AdminPage = () => {
  const [state, setState] = useState({
    viewModal: false,
  });
  const { viewModal } = state;

  const toggleViewModal = () => setState({ ...state, viewModal: !viewModal });

  return (
    <>
      <Modal
        isOpen={viewModal}
        size='lg'
        component={JobCreationForm}
        toggle={toggleViewModal}
      />
      <div className='bg-base-color min-h-screen relative'>
        <div className='bg-dark-cyan-blue h-60 mb-32'>
          <nav className=''>
            <div className='max-w-7xl mx-auto'>
              <div className='relative flex items-center justify-between h-16'>
                <div className='absolute inset-y-0 left-0 flex items-center sm:hidden'>
                  <button
                    type='button'
                    className='inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-white hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white'
                    aria-controls='mobile-menu'
                    aria-expanded='false'
                  >
                    <span className='sr-only'>Open main menu</span>

                    <svg
                      className='block h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M4 6h16M4 12h16M4 18h16'
                      />
                    </svg>
                    <svg
                      className='hidden h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M6 18L18 6M6 6l12 12'
                      />
                    </svg>
                  </button>
                </div>
                <div className='flex-1 flex items-center justify-center sm:items-stretch sm:justify-start'>
                  <div className='flex-shrink-0 flex items-center'>
                    <img
                      className='block lg:hidden h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-mark-indigo-500.svg'
                      alt='Workflow'
                    />
                    <img
                      className='hidden lg:block h-8 w-auto'
                      src='https://tailwindui.com/img/logos/workflow-logo-indigo-500-mark-white-text.svg'
                      alt='Workflow'
                    />
                  </div>
                </div>
                <div className='absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0'>
                  <button
                    type='button'
                    className='bg-gray-800 p-1 rounded-full text-gray-400 hover:text-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                  >
                    <span className='sr-only'>View notifications</span>
                    <svg
                      className='h-6 w-6'
                      xmlns='http://www.w3.org/2000/svg'
                      fill='none'
                      viewBox='0 0 24 24'
                      stroke='currentColor'
                      aria-hidden='true'
                    >
                      <path
                        strokeLinecap='round'
                        strokeLinejoin='round'
                        strokeWidth='2'
                        d='M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9'
                      />
                    </svg>
                  </button>

                  <div className='ml-3 relative'>
                    <div>
                      <button
                        type='button'
                        className='bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-800 focus:ring-white'
                        id='user-menu-button'
                        aria-expanded='false'
                        aria-haspopup='true'
                      >
                        <span className='sr-only'>Open user menu</span>
                        <img
                          className='h-8 w-8 rounded-full'
                          src='https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80'
                          alt=''
                        />
                      </button>
                    </div>

                    <div
                      className='origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none'
                      role='menu'
                      aria-orientation='vertical'
                      aria-labelledby='user-menu-button'
                      tabIndex='-1'
                    >
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-0'
                      >
                        Your Profile
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-1'
                      >
                        Settings
                      </a>
                      <a
                        href='#'
                        className='block px-4 py-2 text-sm text-gray-700'
                        role='menuitem'
                        tabIndex='-1'
                        id='user-menu-item-2'
                      >
                        Sign out
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </nav>
          <div className='container mx-auto mt-20'>
            <h1 className='text-3xl text-white'>Jobs</h1>
          </div>
        </div>

        <div className='container mx-auto'>
          <div className=' mb-8 flex justify-between'>
            <div className='flex flex-row shadow-lg py-2 px-4 rounded bg-white'>
              <input
                className='outline-none'
                type='text'
                placeholder='Search'
              />
              <button className='bg-bright-red text-white rounded-lg px-7 ml-4 py-1'>
                Search
              </button>
            </div>
            <button
              className='rounded-lg bg-bright-red px-9 py-2 text-white'
              onClick={toggleViewModal}
            >
              New Job
            </button>
          </div>
          <div className='flex flex-col'>
            <div className='-my-2 overflow-x-auto sm:-mx-6 lg:-mx-8'>
              <div className='py-2 align-middle inline-block min-w-full sm:px-6 lg:px-8'>
                <div className='shadow overflow-hidden border-b border-gray-200 sm:rounded-lg'>
                  <table className='min-w-full divide-y divide-gray-200'>
                    <thead className='bg-dark-cyan-blue'>
                      <tr className=''>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        />
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Job title
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Date modified
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Candidates
                        </th>
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        />
                        <th
                          scope='col'
                          className='px-6 py-3 text-left text-xs font-medium text-white uppercase tracking-wider'
                        >
                          Filter
                        </th>
                      </tr>
                    </thead>
                    <tbody className='bg-white divide-y divide-gray-200'>
                      <tr className='space-y-6'>
                        <td />
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='flex items-center'>
                            <div className=''>
                              <div className='text-sm font-medium text-gray-900'>
                                Front end developer
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>12/7/21</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap'>
                          <div className='text-sm text-gray-900'>50</div>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm text-gray-500'>
                          <button className='rounded-sm bg-bright-red px-8 py-1 text-white'>
                            Edit
                          </button>
                        </td>
                        <td className='px-6 py-4 whitespace-nowrap text-sm font-medium'>
                          <button className='rounded-none border border-light-blue px-7 py-1 text-light-blue'>
                            Delete
                          </button>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

                <div className='hidden sm:flex-1 sm:flex sm:items-center sm:justify-between mt-8'>
                  <div>
                    <nav
                      className='relative z-0 inline-flex rounded-md shadow-sm -space-x-px'
                      aria-label='Pagination'
                    >
                      <a
                        href='#'
                        aria-current='page'
                        className='z-10 bg-indigo-50 border-indigo-500 text-indigo-600 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      >
                        1
                      </a>
                      <a
                        href='#'
                        className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      >
                        2
                      </a>
                      <a
                        href='#'
                        className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
                      >
                        3
                      </a>
                      <span className='relative inline-flex items-center px-4 py-2 border border-gray-300 bg-white text-sm font-medium text-gray-700'>
                        ...
                      </span>
                      <a
                        href='#'
                        className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 hidden md:inline-flex relative items-center px-4 py-2 border text-sm font-medium'
                      >
                        8
                      </a>
                      <a
                        href='#'
                        className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      >
                        9
                      </a>
                      <a
                        href='#'
                        className='bg-white border-gray-300 text-gray-500 hover:bg-gray-50 relative inline-flex items-center px-4 py-2 border text-sm font-medium'
                      >
                        10
                      </a>
                      <a
                        href='#'
                        className='relative inline-flex items-center px-2 py-2 rounded-r-md border border-gray-300 bg-white text-sm font-medium text-gray-500 hover:bg-gray-50'
                      >
                        <span className='sr-only'>Next</span>
                        <svg
                          className='h-5 w-5'
                          xmlns='http://www.w3.org/2000/svg'
                          viewBox='0 0 20 20'
                          fill='currentColor'
                          aria-hidden='true'
                        >
                          <path
                            fillRule='evenodd'
                            d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                            clipRule='evenodd'
                          />
                        </svg>
                      </a>
                    </nav>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <footer className='bg-dark-cyan-blue h-24 absolute bottom-0'>A</footer>
      </div>
    </>
  );
};

export default AdminPage;
