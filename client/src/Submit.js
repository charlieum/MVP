import { useState } from 'react';
import axios from 'axios';
import { MainContent } from './Css.style.js';

function Submit () {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPost = () => {
    const postContent = {
      title: title,
      body: body,
      user: 'Chuckles'
    }

    console.log(postContent);

    axios.post('http://localhost:8080/posts', postContent)
      .then(() => {
        console.log('COMPLETE!');
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <MainContent>
      Title:
      <input placeholder='Title' onChange={(e) => {setTitle(e.target.value)}} />
      Content:
      <textarea placeholder='Write here... ' onChange={(e) => {setBody(e.target.value)}}/>
      <button onClick={submitPost}>Post</button>
    </MainContent>
  );
}

export default Submit;