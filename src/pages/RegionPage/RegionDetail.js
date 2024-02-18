import React from 'react'
import { useLocation } from 'react-router-dom'
import { Box, Typography, Button } from '@mui/material'
import SearchBar from './SearchBar'
import NewsList from './NewsList'

function RegionDetail () {
  const location = useLocation()
  const queryParams = new URLSearchParams(location.search)
  const country = queryParams.get('country')

  return (
    <Box>
      <SearchBar />
      <Box sx={{ width: '100%' }}>
        <Typography variant="h4" sx={{ marginBottom: '20px' }}>
          您选择的地区是 <span style={{ fontWeight: 'bold' }}>{country}</span>
        </Typography>
        <Button variant="contained" sx={{ marginBottom: '20px' }}>
          文书翻译
        </Button>
        <Box sx={{ width: '70%' }}>
          <NewsList />
        </Box>
      </Box>
    </Box>
  )
}

export default RegionDetail
