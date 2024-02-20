import React from 'react'
import { Box, Typography, Card, CardContent, CardActionArea } from '@mui/material'
import { Masonry } from '@mui/lab'
import { styled } from '@mui/material/styles'

// 自定义 MasonryItem 组件以适应不同高度的图片
const MasonryItem = styled(Card)(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',
  alignItems: 'stretch',
  justifyContent: 'flex-start',
}))

function VideoList () {
  const videos = [
    { title: '视频1', url: 'https://example.com/video1', imageUrl: require('../../pic/map.png') },
    { title: '视频2', url: 'https://example.com/video2', imageUrl: require('../../pic/map.png') },
    { title: '视频3', url: 'https://example.com/video3', imageUrl: require('../../pic/map.png') },
    { title: '视频4', url: 'https://example.com/video4', imageUrl: require('../../pic/map.png') },
    { title: '视频5', url: 'https://example.com/video5', imageUrl: require('../../pic/map.png') },
    { title: '视频6', url: 'https://example.com/video6', imageUrl: require('../../pic/map.png') },
    // 其他视频数据...
  ]

  return (
    <Box>
      <Box sx={{ backgroundColor: 'primary.main', color: 'white', padding: '10px 16px', borderRadius: '10px', marginBottom: '20px' }}>
        <Typography variant="h6">相关视频</Typography>
      </Box>
      <Masonry columns={2} spacing={2} sx={{ width: '100%' }}>
        {videos.map((video, index) => (
          <MasonryItem key={index}>
            <CardActionArea href={video.url} target="_blank">
              <img
                src={video.imageUrl}
                alt={video.title}
                style={{ width: '100%', objectFit: 'cover' }}
              />
              <CardContent>
                <Typography variant="body1" sx={{ fontWeight: 'bold' }}>
                  {video.title}
                </Typography>
              </CardContent>
            </CardActionArea>
          </MasonryItem>
        ))}
      </Masonry>
    </Box>
  )
}

export default VideoList
