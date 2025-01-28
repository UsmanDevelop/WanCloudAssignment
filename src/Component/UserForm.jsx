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
          <h2 className="text-2xl font-bold text-gray-800 mb-2">Contact Information</h2>
          <p className="text-sm text-gray-500 mb-4">* Required</p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <input
              type="text"
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              placeholder="First Name *"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="text"
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              placeholder="Last Name *"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Phone: 03xxxxxxxxx * - 11 digit Number"
              pattern="03[0-9]{9}"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="address"
              value={formData.address}
              onChange={handleChange}
              placeholder="Address *"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

            <input
              type="text"
              name="company"
              value={formData.company}
              onChange={handleChange}
              placeholder="Company *"
              required
              className="w-full p-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />

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
