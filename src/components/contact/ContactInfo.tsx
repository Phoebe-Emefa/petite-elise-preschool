import React from 'react'
import { LuMail, LuMapPin, LuPhone } from 'react-icons/lu'

const ContactInfo = () => {
  return (
    <div className="space-y-6 sm:space-y-8">
    <div className="bg-gradient-to-r from-pink-400 to-yellow-300 rounded-3xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <LuMapPin className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">Our Address</h3>
          <p className="text-sm sm:text-base text-white">1 Libreville Lake, East Legon</p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-blue-500 to-green-400 rounded-3xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <LuPhone className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">Call Us</h3>
          <p className="text-sm sm:text-base text-white">(233) 0593346332  </p>
        </div>
      </div>
    </div>
    <div className="bg-gradient-to-r from-purple-500 to-pink-500 rounded-3xl p-4 sm:p-6 shadow-lg">
      <div className="flex items-center space-x-4">
        <LuMail className="text-white w-6 h-6 sm:w-8 sm:h-8" />
        <div>
          <h3 className="text-base sm:text-lg font-semibold text-white">Email Us</h3>
          <p className="text-sm sm:text-base text-white">info@petiteelise.com</p>
        </div>
      </div>
    </div>
  </div>
  )
}

export default ContactInfo