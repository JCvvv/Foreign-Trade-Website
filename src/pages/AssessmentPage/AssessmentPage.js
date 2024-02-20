import React from 'react'
import FreeAssessment from './FreeAssessment'
import PaidAssessment from './PaidAssessment'
import ChoicePage from './ChoicePage'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'
import FreeAssessmentRrport from './FreeAssessmentReport'

function AssessmentPage () {
  return (
    <Box>
      <Routes>
        <Route index element={<ChoicePage />} />
        <Route path="free" element={<FreeAssessment />} />
        <Route path="paid" element={<PaidAssessment />} />
        <Route path="report" element={<FreeAssessmentRrport />} />
      </Routes>
    </Box>

  )
}

export default AssessmentPage
