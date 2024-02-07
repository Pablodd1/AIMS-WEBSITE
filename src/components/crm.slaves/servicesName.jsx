
import axios from 'axios';
// import AsyncStorage from '@react-native-async-storage/async-storage';
const domainName = 'http://localhost:3000/'


// export async function getArray(endpoint, key) {
//   const cacheKey = key;
//   let resArray = await AsyncStorage.getItem(cacheKey);
//   let data;

//   // If the data is already in cache, check if it has changed on the server
//   if (resArray) {
//     resArray = JSON.parse(resArray);
//     try {
//       const response = await axios.head(`http://${domainName}/${endpoint}`);
//       const lastModified = response.headers["last-modified"];

//       // If the server data has not changed since the last time we fetched it, return the cached data
//       if (new Date(lastModified).getTime() <= new Date(resArray.lastFetched).getTime()) {
//         return resArray.data;
//       }
//     } catch (error) {
//       console.error('error:', error);
//     }
//   }

//   // Fetch latest data from server
//   try {
//     const response = await axios.get(`http://${domainName}/${endpoint}`);
//     data = response.data;

//     // Save data and timestamp in cache
//     await AsyncStorage.setItem(cacheKey, JSON.stringify({ data, lastFetched: new Date() }));


//   } catch (error) {
//     console.error('error:', error);
//     // If an error occurs, return the cached data if available
//     if (resArray) {
//       return resArray.data;
//     }
//     return [];
//   }


//   return data;
// }


// to create booking 
export const createBooking = async (id, category, date, slot, address, price, providerID) => {
  try {
    const response = await fetch(`http://${domainName}/providers/${id}/bookings`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ category, date, slot, address, price, providerID })
    });

    if (response.ok) {
      return 'Booking Success';
    } else {
      console.error('Failed to create booking');
    }
  } catch (err) {
    console.error(err);
  }
};


// to give feedback
export const handleSubmit = async (id, userName, service, cost, selectedRating, msg) => {
  try {
    const response = await axios.post(`http://${domainName}/providers/${id}/serviceFeedback`, {
      userName,
      service,
      cost,
      selectedRating,
      msg,
    });

    console.log(response.data.message); // Feedback submitted successfully
  } catch (error) {
    console.error(error.response.data.error);
  }
};

// to create user 
export const createUser = async (name, email, phoneNo, address, provider, serviceIncludes) => {
  console.log(name, email, phoneNo, address, provider, serviceIncludes)
  try {
    const response = await axios.post(`http://${domainName}/providers/createUser`, {
      name, email, phoneNo, address, provider, serviceIncludes
    });

    console.log(response.data.message); // Feedback submitted successfully
  } catch (error) {
    console.error(error);
  }
};


export function formatDate(dateString) {
  const date = new Date(dateString);
  const day = date.getDate();
  const monthIndex = date.getMonth();
  const year = date.getFullYear();

  // Convert day to ordinal suffix (e.g., 1st, 2nd, 3rd, 4th)
  const daySuffix = getDaySuffix(day);

  // Get the month name
  const monthNames = [
    'January', 'February', 'March', 'April', 'May', 'June',
    'July', 'August', 'September', 'October', 'November', 'December'
  ];
  const monthName = monthNames[monthIndex];

  // Format the date as '9th January 2023'
  const formattedDate = `${day}${daySuffix} ${monthName} ${year}`;

  return formattedDate;
}

// Get Month Name 3-Letters
export function shortMonth(date) {
  const months = [
    "Jan", "Feb", "Mar", "Apr", "May", "Jun",
    "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"
  ];

  if (!(date instanceof Date) || isNaN(date)) {
    return "Invalid Date";
  }

  const monthIndex = date.getMonth();
  return months[monthIndex];
}




