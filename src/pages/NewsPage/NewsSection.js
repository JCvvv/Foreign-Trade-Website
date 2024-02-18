import React, { useState } from 'react'
import { Card, Typography, Button, Box, Divider } from '@mui/material'

function NewsSection ({ title, articles }) {
  const [expanded, setExpanded] = useState(false)

  return (
    <Card sx={{ marginBottom: '20px', borderRadius: '10px', boxShadow: 3 }}>
      <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', backgroundColor: 'primary.main', color: 'white', padding: '10px 16px', borderTopLeftRadius: '10px', borderTopRightRadius: '10px' }}>
        <Typography variant="h6">{title}</Typography>
        <Button onClick={() => setExpanded(!expanded)} sx={{ color: 'white' }}>{expanded ? '收起' : '展开'}</Button>
      </Box>
      <Box sx={{ maxHeight: expanded ? '1000px' : '168px', overflow: 'hidden', transition: 'max-height 1s ease-in-out' }}>
        <Box sx={{ padding: '10px 16px' }}>
          {(expanded ? articles : articles.slice(0, 3)).map((article, index) => (
            <React.Fragment key={index}>
              <Typography sx={{ marginTop: '10px', fontSize: '1.1rem' }}>
                <a href={article.url} target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none', color: 'black' }}>
                  {article.title}
                </a>
              </Typography>
              {index < (expanded ? articles.length - 1 : 2) && <Divider sx={{ marginTop: '10px', backgroundColor: 'grey.300' }} />}
            </React.Fragment>
          ))}
        </Box>
      </Box>
    </Card>
  )
}

export default NewsSection
