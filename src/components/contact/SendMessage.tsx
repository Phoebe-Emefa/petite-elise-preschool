import React from "react";
import { LuMail, LuMessageCircle, LuUser } from "react-icons/lu";

const SendMessage = () => {
  return (
    <div className="bg-white rounded-3xl shadow-lg p-6 sm:p-8 relative overflow-hidden">
      <h2 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-6">
        Send Us a Message
      </h2>
      <form className="space-y-6 sm:space-y-8">
        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <LuUser className=" shrink-0 text-gray-400" />

          <input
            type="text"
            placeholder="Your Name"
            className="block min-w-0 grow p-3 sm:p-4  pl-1  text-base  placeholder:text-gray-400 focus:ring-blue-300 focus:outline-none "
            required
          />
        </div>

        <div className="flex items-center rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <LuMail className=" shrink-0 text-gray-400" />

          <input
            type="email"
            placeholder="Your Email"
            className="block min-w-0 grow p-3 sm:p-4  pl-1  text-base  placeholder:text-gray-400 focus:ring-blue-300 focus:outline-none "
            required
          />
        </div>

        <div className="flex items-start p-3 sm:p-4 rounded-md bg-white pl-3 outline outline-1 -outline-offset-1 outline-gray-300 has-[input:focus-within]:outline has-[input:focus-within]:outline-2 has-[input:focus-within]:-outline-offset-2 has-[input:focus-within]:outline-indigo-600">
          <LuMessageCircle className="mt-1 shrink-0 text-gray-400" />

          <textarea
            placeholder="Your Message"
            className="block min-w-0 grow  pl-4 text-base  placeholder:text-gray-400 focus:ring-blue-300 focus:outline-none "
            rows={4}
            required
          ></textarea>
        </div>

        <button
          type="submit"
          className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 sm:py-3 rounded-lg shadow-md hover:opacity-90 transition"
        >
          Send Message
        </button>
      </form>
      <div className="absolute top-0 right-0 w-32 h-32 md:w-40 md:h-40 bg-blue-200 rounded-full opacity-20"></div>
    </div>
  );
};

export default SendMessage;
