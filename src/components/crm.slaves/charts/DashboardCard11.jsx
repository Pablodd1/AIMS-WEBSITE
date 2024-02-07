import React, { useEffect, useState } from 'react';
import BarChart from './leafs/BarChart03';

// Import utilities
import { tailwindConfig } from './utils/Utils';
import axios from 'axios';

const APILink = import.meta.env.VITE_APILink
function DashboardCard11() {
  const [counts, setCounts] = useState({});
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    axios.get(`${APILink}/users/referral-source-counts`)
      .then(response => {
        setCounts(response.data);
        setIsLoading(false);
        console.log([response.data["Instagram"]])
      })
      .catch(error => {
        console.error('Error fetching referral source counts:', error);
      });
  }, []);
  const getTotalCount = () => {
    return Object.values(counts).reduce((total, count) => total + count, 0);
  };
  const chartData = {
    labels: ['Referring Source'],
    datasets: [
      {
        label: 'Instagram',
        data: [counts["Instagram"]],
        backgroundColor: tailwindConfig().theme.colors.red[300],
        hoverBackgroundColor: tailwindConfig().theme.colors.red[400],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Google',
        data: [counts["Google"]],
        backgroundColor: tailwindConfig().theme.colors.orange[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.orange[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'In an Article',
        data: [counts["In an Article"]],
        backgroundColor: tailwindConfig().theme.colors.sky[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.sky[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Bing',
        data: [counts["Bing"]],
        backgroundColor: tailwindConfig().theme.colors.blue[400],
        hoverBackgroundColor: tailwindConfig().theme.colors.blue[500],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Ads',
        data: [counts["Ads"]],
        backgroundColor: tailwindConfig().theme.colors.pink[600],
        hoverBackgroundColor: tailwindConfig().theme.colors.pink[700],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Friend',
        data: [counts["Friend"]],
        backgroundColor: tailwindConfig().theme.colors.teal[500],
        hoverBackgroundColor: tailwindConfig().theme.colors.teal[600],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Facebook',
        data: [counts["Facebook"]],
        backgroundColor: tailwindConfig().theme.colors.purple[700],
        hoverBackgroundColor: tailwindConfig().theme.colors.purple[800],
        barPercentage: 1,
        categoryPercentage: 1,
      },
      {
        label: 'Other',
        data: [counts["Other"]],
        backgroundColor: tailwindConfig().theme.colors.slate[800],
        hoverBackgroundColor: tailwindConfig().theme.colors.slate[900],
        barPercentage: 1,
        categoryPercentage: 1,
      },
    ],
  };

  return (
    <div className="col-span-full rounded-xl  xl:col-span-8  bg-teal-50 shadow-lg overflow-hidden rounded-lg border border-teal-700 ">
      <header className="px-5 py-4 border-b  bg-teal-500   border-black-600">
        <h2 className="font-semibold text-black-800 ">From where did Customer hear?</h2>
      </header>
      <div className="px-5 py-3">
        <div className="flex items-start">
          <div className="text-3xl font-bold text-black-800 mr-2">{counts ? 'Counts' : getTotalCount()}</div>
        </div>
      </div>
      {/* Chart built with Chart.js 3 */}
      <div className="grow">
        {isLoading ? <div>fetching... </div>
          : <BarChart data={chartData} width={595} height={48} />
        }</div>
    </div>
  );
}

export default DashboardCard11;
