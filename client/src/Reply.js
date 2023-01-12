import { TextDetail, ReplyContainer } from './Css.style.js';

function Post ({ postComment }) {

  return (
    // <>
    <ReplyContainer>
      <div>{postComment.body}</div>
      <div>&nbsp;</div>
      <div><TextDetail>by <strong>{postComment.user}</strong> posted on {postComment.date}</TextDetail></div>
      <div><TextDetail>REPLY</TextDetail></div>
    </ReplyContainer>
    // </>
  );
}

export default Post;