import React from 'react'
import { Box, Card, CardContent, CardMedia, Typography, Grid, Divider } from '@mui/material'
import Avatar from '../../pic/avatar.png'

function PeerToPeer () {
  const teamMembers = [
    {
      name: 'John Doe',
      role: 'Software Engineer',
      intro: 'John is a skilled software engineer with over 10 years of experience.',
      image: Avatar,
      price: '500rmb/小时'
    },
    {
      name: 'Jane Smith',
      role: 'Product Manager',
      intro: 'Jane is a talented product manager who specializes in user experience.',
      image: Avatar,
      price: '600rmb/小时'
    },
    {
      name: 'Alice Johnson',
      role: 'Data Scientist',
      intro: 'Alice is a data scientist with expertise in machine learning and AI.',
      image: Avatar,
      price: '700rmb/小时'
    },
    {
      name: 'Bob Williams',
      role: 'UX Designer',
      intro: 'Bob is a creative UX designer who focuses on creating intuitive interfaces.',
      image: Avatar,
      price: '550rmb/小时'
    }
  ]

  return (
    <Box sx={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: '100vh' }}>
      <Grid container spacing={4} sx={{ maxWidth: '900px' }}>
        {teamMembers.map((member, index) => (
          <Grid item xs={6} key={index}>
            <Card sx={{ width: '400px', display: 'flex', flexDirection: 'column', alignItems: 'flex-start' }}>
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
              <CardContent sx={{ width: '100%' }}>
                <Typography variant="body1">
                  {member.intro}
                </Typography>
                <Divider sx={{ marginY: 1 }} />
                <Typography variant="h6" sx={{ fontWeight: 'bold', textAlign: 'center', marginTop: '20px' }}>
                  {member.price}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default PeerToPeer
