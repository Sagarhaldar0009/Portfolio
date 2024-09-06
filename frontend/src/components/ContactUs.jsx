import React from 'react';
import { IoIosMail } from "react-icons/io";
import { useForm, ValidationError } from '@formspree/react';

function ContactUs() {
  const [state, handleSubmit] = useForm("mvgpzgde");
  if (state.succeeded) {
      return <p className="text-green-500 font-bold text-center">Your Message has been sent!</p>;
  }
  return (
    <div className="min-h-screen bg-[rgb(11,26,51)] flex flex-col items-center justify-center">
       <h2 className="text-4xl font-bold mb-6 text-center text-white flex">Contact Me<span className='pt-0 text-5xl px-1'><IoIosMail/></span></h2>
      <div className="w-full max-w-lg bg-slate-800 rounded-lg shadow-lg p-8">
       
        <form onSubmit={handleSubmit} className="w-full">
          <div className="mb-4">
            <label htmlFor="name" className="block text-white text-sm font-semibold mb-2">
              Name
            </label>
            <input
              id="name"
              type="text"
              name="name"
              className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
            <ValidationError 
              prefix="Name" 
              field="name"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-white text-sm font-semibold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email" 
              name="email"
              className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="contact" className="block text-white text-sm font-semibold mb-2">
              Contact Number
            </label>
            <input
              id="contact"
              type="tel"
              name="contact"
              className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500"
            />
            <ValidationError 
              prefix="Contact" 
              field="contact"
              errors={state.errors}
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-white text-sm font-semibold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              className="appearance-none border rounded-lg w-full py-3 px-4 text-gray-700 leading-tight focus:outline-none focus:border-blue-500 h-32 resize-none"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
            />
          </div>
          <div className="flex items-center justify-center">
            <button 
              type="submit" 
              disabled={state.submitting} 
              className="bg-blue-500 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg focus:outline-none focus:shadow-outline transition duration-300 ease-in-out"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ContactUs;

