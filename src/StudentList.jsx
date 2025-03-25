import React from 'react'
import { Link } from "react-router-dom";
const StudentList = ({ students, addToFavorites }) => {
  return (
    <div className="text-6xl text-center bg-green-400">
      <h2 className="border-black bg-yellow-400 text-white p-5 ">
        List of Students
      </h2>
      {students.map((student, index) => (
        <div key={index}>
          {index + 1}. {student}
          <button
            className="bg-red-400 ml-20 p-5 m-2 mb-12 border-black rounded-full"
            onClick={() => addToFavorites(student)}
          >
            Add to Favourite
          </button>
        </div>
      ))}
      <Link className="bg-red-500 p-4 border rounded-3xl" to="/favorite">
        Go to Favorites
      </Link>
    </div>
  );
};


export default StudentList
