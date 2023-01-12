import { MainContent, TextDetail } from './Css.style.js';

function Post ({singlePost}) {
  const postID = '/posts/' + singlePost._id;

  return (
    <MainContent>
      <div><a href={postID}>{singlePost.title}</a></div>
      <div><TextDetail>by <strong>{singlePost.user}</strong> posted on {singlePost.date.slice(0,10)}</TextDetail></div>
      <div>&nbsp;</div>
      <div><TextDetail>X COMMENTS &nbsp; | &nbsp; ADD COMMENT</TextDetail></div>
    </MainContent>
  );
}

export default Post;