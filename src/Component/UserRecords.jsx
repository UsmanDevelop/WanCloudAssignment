import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { useDispatch } from 'react-redux';
import { delUser } from '../redux/slice/UserSlice';
import { useSelector } from 'react-redux';

function UserRecords() {
  const dispatch = useDispatch()
  const users = useSelector((state) => state.user)
  useEffect(() => {
    console.log("Updated Users: " + users);

  }, [users])
  console.log(users);

  const handleDelete = (index, user) => {
    const delMessage = "Sure to Delete, "+user.firstName+" "+user.lastName+"?";
    if(confirm(delMessage)){
      dispatch(delUser(index))
    }
  }
  return (
    <>
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>

      <p className='m-10 text-xl'>Total Users | <span className='font-serif font-bold text-4xl'>{users.length}</span></p>
      <div className="p-6 min-h-screen hidden md:block">
        <div className="bg-white shadow-md rounded-lg overflow-hidden">
          <table className="min-w-full border-collapse max-h-16">
            <thead className="bg-gray-800 text-white">
              <tr>
                <th className="py-3 px-4 text-left">ID</th>
                <th className="py-3 px-4 text-left">Name</th>
                <th className="py-3 px-4 text-left">Phone</th>
                <th className="py-3 px-4 text-left">Address</th>
                <th className="py-3 px-4 text-left">Company</th>
                <th className="py-3 px-4 text-center">Actions</th>
              </tr>
            </thead>
            <tbody>
              {users.length > 0 ? (
                users.map((user, index) => (
                  <tr
                    key={index}
                    className={`${index % 2 === 0 ? "bg-gray-300" : "bg-white"} hover:bg-gray-400`}
                  >
                    <td className="py-3 px-4">{index + 1}</td>
                    <td className="py-3 px-4">{user.firstName} {user.lastName}</td>
                    <td className="py-3 px-4">{user.phone}</td>
                    <td className="py-3 px-4 text-sm">{user.address}</td>
                    <td className="py-3 px-4">{user.company}</td>
                    <td className="py-3 px-4 text-center">
                      <button
                        className="bg-red-500 m-2 cursor-pointer text-white py-1 px-3 rounded-md hover:bg-red-700"
                        onClick={() => handleDelete(index, user)}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))
              ) : (
                <tr>
                  <td colSpan="5" className="text-center py-4 text-gray-500">
                    No User Data Available.
                  </td>
                </tr>
              )}

            </tbody>
          </table>
        </div>

      </div>

      <div className='md:hidden'>

        {users.length > 0 ? (

          <div className="p-4 space-y-4">
            {users.map((user, index) => (
              <div key={index} className="bg-white shadow-lg rounded-lg p-4 border border-gray-200">
                <div className='flex justify-between'>
                <h2 className="text-lg font-semibold inline">{user.firstName} {user.lastName}</h2>

                  <p className=" text-gray-600">ID | {index+1}</p>
                </div>
                <p className="text-sm text-gray-600">{user.address}</p>
                <p className="text-sm text-gray-500">{user.phone} - Company : {user.company}</p>
                <button
                  className="inline-block mt-2 px-3 py-1 text-xs font-medium bg-red-500 text-white rounded hover:bg-red-700"
                  onClick={() => handleDelete(index, user)}
                >
                  Delete</button>
              </div>
            ))}
          </div>

        ) : (
          <div className="text-center py-4 text-gray-500">
            No User Data Available.
          </div>
        )}

      </div>

    </motion.div>

    </>
  )
}

export default UserRecords
