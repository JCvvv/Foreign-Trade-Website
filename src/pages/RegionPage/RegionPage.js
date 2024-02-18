import React from 'react'
import { Routes, Route } from 'react-router-dom'
import Map from './Map'
import RegionDetail from './RegionDetail'

function RegionPage () {
  return (
    <Routes>
      <Route index element={<Map />} />
      <Route path="detail" element={<RegionDetail />} />
    </Routes>
  )
}

export default RegionPage
