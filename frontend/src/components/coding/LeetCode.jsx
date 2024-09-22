// import React from 'react'

// const LeetCode = () => {
//   return (
//     <div>LeetCode</div>
//   )
// }

// export default LeetCode

import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import 'tailwindcss/tailwind.css';

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetcodeStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Function to fetch Leetcode user stats data
    const fetchData = async () => {
      try {
        const response = await axios.get('https://leetcode-stats-api.herokuapp.com/SAGAR_SH_987'); // Replace with actual API
        setData(response.data);
        setLoading(false);
      } catch (error) {
        console.error('Error fetching data', error);
        setLoading(false);
      }
    };
    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center text-xl">Loading...</div>;
  }

  if (!data) {
    return <div className="text-center text-xl text-red-600">Failed to load data</div>;
  }

  // Example response format for chart data
  const easySolved = data.easySolved;
  const mediumSolved = data.mediumSolved;
  const hardSolved = data.hardSolved;

  const totalEasy = data.totalEasy;
  const totalMedium = data.totalMedium;
  const totalHard = data.totalHard;

  const totalSolved = easySolved + mediumSolved + hardSolved;
  const totalQuestions = totalEasy + totalMedium + totalHard;

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [easySolved, mediumSolved, hardSolved],
        backgroundColor: ['#34d399', '#facc15', '#f43f5e'],
        hoverBackgroundColor: ['#6ee7b7', '#fde047', '#fb7185'],
      },
    ],
  };

  return (
    <div className="max-w-xl mx-auto mt-10 p-5">
      <h2 className="text-2xl font-bold text-center mb-5">
        Leetcode Problem Solved Stats
      </h2>

      <div className="flex flex-col items-center">
        <Pie data={chartData} className="w-full h-full max-w-[300px]" />
        <div className="text-center mt-4">
          <p className="text-lg font-semibold">
            Total Solved: {totalSolved} / {totalQuestions}
          </p>
          <p>Easy: {easySolved} / {totalEasy}</p>
          <p>Medium: {mediumSolved} / {totalMedium}</p>
          <p>Hard: {hardSolved} / {totalHard}</p>
        </div>
      </div>
    </div>
  );
};

export default LeetcodeStats;
