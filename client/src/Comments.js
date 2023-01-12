import { useEffect, useState } from 'react';
import axios from 'axios';
import CommentForm from './CommentForm';
import CommentsReply from './CommentsReply';
import { MainContent, TextTitle, TextDetail } from './Css.style.js'
import { useParams } from "react-router-dom";

function Comments () {
  const [postData, setPostData] = useState({});
  const [postComments, setPostComments] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    axios.get('http://localhost:8080/posts/' + id)
      .then((response) => {
        setPostData(response.data);
        axios.get('http://localhost:8080/posts/comments/' + id)
          .then((response) => {
            setPostComments(response.data);
          })
          .catch((error) => {
            console.log('error in comments.js');
          })
      })
      .catch((error) => {
        console.log('error');
      })
  }, [id]);

  if(postData !== []) {
    return(
      <>
        <MainContent>
          <div><TextTitle>{postData.title}</TextTitle></div>
          <div><TextDetail>by <strong>{postData.user}</strong> posted on {postData.date ? postData.date.slice(0,10) : postData.date}</TextDetail></div>
          <div>&nbsp;</div>
          <div>{postData.body}</div>
          <div>&nbsp;</div>
          <div><TextDetail>{postComments.length} COMMENTS</TextDetail></div>
          <div>&nbsp;</div>
          <hr />
          <CommentForm rootId={id} parentId={id} />
        </MainContent>
        {postComments.length !== 0
        ? <MainContent>
          <CommentsReply postComments={postComments} />
        </MainContent>
        : <></>}
      </>
    );
  }
}

export default Comments;