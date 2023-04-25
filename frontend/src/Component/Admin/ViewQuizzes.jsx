import { Avatar, Button, Card, CardActions, CardContent, CardHeader } from '@mui/material'
import React from 'react'
import { useState } from 'react';
import PlaylistAddIcon from '@mui/icons-material/PlaylistAdd';
import { useNavigate } from 'react-router-dom';
import QuizService from '../../Services/Admin Services/QuizService';
import { useEffect } from 'react';
import swal from 'sweetalert';

const ViewQuizzes = () => {

    const [Quizzes, setQuizzes] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {

        QuizService.getQuizzes().then(res => {
          setQuizzes(res.data)
        }).catch(err => {
          swal("Something wrong happend", "Error in loading data", "error");
        })
    
      }, [])

    const handleAddQuiz = () => {
        navigate("/admin/add-quiz")
    }

    return (
        <div>
            {
                Quizzes.map(quiz => {
                    return (
                        <Card className="mb10 mt10 mr20 ml20">
                         <CardHeader title={quiz.title} subheader={quiz.category.title}  avatar={
                                <Avatar aria-label="quiz" className="quiz-avatar">
                                    {quiz.category.title.split("")[0]}
                                </Avatar>
                            }></CardHeader>  
                            <CardContent>
                                <p>{quiz.description}</p>
                            </CardContent>
                            <CardActions>
                                <Button size='small' variant='contained' style={{ backgroundColor: 'skyblue', color: 'black' }} >Questions</Button>
                                <Button size='small' variant='outlined' className='ml20'>Max Marks: {quiz.maxMarks}</Button>
                                <Button size='small' variant='outlined' className='ml20'>Questions: {quiz.numberOfQuestions}</Button>
                                <Button size='small' variant='contained' style={{ backgroundColor: 'skyblue', color: 'black' }} className='ml20'>Update</Button>
                                <Button size='small' variant='contained' style={{ backgroundColor: 'skyblue', color: 'black' }} className='ml20'>Attempts</Button>
                            </CardActions>
                        </Card>
                    );
                })
            }
            <div className="container text-center mt20">
                <Button onClick={handleAddQuiz} size="small" variant="outlined" startIcon={<PlaylistAddIcon />} style={{ "borderColor": "black", "borderRadius": "15px", "borderWidth": "2px", "color": "black", "backgroundColor": "aliceblue" }}>
                    Add New Quiz
                </Button>
            </div>
        </div>
    )
}

export default ViewQuizzes
