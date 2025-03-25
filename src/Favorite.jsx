import React from 'react'
import { Link } from "react-router-dom";
const Favorite = ({ favorites, removeFromFavorites }) => {
  return (
    <div className="text-6xl text-center bg-green-400">
      <h2 className="border-black bg-yellow-400 text-white p-5 ">
        Favourite Students
      </h2>
      {favorites && favorites.length > 0 ? (
        favorites.map((student, index) => (
          <div key={index} className="student-item">
            {index + 1}. {student}
            <button
              className="bg-red-600 ml-20 p-6 text-center m-2 mb-20 border-black rounded-full"
              onClick={() => removeFromFavorites(student)}
            >
              Remove
            </button>
          </div>
        ))
      ) : (
        <p>No favourites added</p>
      )}
      <Link className="bg-red-500 p-4 border rounded-3xl" to="/">
        Back to Home
      </Link>
    </div>
  );
};
  

export default Favorite
