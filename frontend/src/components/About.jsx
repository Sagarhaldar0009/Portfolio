import React, { useState, useEffect } from 'react';
import API from '../api/index.js';
import { IoPersonSharp, IoArrowRedoSharp } from 'react-icons/io5';
import Spinner from './Loading/Spinner.jsx';

function About() {
  const [aboutData, setAboutData] = useState({
    position: '',
    description: '',
    email: '',
    place: '',
    imageUrl: '',
    resume: ''
  });

  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchAboutData = async () => {
      setLoading(true);
      try {
        const response = await API.get('/about');
        if (response.data.length > 0) {
          setAboutData(response.data[0]); // Set the state with the first object in the array
        }
      } catch (error) {
        console.error('Error fetching about data:', error);
      }
      setLoading(false);
    };

    fetchAboutData();
  }, []);

        


  return (
    <div className="w-full min-h-screen flex flex-col items-center py-8 px-4 bg-[rgb(11,26,51)] text-white">
      {/* Top Div */}
      <div className="text-3xl md:text-4xl font-bold flex gap-x-2 mb-8">
        <div className="p-1">
          <IoPersonSharp />
        </div>
        {" "}About <span className="text-violet-700">Me</span>
      </div>

      {/* Below Div */}
      {
        (loading) ? <Spinner/> : (
          <div className="flex flex-col lg:flex-row w-full max-w-screen-lg mx-auto items-center justify-center">
            {/* Image */}
            <div className="lg:w-2/4 w-full flex justify-center lg:justify-end lg:pr-8 mb-8 lg:mb-0">
              <img src={aboutData.imageUrl} className="h-80 lg:h-96 w-auto rounded-full shadow-md transition duration-300 hover:shadow-lg hover:shadow-yellow-500/50 pulse-shadow" alt="About Me" />
            </div>

            {/* Written Side */}
            <div className="lg:w-2/4 w-full flex flex-col px-4 lg:px-0">
              <div className="flex flex-col gap-y-5 lg:w-4/5 justify-center">
                <div className="flex flex-col gap-2 text-center lg:text-left">
                  <h1 className="font-bold text-3xl md:text-4xl">I am Sagar</h1>
                  <p className="font-bold text-xl">{aboutData.position}</p>
                </div>

                <div className="flex flex-col gap-5 text-center lg:text-left">
                  <p>{aboutData.description}</p>
                  <p>
                    <span className="text-blue-600 font-medium">Email: </span>{aboutData.email}
                  </p>
                  <p>
                    <span className="text-blue-600 font-medium">Place: </span>{aboutData.place}
                  </p>
                </div>

                <div className="bg-blue-700 w-fit text-white p-2 rounded-2xl self-center lg:self-start">
                  <a href={aboutData.resume}>
                    <button className="flex gap-x-1 text-lg font-bold">
                      Resume <span className="py-1"><IoArrowRedoSharp /></span>
                    </button>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )
      }
      
    </div>
  );
};

export default About;