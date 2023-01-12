import { useState } from 'react';
import axios from 'axios';
import { MainContent, TextTitle, SubmitButton, Confirmed } from './Css.style.js';

function Submit () {
  const [title, setTitle] = useState('');
  const [body, setBody] = useState('');

  const submitPost = () => {
    const postContent = {
      title: title,
      body: body,
      user: 'ChuglyMonster'
    }

    axios.post('http://localhost:8080/posts', postContent)
      .then(() => {
        setTitle('');
        setBody('');
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
      })
  };

  return (
    <MainContent>
      <div><TextTitle>CREATE A POST</TextTitle></div>
      <div>&nbsp;</div>
      Title:
      <input placeholder='Title' onChange={(e) => {setTitle(e.target.value)}} value={title} />
      <div>&nbsp;</div>
      Content:
      <textarea placeholder='Write here... ' onChange={(e) => {setBody(e.target.value)}} value={body} />
      <Confirmed>POSTED!</Confirmed>
      <SubmitButton onClick={submitPost}>Post</SubmitButton>
      <div>&nbsp;</div>
    </MainContent>
  );
}

export default Submit;