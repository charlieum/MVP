import { PostSingle } from './Css.style.js';

function Post ({singlePost}) {
  return (
    <PostSingle>
      {singlePost.user}, {singlePost.data}
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
    </PostSingle>
  );
}

export default Post;