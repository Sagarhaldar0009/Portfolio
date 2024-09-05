import React, { useState, useEffect } from 'react';
import API from '../api/index.js';
import { MdWork } from "react-icons/md";
import Spinner from './Loading/Spinner.jsx';

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    // Fetch projects from your backend API
    const fetchProjects = async () => {
      setLoading(true)
      try {
        const response = await API.get('/projects'); // Update this URL to your actual backend API
        // console.log(response.data);
        setProjects(response.data);
      } catch (error) {
        console.error('Error fetching projects:', error);
      }
      setLoading(false);
    };

    fetchProjects();
  }, []);

  return (
    <div className="w-full py-10 px-4 sm:px-6 lg:px-8 bg-[rgb(11,26,51)]">
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-white flex gap-2 justify-center"><span className='pt-1'><MdWork/></span>Projects</h1>
      </div>

      {
        loading ? (<Spinner/>) : (
          <div className="flex flex-wrap -mx-4">
            {projects.map((project) => (
              <div key={project._id} className="w-full sm:w-1/2 lg:w-1/3 px-4 mb-8">
                <div className="bg-white rounded-lg shadow-md overflow-hidden">
                  <a href={project.link} target="_blank" rel="noopener noreferrer">
                    <img src={project.image} alt={project.name} className="w-full h-48 object-cover" />
                  </a>
                  <div className="p-4">
                    <h2 className="text-xl font-semibold text-gray-800">{project.name}</h2>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )
      }
      
    </div>
  );
};

export default Projects;
