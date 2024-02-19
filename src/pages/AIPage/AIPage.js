import React from 'react'
import ChartDrawing from './ChartDrawing'
import BusinessTranslation from './BusinessTranslation'
import DocumentWriting from './DocumentWriting'
import PPTGeneration from './PPTGeneration'
import ChoicePage from './ChoicePage'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

function AIPage () {
  return (
    <Box>
      <Routes>
        <Route index element={<ChoicePage />} />
        <Route path="chart" element={<ChartDrawing />} />
        <Route path="business" element={<BusinessTranslation />} />
        <Route path="document" element={<DocumentWriting />} />
        <Route path="ppt" element={<PPTGeneration />} />
      </Routes>
    </Box>

  )
}

export default AIPage
