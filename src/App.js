

    // As a user, I can go to /colors to see a list of all available colors.

    // As a user, I can click on one of the colors in my colors list and get taken to a page where I can see that color in all its glory.

    // (The route here should be /colors/:color )

    // As a user, I can click on a button to show a form that will let me add a new color.

    // Note that you can give an input a type of color if you’re trying to select a color. (The route here should be /colors/new)

    // As a user, when I submit my new color form, I am redirected to the colors index, and my new color appears at the top.

    // As a user, if I try to navigate to a color page that does not exist (eg, /colors/blargh), I am redirected to the colors index page.

    // As a user, if I try to navigate to an invalid url (eg, /this-is-not-valid), I am redirected to the colors index page.

import { useState } from 'react'
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import Colors from './Colors'
import Color from './Color'
import NewColorForm from './NewColorForm'

import './App.css';

function App() {
  const [colors, setColors] = useState(["black", "red", "orange", "blue", "green", "purple"]);
  
  const handleSetColors = ({color}) => {
    setColors(colors => [...colors, color]);
  }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route exact path="/colors" element={<Colors colors={colors}/>} />
          <Route exact path="/colors/:color" element={<Color />} />
          <Route exact path="/colors/new" element={<NewColorForm color={colors} handleSetColors={handleSetColors} />} />
          <Route path="*" element={<Navigate to="/colors" replace />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
