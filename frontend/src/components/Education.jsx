// // src/Pages/Education.jsx
// import React, { useEffect, useState } from 'react';
// import API from '../api/index.js';
// import { FaGraduationCap } from "react-icons/fa";

// const Education = () => {
//   const [educations, setEducations] = useState([]);

//   useEffect(() => {
//     const fetchEducations = async () => {
//       try {
//         const response = await API.get('/education'); // Update this URL to your actual backend API
//         setEducations(response.data);
//       } catch (error) {
//         console.error('Error fetching educations:', error);
//       }
//     };

//     fetchEducations();
//   }, []);

//   return (
//     <div className="bg-[rgb(11,26,51)] text-white py-10 px-4 sm:px-6 lg:px-8">
//       <div className="max-w-7xl mx-auto text-center mb-12">
//         <h1 className="text-4xl font-bold text-white flex gap-1 justify-center"><span className='pt-1'><FaGraduationCap/></span>My <span className='text-purple-800'>Education</span></h1>
//       </div>
//       <div className="relative">
//         <div className="absolute inset-0 flex justify-center items-center w-1 bg-blue-500"></div>
//         <div className="relative z-10">
//           {educations.slice().reverse().map((education, index) => ( // Apply reverse here
//             <div key={education._id} className="mb-12 pl-10">
//               <div className="relative flex items-center">
//                 <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
//                   {educations.length - index} {/* Adjust index to display correctly */}
//                 </div>
//                 <div className="bg-slate-800 rounded-lg shadow-lg p-6 w-full ml-12">
//                   <div className="flex items-center justify-between">
//                     <div className="flex items-center">
//                       <img src={education.image} alt={education.institute} className="w-16 h-16 rounded-full object-cover mr-4" />
//                       <div>
//                         <h2 className="text-2xl font-bold text-white">{education.course}</h2>
//                         <p className="text-lg text-white">{education.institute}</p>
//                       </div>
//                     </div>
//                     <div className="text-right">
//                       <p className="text-lg text-white">{education.period}</p>
//                       <p className="text-lg text-white">{education.marks}</p>
//                     </div>
//                   </div>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Education;

// src/Pages/Education.jsx
import React, { useEffect, useState } from 'react';
import API from '../api/index.js';
import { FaGraduationCap } from "react-icons/fa";

const Education = () => {
  const [educations, setEducations] = useState([]);

  useEffect(() => {
    const fetchEducations = async () => {
      try {
        const response = await API.get('/education'); // Update this URL to your actual backend API
        setEducations(response.data);
      } catch (error) {
        console.error('Error fetching educations:', error);
      }
    };

    fetchEducations();
  }, []);

  return (
    <div className="bg-[rgb(11,26,51)] text-white py-10 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-white flex gap-1 justify-center">
          <span className='pt-1'><FaGraduationCap/></span>
          My <span className='text-purple-800'>Education</span>
        </h1>
      </div>
      <div className="relative">
        <div className="absolute inset-0 flex justify-center items-center w-1 bg-blue-500"></div>
        <div className="relative z-10">
          {educations.slice().reverse().map((education, index) => (
            <div key={education._id} className="mb-12 pl-10">
              <div className="relative flex items-center">
                <div className="absolute left-0 flex items-center justify-center w-10 h-10 bg-blue-500 rounded-full text-white">
                  {educations.length - index}
                </div>
                <div className="bg-slate-800 rounded-lg shadow-lg p-6 w-full ml-12">
                  {/* Use flex and flex-col md:flex-row to switch direction on small vs. large screens */}
                  <div className="flex flex-col md:flex-row items-center md:items-start">
                    {/* Image Div */}
                    <div className="flex-shrink-0 mb-4 md:mb-0">
                      <img 
                        src={education.image} 
                        alt={education.institute} 
                        className="w-16 h-16 rounded-full object-cover mr-0 md:mr-4"
                      />
                    </div>
                    

                    {/* Information Div */}
                    <div className="flex flex-col md:flex-row items-start md:items-center w-full">
                      {/* Left side (Course and Institute) */}
                      <div className="mb-4 md:mb-0">
                        <h2 className="text-2xl font-bold text-white">{education.course}</h2>
                        <p className="text-lg text-white">{education.institute}</p>
                      </div>
                      {/* Right side (Period and Marks) */}
                      <div className="text-left md:text-right md:ml-auto md:mt-0 mt-4 md:self-end">
                        <p className="text-lg text-white">Period : {education.period}</p>
                        <p className="text-lg text-white">Grade : {education.marks}</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Education;