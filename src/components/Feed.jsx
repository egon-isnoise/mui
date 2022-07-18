import { Box } from '@mui/material'
import React from 'react'
import Post from './Post'
import art1 from '../assets/imgs/idk.png'
import art2 from '../assets/imgs/dumba.png'
import art3 from '../assets/imgs/dumba2.png'

function Feed() {
  return (
    <Box 
        flex={4} 
        p={2}
    >
        <Post img={art1}/>
        <Post img={art2}/>
        <Post img={art3}/>
        <Post img={art1}/>
        <Post img={art2}/>
        <Post img={art3}/>
        
    </Box>
  )
}

export default Feed