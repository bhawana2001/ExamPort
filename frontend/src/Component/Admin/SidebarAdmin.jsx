import React from 'react';
import Card from '@mui/material/Card';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ListSubheader from '@mui/material/ListSubheader';
import HomeTwoToneIcon from '@mui/icons-material/HomeTwoTone';
import AccountCircleRoundedIcon from '@mui/icons-material/AccountCircleRounded';
import { useNavigate } from 'react-router-dom';
import CategoryRoundedIcon from '@mui/icons-material/CategoryRounded';
import CreateNewFolderRoundedIcon from '@mui/icons-material/CreateNewFolderRounded';
import QuizRoundedIcon from '@mui/icons-material/QuizRounded';
import LogoutRoundedIcon from '@mui/icons-material/LogoutRounded';
import NoteAddRoundedIcon from '@mui/icons-material/NoteAddRounded';

const SidebarAdmin = () => {

    const navigate = useNavigate();

    const handleProfile = () => {
        navigate("/admin/profile");
    }

    const handleHome = () => {
        navigate("/admin");
    }

    const handleCategories = () => {
        navigate("/admin/categories");
    }

    const handleAddCategory = () => {
        navigate("/admin/add-category");
    }
    const handleViewQuizzes =()=>{
        navigate("/admin/quizzes");
    }
    const handleAddQuiz=()=>{
        navigate("/admin/add-quiz");
    }

    return (

        <Card>
            <List subheader={
                <ListSubheader component="div" >Menu</ListSubheader>
            }>

                <ListItem disablePadding>
                    <ListItemButton onClick={handleHome}>
                        <ListItemIcon>
                            <HomeTwoToneIcon />
                        </ListItemIcon>
                        <ListItemText primary="Home" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleProfile}>
                        <ListItemIcon>
                            <AccountCircleRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Profile" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleCategories}>
                        <ListItemIcon>
                            <CategoryRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Categories" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleAddCategory}>
                        <ListItemIcon>
                            <CreateNewFolderRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Categories" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleViewQuizzes}>
                        <ListItemIcon>
                            <QuizRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Quizzes" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleAddQuiz}>
                        <ListItemIcon>
                            <NoteAddRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Add Quiz" />
                    </ListItemButton>
                </ListItem>

                <ListItem disablePadding  >
                    <ListItemButton onClick={handleProfile}>
                        <ListItemIcon>
                            <LogoutRoundedIcon />
                        </ListItemIcon>
                        <ListItemText primary="Logout" />
                    </ListItemButton>
                </ListItem>

            </List>

        </Card>


    )
}

export default SidebarAdmin