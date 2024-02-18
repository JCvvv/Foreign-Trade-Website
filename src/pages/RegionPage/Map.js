import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Box, Button } from '@mui/material'

function Map () {
  const navigate = useNavigate()
  const countries = ['中国', '美国', '日本', '德国', '法国']

  const handleCountryClick = (country) => {
    navigate(`/home/region/detail?country=${country}`)
  }

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
        flexWrap: 'wrap',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
      }}
    >
      <img src={require('../../pic/map.png')} alt="Map" style={{ width: '90%' }} />
      <Box>
        {countries.map((country, index) => (
          <Button
            key={index}
            variant="contained"
            onClick={() => handleCountryClick(country)}
            sx={{
              fontSize: '1.5rem',
              margin: '10px',
              padding: '10px 20px',
            }}
          >
            {country}
          </Button>
        ))}
      </Box>
    </Box>
  )
}

export default Map
