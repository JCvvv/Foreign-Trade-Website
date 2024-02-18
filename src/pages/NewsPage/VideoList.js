import React from 'react'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import testImg from '../../pic/map.png'

function VideoList () {
  const videos = [
    { title: '视频1', url: 'https://example.com/video1', imageUrl: testImg },
    { title: '视频2', url: 'https://example.com/video1', imageUrl: testImg },
    { title: '视频3', url: 'https://example.com/video1', imageUrl: testImg },
    { title: '视频4', url: 'https://example.com/video1', imageUrl: testImg },
    { title: '视频5', url: 'https://example.com/video1', imageUrl: testImg },
    { title: '视频6', url: 'https://example.com/video1', imageUrl: testImg },
    // 其他视频数据...
  ]

  return (
    <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '10px', overflowY: 'auto', height: '100%' }}>
      {videos.map((video, index) => (
        <Card key={index} sx={{ maxWidth: '100%', height: 'auto' }}>
          <CardActionArea href={video.url} target="_blank">
            <img
              src={video.imageUrl}
              alt={video.title}
              height="150"
              style={{ width: '100%', objectFit: 'cover' }}
              onError={(e) => console.log(e.target.src)}
            />
            <CardContent>
              <Typography variant="body2" color="text.secondary">
                {video.title}
              </Typography>
            </CardContent>
          </CardActionArea>
        </Card>
      ))}
    </Box>

  )
}

export default VideoList
