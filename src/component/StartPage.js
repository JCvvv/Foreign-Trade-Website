import React from 'react'
import { useNavigate } from 'react-router-dom'
import Button from '@mui/material/Button'
import Box from '@mui/material/Box'

function StartPage () {
  const navigate = useNavigate()

  const handleClick = () => {
    navigate('/news')
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src={require('../pic/map.png')} alt="Large" style={{ width: '90%', marginBottom: '20px' }} />

      <Button
        variant="contained"
        onClick={handleClick}
        sx={{
          fontSize: '2rem', // 放大按钮文字
          padding: '20px 40px', // 增加按钮的填充
        }}
      >
        进入网站
      </Button>
    </Box>
  )
}

export default StartPage
