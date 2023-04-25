import { Button, Card, CardContent, ListSubheader, TextField } from '@mui/material'
import React from 'react'
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useState } from 'react';
import swal from 'sweetalert';
import CategoryService from '../../Services/Admin Services/CategoryService';

const AddCategory = () => {

  const initialState = {
    title: "",
    description: ""
  }

  const [category, setcategory] = useState(initialState)

  const handleTitle = (e) => {
    setcategory({ ...category, title: e.target.value })
  }
  const handleDescription = (e) => {
    setcategory({ ...category, description: e.target.value })

  }
  const handleAddCategory=(e)=>{
    let category1={
      title:category.title,
      description:category.description
    }

    if(category1.title.trim()==='' || category1.title===null){
      swal("Title is Required !!","","");
      return;
    }

    CategoryService.addCategory(category1).then(res=>{
      console.log(res.data);
      swal("Success","Category has been added..","success");
      setcategory(initialState);
    }).catch(err=>{
      swal("Server Error","","error");

    })

  }

  return (
    <Card>
      <ListSubheader> <h2 className='text-center mb10 mt10'>Add New Category</h2></ListSubheader>
      <CardContent>
        <div className="bootstrap-wrapper">
          <div className="row">
            <div className="col-md-8 offset-md-2">
              <TextField className='category-form' value={category.title} onChange={handleTitle} required label="Title" type="text" id="title" name='title' helperText="Enter Category Title here" margin="normal" />
              <TextField className='category-form' value={category.description} onChange={handleDescription}  label="Description" type="text" id="description" name="description" helperText="Enter Category Description here" margin="normal" />
              <div className="container text-center">
                <Button size="small" onClick={handleAddCategory} variant="outlined" startIcon={<PlaylistAddIcon />} style={{ "borderColor": "black", "borderRadius": "15px", "borderWidth": "2px", "color": "black", "backgroundColor": "aliceblue" }}>
                  Add
                </Button>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  )
}

export default AddCategory