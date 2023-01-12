import { useState } from 'react';
import axios from 'axios';
import { SubmitContainer, SubmitButton } from './Css.style.js';

function CommentForm ({ rootId, parentId }) {
  const [body, setBody] = useState('');

  const submitComment = () => {
    const commentContent = {
      user: 'Wacko',
      body: body,
      rootId: rootId,
      parentId: parentId,
    }

    axios.post('http://localhost:8080/posts', commentContent)
      .then((response) => {
        setBody('');
      })
      .catch((error) => {
        console.log('error');
      })
  }

  return (
    <>
      <SubmitContainer>
        &nbsp;
      </SubmitContainer>
      Leave a comment:
      <textarea placeholder='Write here... ' onChange={(e) => {setBody(e.target.value)}} value={body} />
      <SubmitButton onClick={submitComment}>Comment</SubmitButton>
    </>
  );
}

export default CommentForm;
