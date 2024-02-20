import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Grid } from '@mui/material'
import { Select, MenuItem, InputLabel, FormControl, TextField, Button } from '@mui/material'
import Avatar from '../../pic/avatar.png'

function Translation () {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      intro: 'John is a skilled software engineer with over 10 years of experience.',
      image: Avatar,
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      intro: 'Jane is a talented product manager who specializes in user experience.',
      image: Avatar,
    },
    {
      name: 'Alice Johnson',
      role: 'Data Scientist',
      intro: 'Alice is a data scientist with expertise in machine learning and AI.',
      image: Avatar,
    },
    {
      name: 'Bob Williams',
      role: 'UX Designer',
      intro: 'Bob is a creative UX designer who focuses on creating intuitive interfaces.',
      image: Avatar,
    },
    {
      name: 'Bob Williams',
      role: 'UX Designer',
      intro: 'Bob is a creative UX designer who focuses on creating intuitive interfaces.',
      image: Avatar,
    }
  ]

  return (
    <Box sx={{ padding: 2 }}>
      <Typography variant="h4" sx={{ marginBottom: 2 }}>
        我们是北外xxx团队
      </Typography>
      <Typography variant="h5" sx={{ marginBottom: 4 }}>
        可提供xx语言，xx语言，xx语言等翻译服务
      </Typography>
      <Grid container spacing={3}>
        <Grid item xs={5} sx={{ overflowY: 'auto', maxHeight: 'calc(100vh - 200px)' }}>
          <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
            {teamMembers.map((member, index) => (
              <Card key={index} sx={{ width: 400, height: 200 }}>
                <Box sx={{ display: 'flex', flexDirection: 'row', alignItems: 'center', padding: 2 }}>
                  <CardMedia
                    component="img"
                    sx={{ width: 80, height: 80, marginRight: 2 }}
                    image={member.image}
                    alt={member.name}
                  />
                  <Box>
                    <Typography variant="h6" sx={{ textTransform: 'uppercase' }}>
                      {member.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {member.role}
                    </Typography>
                  </Box>
                </Box>
                <CardContent>
                  <Typography variant="body1">
                    {member.intro}
                  </Typography>
                </CardContent>
              </Card>
            ))}
          </Box>
        </Grid>
        <Grid item xs={1}></Grid>
        <Grid item xs={5}>
          <Box sx={{ display: 'flex', alignItems: 'center', marginBottom: 2 }}>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>输入语言</InputLabel>
              <Select label="输入语言">
                <MenuItem value="中文">中文</MenuItem>
                <MenuItem value="日语">日语</MenuItem>
                <MenuItem value="英文">英文</MenuItem>
                <MenuItem value="德语">德语</MenuItem>
              </Select>
            </FormControl>
            <Box sx={{ marginX: 2 }}>➡️</Box>
            <FormControl sx={{ minWidth: 120 }}>
              <InputLabel>翻译语言</InputLabel>
              <Select label="翻译语言">
                <MenuItem value="中文">中文</MenuItem>
                <MenuItem value="日语">日语</MenuItem>
                <MenuItem value="英文">英文</MenuItem>
                <MenuItem value="德语">德语</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <TextField
            label="输入文本"
            multiline
            rows={6}
            fullWidth
            variant="outlined"
            sx={{ marginBottom: 2 }}
          />
          <Button variant="contained" fullWidth>提交</Button>
        </Grid>
      </Grid>
    </Box >
  )
}

export default Translation
