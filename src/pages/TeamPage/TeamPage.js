import React from 'react'
import MasterClass from './MasterClass'
import ChoicePage from './ChoicePage'
import Translation from './Translation'
import PeerToPeer from './PeerToPeer'
import { Routes, Route } from 'react-router-dom'
import { Box } from '@mui/material'

function TeamPage () {
  return (
    <Box>
      <Routes>
        <Route index element={<ChoicePage />} />
        <Route path="master" element={<MasterClass />} />
        <Route path="translation" element={<Translation />} />
        <Route path="pear" element={<PeerToPeer />} />
      </Routes>
    </Box>
  )
}

export default TeamPage
