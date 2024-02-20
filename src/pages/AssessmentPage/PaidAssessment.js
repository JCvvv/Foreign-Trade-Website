import React from 'react'
import { Button, Box, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function PaidAssessment () {
  const navigate = useNavigate()

  const handleNavigate = () => {
    navigate('/team')
  }

  return (
    <Box sx={{ width: '100%' }}>
      <Stack spacing={2} alignItems="flex-start">
        <Button variant="contained" sx={{ width: 200, height: 50 }}>生成企业评估报告</Button>
        <Button variant="contained" sx={{ width: 200, height: 50 }} onClick={handleNavigate}>同行一对一</Button>
        <Button variant="contained" sx={{ width: 200, height: 50 }} onClick={handleNavigate}>专家大师课</Button>
      </Stack>
    </Box>
  )
}

export default PaidAssessment
