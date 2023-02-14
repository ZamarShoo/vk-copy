import { QuestionAnswer } from '@mui/icons-material'
import { Avatar, Box, Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import React, {FC} from 'react'
import { Link, useHistory } from 'react-router-dom'
import { users } from './dataUsers'

const UserItems: FC = () => {

  const history = useHistory()

  return (
    <>
      <Card
    variant='outlined'
    sx={{
      backgroundColor: '#F6F6F6',
      border: 'none',
      borderRadius: 3
    }}>
      {users.map(user => (
        <Link key={user._id} to={`/profile/${user._id}`} style={{position: 'relative', display: 'flex',
         alignItems: 'center', textDecoration: 'none', color: '#111', padding: '15px 10px',}}>
          <Box sx={{marginRight: 2, width: 50, height: 50}}>
            <Avatar 
              sx={{width: 48, height: 48}}
              src={user.avatar} alt="" />
            </Box>
            {user.isInNetwork && 
            <Box sx={{
              backgroundColor: '#4FB14F',
              border: '2px solid #F6F6F6',
              width: 10,
              height: 10,
              position: 'absolute',
              bottom: 17,
              left: 45,
              borderRadius: '50%'
            }} />
            }
            <span style={{fontSize: 14}}>{user.name}</span>
        </Link>
        ))}
    </Card>

    <Card variant='outlined'
    sx={{
      backgroundColor: '#F6F6F6',
      border: 'none',
      borderRadius: 3,
      marginTop: 2
    }}>
      <List>
          <ListItem disablePadding>
            <ListItemButton onClick={() => history.push('/messages')}>
              <ListItemIcon sx={{
                    minWidth: 36
                }}>
                <QuestionAnswer />
              </ListItemIcon>
              <ListItemText primary='Сообщения' />
            </ListItemButton>
          </ListItem>
        </List>
    </Card>
    </>
  )
}

export default UserItems