import React from 'react'
import { Box, Card, CardMedia, Typography, Grid } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const tools = [
  {
    title: '文书写作',
    description: '自动生成高质量的文书内容，提高工作效率。帮助您快速完成报告、论文、申请书等文档的撰写。',
    imageUrl: require('../../pic/document.png'),
    route: '/ai/document',
  },
  {
    title: '商务翻译',
    description: '准确、快速地翻译商务文件，跨越语言障碍。支持多种语言，保证翻译的专业性和准确性。',
    imageUrl: require('../../pic/business.png'),
    route: '/ai/business',
  },
  {
    title: 'PPT快速生成',
    description: '快速生成精美的PPT，提升演示效果。自动化设计，让您的演示更加吸引人。',
    imageUrl: require('../../pic/ppt.png'),
    route: '/ai/ppt',
  },
  {
    title: '图表绘制',
    description: '轻松绘制各种图表，直观展示数据。支持多种图表类型，满足不同的数据展示需求。',
    imageUrl: require('../../pic/chart.png'),
    route: '/ai/chart',
  },
]


function AIPage () {
  const navigate = useNavigate()

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={4} sx={{ maxWidth: 800 }}> {/* Increase the grid spacing and max width */}
        {tools.map((tool) => (
          <Grid item xs={6} key={tool.title}>
            <Card
              sx={{
                minHeight: 200, // Increase the card height
                display: 'flex',
                flexDirection: 'column',
                cursor: 'pointer',
                p: 2, // Increase the padding
              }}
              onClick={() => navigate(tool.route)}
            >
              <Typography variant="h5" component="div" sx={{
                fontWeight: 'bold',
                textAlign: 'left',
                fontSize: '1.5rem', // Increase the font size
                mb: 1, // Add margin bottom
              }}>
                {tool.title}
              </Typography>
              <Box sx={{ display: 'flex', flexGrow: 1, alignItems: 'center', justifyContent: 'space-between' }}>
                <Typography variant="body2" color="text.secondary" sx={{
                  textAlign: 'left',
                  flex: 1,
                  pr: 2, // Increase the padding right
                }}>
                  {tool.description}
                </Typography>
                <CardMedia
                  component="img"
                  sx={{ width: 80, height: 80 }}
                  image={tool.imageUrl}
                  alt={tool.title}
                />
              </Box>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default AIPage
