import React from 'react'
import { Box, TextField, Button, InputAdornment } from '@mui/material'

function SearchBar () {
  return (
    <Box sx={{ display: 'flex', alignItems: 'center', height: '100px', maxWidth: '80%' }}>
      <TextField
        label="请输入需要搜索的内容"
        variant="outlined"
        fullWidth
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <Button variant="contained">开始搜索</Button>
            </InputAdornment>
          ),
        }}
      />
    </Box>
  )
}

export default SearchBar
