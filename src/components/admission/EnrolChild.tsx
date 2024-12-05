import { programs } from '@/utils/constants';
import React from 'react';

const EnrolChild = () => {
  return (
    <section  id="enroll-child" className="py-12 md:py-20 bg-gradient-to-r from-[#ffec89] to-[#a9e2a0] text-[#2d3d3d] animate-fadeIn">
      <div className="max-w-5xl mx-auto px-6 sm:px-8">
        <div className="text-center mb-10">
          <h2 className="text-3xl sm:text-4xl font-extrabold">Enroll Your Child</h2>
          <p className="mt-4 text-lg text-gray-600">
            Fill out the form below to get started on your child’s amazing journey with us!
          </p>
        </div>
        <form className="bg-white p-6 md:p-10 rounded-3xl shadow-lg space-y-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="childName" className="block text-gray-700">
                Child&apos;s Name
              </label>
              <input
                type="text"
                id="childName"
                placeholder="Enter child's name"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label htmlFor="age" className="block text-gray-700">
                Age
              </label>
              <input
                type="number"
                id="age"
                placeholder="Enter child's age"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="parentName" className="block text-gray-700">
                Parent&apos;s Name
              </label>
              <input
                type="text"
                id="parentName"
                placeholder="Enter parent's name"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
            <div>
              <label htmlFor="phone" className="block text-gray-700">
                Parent&apos;s Phone Number
              </label>
              <input
                type="tel"
                id="phone"
                placeholder="Enter phone number"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label htmlFor="email" className="block text-gray-700">
                Parent&apos;s Email
              </label>
              <input
                type="email"
                id="email"
                placeholder="Enter email address"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              />
            </div>

            {/* Program Selection Dropdown */}
            <div>
              <label htmlFor="program" className="block text-gray-700">
                Program Selection
              </label>
              <select
                id="program"
                className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
                required
              >
                <option value="" disabled selected>
                  Select a program
                </option>
                {programs.map((program, index) => (
                  <option key={index} value={program.title}>
                    {program.title} - {program.ageGroup}
                  </option>
                ))}
              </select>
            </div>
          </div>

          <div>
            <label htmlFor="comments" className="block text-gray-700">
              Additional Comments
            </label>
            <textarea
              id="comments"
              rows={4}
              placeholder="Anything else you'd like us to know?"
              className="mt-2 p-3 w-full border rounded-lg focus:ring-2 focus:ring-green-400"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full py-3 bg-gradient-to-r from-[#008C7E] to-[#00B597] text-white font-bold rounded-lg hover:opacity-90 shadow-lg"
          >
            Submit Application
          </button>
        </form>
      </div>
    </section>
  );
}

export default EnrolChild;
