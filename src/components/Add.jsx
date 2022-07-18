import { Avatar, Box, Button, ButtonGroup, Fab, Modal, Stack, TextField, Tooltip, Typography } from '@mui/material'
import React from 'react'
import {Add as AddIcon, EmojiEmotions, VideoCameraBack, Image, PersonAdd, DateRange} from "@mui/icons-material"
import { useState } from 'react'
import styled from '@emotion/styled'
import avatar from '../assets/imgs/alienSkate.jpg'

const  StyledModal = styled(Modal)({
    display:"flex",
    alignItems:"center",
    justifyContent:"center"
})

const  UserBox = styled(Box)({
    display:"flex",
    alignItems:"center",
    gap: "10px",
    marginBottom: "20px"
})

const Add = () => {
    const [open, setOpen] = useState(false);

  return (
    <>
        <Tooltip 
            onClick={e => setOpen(true)}
            title="Create Post" 
            sx={{
                position:"fixed", 
                bottom: 20, 
                left: { xs:"calc(50% - 25px)", md:30}
            }}
        >
            <Fab color="primary" aria-label="add">
            <AddIcon />
            </Fab>
        </Tooltip>

        <StyledModal
        open={open}
        onClose={e => setOpen(false)}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={{
            width: {xs:"300px", sm:"500px"}, 
            height: "280px", 
            bgcolor: "background.default",
            color: "text.primary", 
            p: "3px",
            borderRadius: "10px",
            padding: "20px",
            }}
        >
            <Typography variant="h6" color="gray" textAlign="center">Create Post</Typography>
            <UserBox>
                <Avatar sx={{width: 30, height: 30}} src={avatar}/>
                <Typography variant="span">egon</Typography>
            </UserBox>
            <TextField
                sx={{width:"100%"}}
                id="standard-multiline-static"
                multiline
                rows={3}
                placeholder="What's on your mind?"
                variant="standard"
            />
            <Stack direction="row" gap={1} mt={2} mb={3}>
                <EmojiEmotions color="primary"/>
                <Image color="secondary"/>
                <VideoCameraBack color="success" />
                <PersonAdd color="error" />
            </Stack>
            <ButtonGroup fullWidth variant="contained" aria-label="outlined primary button group">
                <Button>Post</Button>
                <Button sx={{width: "100px"}}>
                    <DateRange/>
                </Button>
            </ButtonGroup>
        </Box>
        </StyledModal>
    </>
  )
}

export default Add