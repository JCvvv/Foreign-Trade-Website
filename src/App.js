import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import StartPage from './component/StartPage'
import HomePage from './component/HomePage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/Foreign-Trade-Website" element={<StartPage />} />
        <Route path="/home/*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
