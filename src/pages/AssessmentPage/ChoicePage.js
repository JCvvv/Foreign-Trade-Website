import React from 'react'
import { Box, Button, Card, CardContent, Typography } from '@mui/material'
import { useNavigate } from 'react-router-dom'

function Choice () {
  const navigate = useNavigate()

  const navigateToFreeAssessment = () => {
    navigate('/home/assessment/free')
  }

  const navigateToPaidAssessment = () => {
    navigate('/home/assessment/paid')
  }

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Box sx={{ display: 'flex', flexDirection: 'row', gap: 4, alignItems: 'center', justifyContent: 'center' }}>
        <Card sx={{ width: 300, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              免费测评
            </Typography>
            <Typography sx={{ marginTop: 2, marginBottom: 2 }}>
              这里是关于免费测评的介绍，可以包括测评的内容、目的和预期效果等。这段介绍应该简洁明了，大约100字左右。
            </Typography>
            <Button variant="contained" onClick={navigateToFreeAssessment}>
              进入
            </Button>
          </CardContent>
        </Card>
        <Card sx={{ width: 300, textAlign: 'center' }}>
          <CardContent>
            <Typography variant="h5" sx={{ fontWeight: 'bold' }}>
              付费测评
            </Typography>
            <Typography sx={{ marginTop: 2, marginBottom: 2 }}>
              这里是关于付费测评的介绍，可以包括测评的内容、目的和预期效果等。这段介绍应该简洁明了，大约100字左右。
            </Typography>
            <Button variant="contained" color="primary" onClick={navigateToPaidAssessment}>
              进入
            </Button>
          </CardContent>
        </Card>
      </Box>
    </Box>
  )
}

export default Choice
