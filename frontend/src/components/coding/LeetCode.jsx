import React, { useEffect, useState } from 'react';
import LC_API from '../../api/leetcodeAPI';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { SiLeetcode } from "react-icons/si";
import Spinner from '../Loading/Spinner';
import { NavLink } from 'react-router-dom';
import ChartDataLabels from 'chartjs-plugin-datalabels';

ChartJS.register(ArcElement, Tooltip, Legend, ChartDataLabels);

const LeetcodeStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await LC_API.get('/');
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
    return <div className="text-center text-xl"><Spinner/></div>;
  }

  if (!data) {
    return <div className="text-center text-xl text-red-600">Failed to load data</div>;
  }

  const easySolved = data.easySolved;
  const mediumSolved = data.mediumSolved;
  const hardSolved = data.hardSolved;

  const totalEasy = data.totalEasy;
  const totalMedium = data.totalMedium;
  const totalHard = data.totalHard;

  const totalSolved = easySolved + mediumSolved + hardSolved;
  const totalQuestions = totalEasy + totalMedium + totalHard;


  const easyPercent = (easySolved/totalSolved)*100;
  const mediumPercent = (mediumSolved/totalSolved)*100;
  const hardPercent = (hardSolved/totalSolved)*100;

  const chartData = {
    labels: ['Easy', 'Medium', 'Hard'],
    datasets: [
      {
        data: [easyPercent, mediumPercent, hardPercent],
        backgroundColor: ['#34d399', '#facc15', '#f43f5e'],
        hoverBackgroundColor: ['#6ee7b7', '#fde047', '#fb7185'],
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value, context) => {
          return value.toFixed(1) + '%'; // Adds the percentage sign
        },
        color: 'black', // Label color
        font: {
          weight: 'bold',
          size: 16,
        },
      },
    },
  };

  return (
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-5 bg-[rgb(11,26,51)] text-white rounded-lg  space-y-8">
      <h1 className="text-4xl font-bold text-center flex gap-3 items-center justify-center">
        <span className="text-yellow-500"><SiLeetcode size={40} /></span>
        Leetcode 
        <span className="text-yellow-400">Problems</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Pie data={chartData} options={options} className="max-w-[250px] md:max-w-[300px] w-full h-full" />
        </div>
        
        <div className="text-center space-y-4">
          <p className="text-2xl font-semibold">Total Solved: {totalSolved} / {totalQuestions}</p>
          <p className="text-lg">Easy: {easySolved} / {totalEasy}</p>
          <p className="text-lg">Medium: {mediumSolved} / {totalMedium}</p>
          <p className="text-lg">Hard: {hardSolved} / {totalHard}</p>
        </div>
      </div>

      <div className="text-center">
        <NavLink to="https://codolio.com/profile/Sagar" target="_blank">
          <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-xl text-white font-semibold py-3 px-8 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-2xl focus:outline-none focus:ring-2 focus:ring-yellow-400">
            All Coding Platforms
          </button>
        </NavLink>
      </div>
    </div>
  );
};

export default LeetcodeStats;
