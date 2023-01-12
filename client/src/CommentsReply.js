import Reply from './Reply';

function CommentsReply ({ postComments }) {

  return (
    <>
      {postComments.map((postComment) => (
        <Reply postComment={postComment} key={postComment._id} />
      ))}
    </>
  );
}

export default CommentsReply;
