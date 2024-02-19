import React from 'react'
import { Routes, Route, Link } from 'react-router-dom'
import Drawer from '@mui/material/Drawer'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box'
import NewsPage from '../pages/NewsPage/NewsPage'
import RegionPage from '../pages/RegionPage/RegionPage'
import AssessmentPage from '../pages/AssessmentPage/AssessmentPage'
import AIPage from '../pages/AIPage/AIPage'
import TeamPage from '../pages/TeamPage/TeamPage'

const drawerWidth = 200

function HomePage () {
  const navItems = [
    { label: '本周快讯', path: 'news', icon: 'news.png' },
    { label: '地区查询', path: 'region', icon: 'region.png' },
    { label: '测评入口', path: 'assessment', icon: 'assessment.png' },
    { label: 'AI工具', path: 'ai', icon: 'ai.png' },
    { label: '专业团队', path: 'team', icon: 'team.png' },
  ]

  return (
    <div style={{ display: 'flex' }}>
      <Drawer
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          '& .MuiDrawer-paper': {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
        variant="permanent"
        anchor="left"
      >
        <List>
          {navItems.map((item) => (
            <ListItem key={item.path} disablePadding sx={{ marginTop: '16px' }}>
              <ListItemButton component={Link} to={item.path}>
                <Box
                  sx={{
                    width: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    justifyContent: 'center',
                  }}
                >
                  <img src={require(`../pic/${item.icon}`)} alt={item.label} style={{ width: 60, height: 60, marginBottom: '8px' }} />
                  <ListItemText primary={item.label} />
                </Box>
              </ListItemButton>
            </ListItem>
          ))}
        </List>

        <ListItem sx={{ position: 'absolute', bottom: 0, left: 0, width: '100%', marginBottom: '16px' }}>
          <Box
            sx={{
              width: '100%',
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img src={require('../pic/user.png')} alt="胡老师" style={{ width: 60, height: 60, marginBottom: '8px' }} />
            <ListItemText primary="胡然老师" />
          </Box>
        </ListItem>

      </Drawer>
      <main style={{ flexGrow: 1, padding: '20px' }}>
        <Routes>
          <Route path="news" element={<NewsPage />} />
          <Route path="/region/*" element={<RegionPage />} />
          <Route path="/assessment/*" element={<AssessmentPage />} />
          <Route path="/ai/*" element={<AIPage />} />
          <Route path="team" element={<TeamPage />} />
        </Routes>
      </main>
    </div>
  )
}

export default HomePage
