import React, { useEffect, useState } from 'react';
import DoughnutChart from './leafs/DoughnutChart';

// Import utilities
import { tailwindConfig } from './utils/Utils';
import axios from 'axios';

const APILink = import.meta.env.VITE_APILink
function DashboardCard06() {
  const [counts, setCounts] = useState([0, 0, 0]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${APILink}/users/billing-mode-counts`)
      .then(response => {
        setCounts(response.data);
        setIsLoading(false)
      })
      .catch(error => {
        console.error('Error fetching billing mode counts:', error);
        setIsLoading(false)
      });
  }, []);

  const chartData = {
    labels: ['Monthly', 'Yearly', 'Trial'],
    datasets: [
      {
        label: 'Packages',
        data: counts,
        backgroundColor: [
          tailwindConfig().theme.colors.purple[500],
          tailwindConfig().theme.colors.teal[600],
          tailwindConfig().theme.colors.red[500],
        ],
        hoverBackgroundColor: [
          tailwindConfig().theme.colors.purple[200],
          tailwindConfig().theme.colors.teal[300],
          tailwindConfig().theme.colors.red[200],
        ],
        borderWidth: 0,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full xl:col-span-4 border-teal-800  bg-blue-100 shadow-lg rounded-sm border border-slate-200 ">
      <header className="px-5 py-4 border-b bg-teal-500 border-teal-700">
        <h2 className="font-semibold text-black-900 ">Packages</h2>
      </header>
      {isLoading ? <div>Fetching...</div> :
        <DoughnutChart data={chartData} width={389} height={260} />
      }
    </div>
  );
}

export default DashboardCard06;