// Helper function to get the ordinal suffix for a day
export function getDaySuffix(day) {
  if (day >= 11 && day <= 13) {
    return 'th';
  }
  switch (day % 10) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

export function formatTime(slot) {
  // Calculate the hour based on the slot number
  const hour = 8 + slot - 1;

  // Determine if it's AM or PM
  const period = hour >= 12 ? 'PM' : 'AM';

  // Adjust the hour for PM values
  const adjustedHour = hour > 12 ? hour - 12 : hour;

  // Format the time as '10:00 AM'
  const formattedTime = `${adjustedHour}:00 ${period}`;

  return formattedTime;
}

// To extract bookings 
export function extractBookingData(bookings) {
  const currentDate = new Date();
  const formattedCurrentDate = currentDate.toISOString().split('T')[0]; // Format current date as YYYY-MM-DD

  // Sort the bookings based on date
  const sortedBookings = bookings.sort((a, b) => {
    const dateA = new Date(a.date);
    const dateB = new Date(b.date);
    return dateA - dateB;
  });

  let nextBooking = sortedBookings[0];
  let todayBookings = [];
  let tomorrowBookings = [];
  let restBookings = [];

  sortedBookings.forEach(booking => {
    const bookingDate = new Date(booking.date).toISOString().split('T')[0];

    if (bookingDate === formattedCurrentDate && !nextBooking) {
      nextBooking = booking;
    } else if (bookingDate === formattedCurrentDate) {
      todayBookings.push(booking);
    } else if (bookingDate === incrementDateByDays(formattedCurrentDate, 1)) {
      tomorrowBookings.push(booking);
    } else {
      restBookings.push(booking);
    }
  });

  return {
    nextBooking,
    todayBookings,
    tomorrowBookings,
    restBookings
  };
}

// Helper function to increment date by given number of days
function incrementDateByDays(date, days) {
  const newDate = new Date(date);
  newDate.setDate(newDate.getDate() + days);
  return newDate.toISOString().split('T')[0];
}


// Get Day Label
export function getDayLabel(date) {
  const currentDate = new Date();
  const inputDate = new Date(date);

  // Get the time difference in milliseconds between the input date and current date
  const timeDifference = inputDate.getTime() - currentDate.getTime();

  // Convert the time difference to days
  const daysDifference = Math.floor(timeDifference / (1000 * 60 * 60 * 24));

  if (daysDifference === 0) {
    return "Today";
  } else if (daysDifference === 1) {
    return "Tomorrow";
  } else if (daysDifference > 1 && daysDifference <= 7) {
    const dayOfWeek = getDayOfWeek(inputDate);
    return `This week on ${dayOfWeek}`;
  } else if (daysDifference > 7 && daysDifference <= 14) {
    const dayOfWeek = getDayOfWeek(inputDate);
    return `Next week on ${dayOfWeek}`;
  } else if (
    inputDate.getMonth() === currentDate.getMonth() &&
    inputDate.getFullYear() === currentDate.getFullYear()
  ) {
    const dayOfMonth = inputDate.getDate();
    return `This month, ${dayOfMonth}${getDayOfMonthSuffix(dayOfMonth)}`;
  } else if (
    inputDate.getMonth() === currentDate.getMonth() + 1 &&
    inputDate.getFullYear() === currentDate.getFullYear()
  ) {
    const dayOfMonth = inputDate.getDate();
    return `Next month, ${dayOfMonth}${getDayOfMonthSuffix(dayOfMonth)}`;
  } else {
    return formatDate(date); // Return the formatted date for other cases
  }
}

function getDayOfWeek(date) {
  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  return days[date.getDay()];
}

function getDayOfMonthSuffix(day) {
  if (day >= 11 && day <= 13) {
    return "th";
  }

  const lastDigit = day % 10;
  switch (lastDigit) {
    case 1:
      return "st";
    case 2:
      return "nd";
    case 3:
      return "rd";
    default:
      return "th";
  }
}

// Function to take actions (accept, reject, complete) a booking
export const bookingActions = async (userID, bookingID, action) => {
  try {
    const response = await axios.post(`http://${domainName}/providers/${userID}/${bookingID}/${action}`);
    return response.data;
  } catch (error) {
    console.error(error);
    throw new Error('Failed to accept booking');
  }
};

// Format Date for MSg
export function formatDateForMsg(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  // Check if it's today
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    return 'Today';
  }

  // Check if it's yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    return 'Yesterday';
  }

  // Check if it's within the same week
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diffInDays < now.getDay()) {
    return date.toLocaleDateString('en-US', { weekday: 'short' });
  }

  // Older than this week
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}


// format date and time for msg
export function formatDateWithTimeForMsg(dateString) {
  const date = new Date(dateString);
  const now = new Date();

  // Check if it's today
  if (
    date.getDate() === now.getDate() &&
    date.getMonth() === now.getMonth() &&
    date.getFullYear() === now.getFullYear()
  ) {
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `Today, ${timeString}`;
  }

  // Check if it's yesterday
  const yesterday = new Date();
  yesterday.setDate(now.getDate() - 1);
  if (
    date.getDate() === yesterday.getDate() &&
    date.getMonth() === yesterday.getMonth() &&
    date.getFullYear() === yesterday.getFullYear()
  ) {
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    return `Yesterday, ${timeString}`;
  }

  // Check if it's within the same week
  const diffInDays = Math.floor((now - date) / (1000 * 60 * 60 * 24));
  if (diffInDays < now.getDay()) {
    const timeString = date.toLocaleTimeString('en-US', {
      hour: '2-digit',
      minute: '2-digit',
    });
    const weekdayString = date.toLocaleDateString('en-US', { weekday: 'short' });
    return `${weekdayString}, ${timeString}`;
  }

  // Older than this week
  return date.toLocaleDateString('en-US', {
    day: 'numeric',
    month: 'short',
    year: 'numeric',
  });
}

