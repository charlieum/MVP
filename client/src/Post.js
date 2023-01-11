import { MainContent } from './Css.style.js';

function Post ({singlePost}) {
  const postID = '/posts/' + singlePost._id;

  return (
    <MainContent>
      <p><a href={postID}>{singlePost.title}</a></p>
      <p>{singlePost.user}, {singlePost.data}</p>
    </MainContent>
  );
}

export default Post;