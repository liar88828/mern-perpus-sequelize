import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import axios from 'axios';
import { useNavigate } from "react-router-dom";


export const CreatePost = () => {


  const navigate = useNavigate()

  const initialValues = {
    title: '',
    postText: '',
    username: ''
  };

  const validationSchema = Yup.object().shape({
    title: Yup.string().required('tolong masukan judul'),
    postText: Yup.string().required('tolong masukan teks'),
    username: Yup.string().min(3).max(15).required('tolong masukan nama anda')
  });

  const onSubmit = (data) => {
    axios.post('http://localhost:5000/posts', data)
      .then(res => {
        console.log('success' + data);
      });

    console.log(data);
    navigate('/')
  };

  return (
    <div className='createPostPage'>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        <Form className='formContainer'>
          <label>Title : </label>
          <ErrorMessage
            name='title'
            component={'span'} />
          <Field

            autoComplete='off'
            id='inputCreatePost'
            name='title'
            placeholder='(Ex Title)' />

          <label>Post : </label>
          <ErrorMessage
            name='postText'
            component={'span'} />

          <Field
            autoComplete='off'
            id='inputCreatePost'
            name='postText'
            placeholder='(Ex postText)' />

          <label>username : </label>
          <ErrorMessage
            name='username'
            component={'span'} />

          <Field
            autoComplete='off'
            id='inputCreatePost'
            name='username'
            placeholder='(Ex username)' />
          <button type='submit'>create post</button>
        </Form>
      </Formik>
    </div>
  );
};
