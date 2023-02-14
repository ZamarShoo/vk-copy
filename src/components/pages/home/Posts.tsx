import React, {FC} from 'react'
import { Box } from '@mui/system'
import { Avatar, ImageList, ImageListItem } from '@mui/material'
import { Link } from 'react-router-dom'
import { IPost } from '../../../types'

interface IPosts {
    posts: IPost[]
}

const Posts: FC<IPosts> = ({posts}) => {
  return (
    <>
    {posts.map(post => (
        <Box key={`${post.author._id}--${post.createdAt}`} sx={{
            border: '1px solid #ccc',
            borderRadius: '10px',
            padding: '10px 15px',
            marginTop: 3
        }}>
            <Link key={post.author._id} to={`/profile/${post.author._id}`} style={{position: 'relative', display: 'flex',
            alignItems: 'center', textDecoration: 'none', color: '#111', padding: '15px 10px',}}>
             <Box sx={{marginRight: 2, width: 50, height: 50}}>
               <Avatar 
                 sx={{width: 48, height: 48}}
                 src={post.author.avatar} alt="" />
               </Box>
               <div>
                <span style={{fontSize: 14}}>{post.author.name}</span>
                <span style={{fontSize: 14, opacity: '0.6'}}>{post.createdAt}</span>
               </div>
           </Link>

           <p>
                {post.content}
           </p>

           {post.images?.length && (
            <ImageList variant="masonry" cols={3} gap={8}>
                {post.images.map((image) => (
                    <ImageListItem key={image}>
                    <img
                        src={image}
                        alt={''}
                        loading="lazy"
                    />
                    </ImageListItem>
                ))}
            </ImageList>
           )}
        </Box>
    ))}
    </>
  )
}

export default Posts