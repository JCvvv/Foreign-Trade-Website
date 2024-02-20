import React from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
import StartPage from './component/StartPage'
import HomePage from './component/HomePage'

function App () {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<StartPage />} />
        <Route path="/*" element={<HomePage />} />
      </Routes>
    </Router>
  )
}

export default App
