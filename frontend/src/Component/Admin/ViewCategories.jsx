import { Folder } from '@mui/icons-material'
import { Button, Card, Divider, List, ListItem, ListItemIcon, ListItemText, ListSubheader } from '@mui/material'
import React from 'react'
import { useState } from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import CategoryService from '../../Services/Admin Services/CategoryService';
import { useEffect } from 'react';
import swal from 'sweetalert';
import { useNavigate } from 'react-router-dom';

const ViewCategories = () => {

  const [categories, setcategories] = useState([]);
  const navigate=useNavigate();

  useEffect(() => {

    CategoryService.getCategories().then(res => {
      setcategories(res.data)
    }).catch(err => {
      swal("Something wrong happend", "Error in loading data", "error");
    })

  }, [])

const handleAddCategory=(e)=>{
  navigate("/admin/add-category")
}

  return (

    <Card>
      <List>
        <ListSubheader><h2 className='text-center mb10 mt10'>All Categories</h2></ListSubheader>
        {categories.map(category => {
          return (
            <ListItem  >
              <ListItemIcon><Folder /></ListItemIcon>   <ListItem style={{ "display": "block" }}>
                <ListItemText component="div" ><b>{category.title}</b></ListItemText>
                <ListItemText component="div" ><i>{category.description}</i></ListItemText>
                <Divider component="li" />
              </ListItem>
            </ListItem>

          );
        })}

      </List>
      <div className="container add-category">
        <Button onClick={handleAddCategory} size="small" variant="outlined" startIcon={<PlaylistAddIcon />} style={{ "borderColor": "black", "borderRadius": "15px", "borderWidth": "2px", "color": "black", "backgroundColor": "aliceblue" }}>
          Add New Category
        </Button>
      </div>

    </Card>

  )
}

export default ViewCategories;
