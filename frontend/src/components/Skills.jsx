import React, { useEffect, useState } from 'react';
import API from '../api';
import { FaLaptop } from "react-icons/fa";
import Spinner from './Loading/Spinner';

const Skills = () => {
  const [skills, setSkills] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchSkills = async () => {
      setLoading(true);
      try {
        const response = await API.get('/skills');
        setSkills(response.data);
        setLoading(false);
      } catch (err) {
        setError(err.message); 
      }
      setLoading(false);
    };

    fetchSkills();
  }, []);

  if (loading) return <div className='flex flex-col'>
                          <Spinner/>
                          <p>wait a minute, Loading...</p>
                      </div>;
                      
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 sm:px-8 md:px-12 lg:px-24 xl:px-32 pt-1 pb-10 bg-[rgb(11,26,51)] text-white">
      <h1 className="text-3xl sm:text-4xl font-bold text-center my-8 text-white flex justify-center gap-1"><span className='pt-1'><FaLaptop/></span>Skills & <span className='text-yellow-400 px-1'> Abilities</span></h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 bg-[rgb(11,26,51)] text-white p-4 sm:p-5 md:p-6 lg:p-8">
        {skills.map((skill) => (
          <div key={skill._id} className="bg-white shadow-md rounded-lg p-4 sm:p-5 md:p-6 lg:p-8">
            <img src={skill.image} alt={skill.name} className="w-16 h-16 sm:w-20 sm:h-20 mx-auto" />
            <h2 className="text-lg sm:text-xl font-bold text-center mt-4 text-black">{skill.name}</h2>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
