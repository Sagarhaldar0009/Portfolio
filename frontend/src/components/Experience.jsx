// src/Pages/Experience.jsx
import React, { useEffect, useState } from 'react';
import API from '../api/index.js';
import { BsSuitcaseLgFill } from "react-icons/bs";
import Spinner from './Loading/Spinner.jsx';

const Experience = () => {
  const [experiences, setExperiences] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchExperiences = async () => {
      setLoading(true);
      try {
        const response = await API.get('/experience'); // Update this URL to your actual backend API
        setExperiences(response.data);
      } catch (error) {
        console.error('Error fetching experiences:', error);
      }
      setLoading(false);
    };

    fetchExperiences();
  }, []);


  return (
    <div className=" py-10 px-4 sm:px-6 lg:px-8 bg-[rgb(11,26,51)] text-white">
      <div className="max-w-7xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 flex justify-center gap-2 text-white"><span className='pt-1'><BsSuitcaseLgFill/></span>Work Experience</h1>
      </div>

      {
        (loading) ? (<Spinner/>) : (
          <div className="space-y-8">
            {experiences.slice().reverse().map((experience) => (
              <div key={experience._id} className="rounded-lg bg-slate-800 shadow-lg p-6">
                <div className="mb-4">
                  <h2 className="text-2xl font-bold text-white">{experience.company}</h2>
                </div>
                <div className="mb-4">
                  <h3 className="text-xl text-white">{experience.position}</h3>
                </div>
                <div className="mb-4">
                  <p className="text-lg text-white">{experience.period}</p>
                </div>
                <div>
                  <p className="text-lg text-white">{experience.location}</p>
                </div>
              </div>
            ))}
          </div>
        )
      }
      
    </div>
  );
};

export default Experience;