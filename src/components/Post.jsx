import React from 'react'
import { Favorite, FavoriteBorder, MoreVert, Share } from '@mui/icons-material'
import { Avatar, Card, CardActions, CardContent, CardHeader, CardMedia, Checkbox, IconButton, Typography } from '@mui/material'

function Post({img}) {
  return (
    <div>
        <Card sx={{margin: 5}}>
            <CardHeader
                avatar={
                <Avatar sx={{ bgcolor:"green"}} aria-label="recipe">
                    R
                </Avatar>
                }
                action={
                <IconButton aria-label="settings">
                    <MoreVert />
                </IconButton>
                }
                title="Water and marble"
                subheader="September 14, 2021"
            />
            <CardMedia
                component="img"
                height="20%"
                image= {img}
                alt="Beautiful Art"
            />
            <CardContent>
                <Typography variant="body2" color="text.secondary">
                This amazing artwork is living on the Ethereum Blockchain and looks amazing on any wall, screen, or poster!

                </Typography>
            </CardContent>
            <CardActions disableSpacing>
                <IconButton aria-label="add to favorites">
                    <Checkbox icon={<FavoriteBorder />} checkedIcon={<Favorite sx={{color: "red"}}/>} />
                </IconButton>
                <IconButton aria-label="share">
                    <Share />
                </IconButton>
            </CardActions>
        </Card>
    </div>
  )
}

export default Post