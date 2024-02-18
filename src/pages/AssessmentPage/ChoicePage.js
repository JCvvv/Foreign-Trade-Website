import React from 'react'
import { Box, Button } from '@mui/material'
import { useNavigate } from 'react-router-dom' // 引入useNavigate钩子

function Choice () {
  const navigate = useNavigate() // 使用useNavigate钩子

  // 定义一个函数，用于处理按钮点击，导航到免费测评页面
  const navigateToFreeAssessment = () => {
    navigate('/home/assessment/free')
  }

  // 定义一个函数，用于处理按钮点击，导航到收费测评页面
  const navigateToPaidAssessment = () => {
    navigate('/home/assessment/paid')
  }

  return (
    <Box>
      <Button onClick={navigateToFreeAssessment} variant="contained">免费</Button>
      <Button onClick={navigateToPaidAssessment} variant="contained" color="primary">收费</Button>
    </Box>
  )
}

export default Choice
