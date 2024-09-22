// import React, { useEffect, useState } from 'react';
// import axios from 'axios';
// import { Pie } from 'react-chartjs-2';
// import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
// import { SiLeetcode } from "react-icons/si";
// import Spinner from '../Loading/Spinner';
// import { NavLink } from 'react-router-dom';

// ChartJS.register(ArcElement, Tooltip, Legend);

// const LeetcodeStats = () => {
//   const [data, setData] = useState(null);
//   const [loading, setLoading] = useState(true);

//   useEffect(() => {
//     // Function to fetch Leetcode user stats data
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('https://leetcode-stats-api.herokuapp.com/SAGAR_SH_987');
//         setData(response.data);
//         setLoading(false);
//       } catch (error) {
//         console.error('Error fetching data', error);
//         setLoading(false);
//       }
//     };
//     fetchData();
//   }, []);

//   if (loading) {
//     return <div className="text-center text-xl"><Spinner/></div>;
//   }

//   if (!data) {
//     return <div className="text-center text-xl text-red-600">Failed to load data</div>;
//   }

//   // Example response format for chart data
//   const easySolved = data.easySolved;
//   const mediumSolved = data.mediumSolved;
//   const hardSolved = data.hardSolved;

//   const totalEasy = data.totalEasy;
//   const totalMedium = data.totalMedium;
//   const totalHard = data.totalHard;

//   const totalSolved = easySolved + mediumSolved + hardSolved;
//   const totalQuestions = totalEasy + totalMedium + totalHard;

//   const chartData = {
//     labels: ['Easy', 'Medium', 'Hard'],
//     datasets: [
//       {
//         data: [easySolved, mediumSolved, hardSolved],
//         backgroundColor: ['#34d399', '#facc15', '#f43f5e'],
//         hoverBackgroundColor: ['#6ee7b7', '#fde047', '#fb7185'],
//       },
//     ],
//   };

//   return (
//     <div className="max-w-xl mx-auto mt-10 p-5">
//       <h1 className="text-4xl font-bold text-white flex gap-1 justify-center items-center">
//         <span><SiLeetcode /></span>
//         Leetcode 
//         <span className='text-yellow-400'>Problems</span>
//       </h1>

//       <div className="flex flex-col items-center">
//         <Pie data={chartData} className="w-full h-full max-w-[300px] pt-5" />
//         <div className="text-center mt-1">
//           <p className="text-2xl font-semibold">
//             Total Solved: {totalSolved} / {totalQuestions}
//           </p>
//           <p>Easy: {easySolved} / {totalEasy}</p>
//           <p>Medium: {mediumSolved} / {totalMedium}</p>
//           <p>Hard: {hardSolved} / {totalHard}</p>
//         </div>
//       </div>

//       <NavLink to="https://codolio.com/profile/Sagar" target="_blank">
//         <button className="bg-gradient-to-r from-yellow-400 to-yellow-500 text-xl text-white font-semibold py-2 px-6 rounded-full shadow-lg transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-xl focus:outline-none focus:ring-2 focus:ring-yellow-400">
//           All Coding Platform
//         </button>
//       </NavLink>
      
//     </div>
//   );
// };

// export default LeetcodeStats;


import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { SiLeetcode } from "react-icons/si";
import Spinner from '../Loading/Spinner';
import { NavLink } from 'react-router-dom';

ChartJS.register(ArcElement, Tooltip, Legend);

const LeetcodeStats = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://leetcode-stats-api.herokuapp.com/SAGAR_SH_987');
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
    <div className="max-w-3xl mx-auto mt-10 mb-10 p-5 bg-[rgb(11,26,51)] text-white rounded-lg shadow-lg space-y-8">
      <h1 className="text-4xl font-bold text-center flex gap-3 items-center justify-center">
        <span className="text-yellow-500"><SiLeetcode size={40} /></span>
        Leetcode 
        <span className="text-yellow-400">Problems</span>
      </h1>

      <div className="flex flex-col md:flex-row justify-between items-center gap-10">
        <div className="w-full md:w-1/2 flex justify-center">
          <Pie data={chartData} className="max-w-[250px] md:max-w-[300px] w-full h-full" />
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
