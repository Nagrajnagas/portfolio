import { useState } from 'react'
// import './App.css'
import { Route, Routes } from 'react-router-dom'
import My from './components/Home'
import Projects from './components/projects'
import WeatherTable from './components/table'

import PokiApi from './components/poki'

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<My />} />
        <Route path="/projects" element={<Projects />} />
        <Route path='/table' element={<WeatherTable />} />
        <Route path='/poki' element={<PokiApi />} />
      </Routes>
    </div>
  )
}

export default App;
