import React, { useEffect, useState } from 'react';
import LineChart from './leafs/LineChart02';

// Import utilities
import { tailwindConfig } from './utils/Utils';
import axios from 'axios';

function tag(total) {
  const x = total[total.length - 1];
  const y = total[total.length - 2];
  const percentageChange = x >= y ? ((x - y) / x) * 100 : ((y - x) / y) * 100;
  const prefix = x === y ? ' ' : (x > y ? "+" : "-");
  return `${prefix}${percentageChange}`
}

function generateFormattedDates() {
  const today = new Date();
  const dates = [];

  for (let i = 0; i < 30; i++) {
    const currentDate = new Date(today);
    currentDate.setDate(today.getDate() - i);

    const formattedDate = currentDate.toLocaleDateString('en-US', {
      year: 'numeric',
      day: '2-digit',
      month: '2-digit'
    }).replace(/\//g, '-'); // Replace slashes with dashes

    dates.push(formattedDate);
  }

  return dates.slice().reverse();
}

const APILink = import.meta.env.VITE_APILink
function DashboardCard08() {
  const [dates, setDates] = useState(generateFormattedDates());
  const [bookings, setBookings] = useState([]);
  const [subscriptions, setSubscriptions] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [totalActivity, setTotalActivity] = useState(0);
  const [total, setTotal] = useState(0);


  useEffect(() => {
    axios.get(`${APILink}/subs/user-activity-counts`)
      .then(response => {
        const reversedBookings = response.data.userBookings;
        const reversedSubscriptions = response.data.userSubscriptions;

        setBookings(reversedBookings)
        setSubscriptions(reversedSubscriptions)
        const temp = response.data.userBookings.map((x, i) => x + response.data.userSubscriptions[i])
        const total = temp.reduce((accumulator, currentValue) => accumulator + currentValue, 0);
        setTotal(temp)
        setTotalActivity(total);
        setIsLoading(false);

      })
      .catch(error => {
        console.error('Error fetching dates:', error);
      });
  }, []);

  const chartData = {
    labels: dates,
    datasets: [
      // Indigo line
      {
        label: 'Subscriptions',
        data: subscriptions,
        borderColor: tailwindConfig().theme.colors.indigo[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.indigo[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // Blue line
      {
        label: 'Bookings',
        data: bookings,
        borderColor: tailwindConfig().theme.colors.blue[400],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.blue[400],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.blue[400],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
      // emerald line
      {
        label: 'Total',
        data: total,
        borderColor: tailwindConfig().theme.colors.emerald[500],
        fill: false,
        borderWidth: 2,
        tension: 0,
        pointRadius: 0,
        pointHoverRadius: 3,
        pointBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        pointHoverBackgroundColor: tailwindConfig().theme.colors.emerald[500],
        pointBorderWidth: 0,
        pointHoverBorderWidth: 0,
        clip: 20,
      },
    ],
  };

  return (
    <div className="flex flex-col col-span-full bg-white-700 shadow-lg rounded-sm border border-slate-200 ">
      <header className="px-5 py-4 border-b border-slate-100  flex items-center">
        <h2 className="font-semibold text-teal-700 ">Interactions over Time</h2>
      </header>
      {isLoading ? <div>fetching... </div>
        : <LineChart data={chartData} counts={totalActivity} tag={tag(total)} width={595} height={248} />
      }
    </div>
  );
}

export default DashboardCard08;
