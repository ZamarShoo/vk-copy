import React from 'react'
import { Card, List, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useHistory } from 'react-router-dom'
import { menu } from './dataMenu'

const Menu = () => {

    const history = useHistory()

  return (
    <Card
    variant='outlined'
    sx={{
      backgroundColor: '#F6F6F6',
      border: 'none',
      borderRadius: 3,
      marginTop: 2
    }}>
        <List>
            {menu.map(item => (
            <ListItem key={`${item.title}--${item.link}`} disablePadding>
                <ListItemButton onClick={() => history.push(item.link)}>
                <ListItemIcon sx={{
                    minWidth: 36
                }}>
                    <item.icon />
                </ListItemIcon>
                <ListItemText primary={item.title} />
                </ListItemButton>
            </ListItem>
            ))}
        </List>
    </Card>
  )
}

export default Menu