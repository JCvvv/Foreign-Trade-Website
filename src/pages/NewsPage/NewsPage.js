import React from 'react'
import SearchBar from './SearchBar'
import NewsList from './NewsList'
import VideoList from './VideoList'
import { Box } from '@mui/material'

function NewsPage () {
  return (
    <div>
      <SearchBar />
      <Box sx={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box sx={{ width: '50%' }}>
          <NewsList />
        </Box>
        <Box sx={{ width: '45%' }}>
          <VideoList />
        </Box>
      </Box>
    </div>
  )
}

export default NewsPage
