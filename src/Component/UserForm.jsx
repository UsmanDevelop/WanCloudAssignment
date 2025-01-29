import React, { useState } from "react";
import { motion } from "framer-motion";
import { addUser } from "../redux/slice/UserSlice";
import { useDispatch } from "react-redux";

const UserForm = () => {

  const dispatch = useDispatch()

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    address: "",
    company: "",
    phone: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(addUser(formData));
    alert("User Added Successfully")
    setFormData({
      firstName: "",
      lastName: "",
      address: "",
      company: "",
      phone: ""
    })
  };

  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }} className="h-screen flex items-center justify-center bg-slate-200 p-4">
      <div className="bg-white shadow-lg rounded-lg flex items-center max-w-lg w-full p-8">
        <div className="w-full">
          <h2 className="text-2xl font-bold text-gray-800 mb-4 ">Contact Information</h2>
          <p className="text-sm text-gray-500 mb-5">* Required</p>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="relative w-full">

              <input
                type="text"
                name="firstName"
                id="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                className="cursor-text absolute left-2 bottom-8 text-gray-500 text-sm transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-sm peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                htmlFor="firstName"
              >
                First Name *
              </label>
            </div>

            <div className="relative w-full">
              <input
                type="text"
                name="lastName"
                id="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                className="cursor-text absolute left-2 bottom-8 text-gray-500 text-sm transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-sm peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                htmlFor="lastName"
              >
                Last Name *
              </label>
            </div>

            <div className="relative w-full">

              <input
                type="tel"
                name="phone"
                id="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder=" "
                pattern="03[0-9]{9}"
                required
                className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                className="peer cursor-text absolute left-2 bottom-8 text-gray-500 text-sm transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-sm peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                htmlFor="phone"
              >
                Phone: 03xxxxxxxxx - 11 digit Number *
              </label>
            </div>

            <div className="relative w-full">

              <input
                type="text"
                name="address"
                id="address"
                value={formData.address}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                className="peer cursor-text absolute left-2 bottom-8 text-gray-500 text-sm transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-sm peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                htmlFor="address"
              >
                Address *
              </label>
            </div>

            <div className="relative w-full">

              <input
                type="text"
                name="company"
                id="company"
                value={formData.company}
                onChange={handleChange}
                placeholder=" "
                required
                className="peer w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <label
                className="peer cursor-text absolute left-2 bottom-8 text-gray-500 text-sm transition-all peer-placeholder-shown:bottom-3 peer-placeholder-shown:text-sm peer-focus:bottom-8 peer-focus:text-sm peer-focus:text-blue-500 bg-white px-1"
                htmlFor="company"
              >
                Company *
              </label>
            </div>

            <button
              type="submit"
              className="w-full bg-blue-500 shadow-blue-800 shadow-2xl text-white py-2 rounded-md text-sm font-medium cursor-pointer hover:bg-blue-700"
            >
              SUBMIT
            </button>
          </form>
        </div>
      </div>
    </motion.div>

  );
};

export default UserForm;
