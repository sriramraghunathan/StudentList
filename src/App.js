import React from "react";
import { useState } from "react";
import StudentList from "./StudentList";
import Favorite from "./Favorite";
import { BrowserRouter, Route, Routes } from "react-router-dom";

const studentsList = ["SRIRAM", "JEEVAN", "DEEPAK", "RAAYAN", "GPOIKA"];
const App = () => {
  const [students, setstudentArr] = useState(studentsList);
  const [favorites,setfavorites]=useState([]);

  const addToFavorites=(student)=>{
    setfavorites([...favorites, student]);
    setstudentArr(students.filter((s)=>s!==student))
  }
   const removeFromFavorites = (student) => {
     setstudentArr([...students, student]);
     setfavorites(favorites.filter((s) => s !== student));
   };

  return (
    <div>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<StudentList students={students} addToFavorites={addToFavorites} />}></Route>
            <Route
              path="/favorite"
              element={<Favorite
                 favorites={favorites} removeFromFavorites={removeFromFavorites} />}
            ></Route>
          </Routes>
        </BrowserRouter>
    </div>
  );
};

export default App;
 