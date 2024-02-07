import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { getFirstLetters, getRandomColor } from '../dashboard.slaves';
import { Avatar, Button } from '@mui/material';
import SimpleBackdrop from '../backdrop';

const APILink = import.meta.env.VITE_APILink
function DashboardCard10() {
  const [customers, setCustomers] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const [count, setCount] = useState(1);

  const fetchCustomers = (page) => {
    setIsLoading(true);
    axios.get(`${APILink}/users/all?page=${page}`)
      .then(response => {
        const temp = response.data.users;
        setCustomers(customers.concat(temp));
        setCount(Math.ceil(response.data.totalCount/5))
        setIsLoading(false);
      })
      .catch(error => {
        console.error('Error fetching users:', error);
        setIsLoading(false);
      });
  };

  useEffect(() => {
    fetchCustomers(currentPage);
  }, [currentPage]);

  const handleLoadMore = () => {
    if (currentPage < count) {
      setCurrentPage(currentPage + 1);
    }
  };
  return (
    customers &&
      <div className="col-span-full h-auto min-h-fit bg-blue-100 shadow-lg rounded-sm border border-teal-800 ">
        <header className="px-5 py-4 border-b bg-teal-500 border-teal-700 ">
          <h2 className="font-semibold text-black-900 ">Customers</h2>
        </header>
        <div className="p-3">

          {/* Table */}
          <div id="customerTable" className="overflow-x-auto custom-scrollbar scroll-smooth max-h-96 overflow-y-auto ">
            <table className="table-auto w-full">
              {/* Table header */}
              <thead className="text-xs  font-semibold uppercase text-black-400  bg-slate-50 bg-teal-300 bg-opacity-50">
                <tr>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Name</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left font-mono">Email</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Phone</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-left">Organization</div>
                  </th>
                  <th className="p-2 whitespace-nowrap">
                    <div className="font-semibold text-center">Subscribed</div>
                  </th>
                </tr>
              </thead>
              {/* Table body */}
              <tbody className="  text-sm divide-y divide-black-100 divide-teal-400">
                {
                  customers.map((customer,i) => {
                    return (
                      <tr key={i}>
                        <td className="p-2 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="w-10 h-10 shrink-0 mr-2 sm:mr-3">
                              <Avatar className="rounded-full" style={{ backgroundColor: getRandomColor() }} width="40" height="40" alt={customer.name} >
                                {getFirstLetters(customer.firstName)}
                              </Avatar>
                            </div>
                            <div className="font-medium text-teal-800">{`${customer.firstName} ${customer.lastName}`}</div>
                          </div>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <button onClick={() => window.location.href = `mailto:${customer.email}`} className="text-left">{customer.email}</button>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <button onClick={() => window.location.href = `tel:${customer.phoneNumber}`} className="text-left font-medium ">{customer.phoneNumber}</button>
                        </td>
                        <td className="p-2 whitespace-nowrap">
                          <div className="text-left font-medium ">{customer.organization}</div>
                        </td>
                        <td className="p-2 whitespace-nowrap" style={{ color: customer.subscription ? '#187749' : '#f00' }} >
                          <div className="text-lg text-center">{customer.subscription ? 'Yes' : 'No'}</div>
                        </td>
                      </tr>
                    )
                  })
                }
              </tbody>
            </table>
            {currentPage >= count ||
              <Button onClick={handleLoadMore} disabled={isLoading || currentPage >= count}>
                {isLoading ? 'Loading...' : ('Load More')}
              </Button>
            }
          </div>

        </div>
      </div>

  );
}

export default DashboardCard10;
