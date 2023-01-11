import { PostSingle } from './Css.style.js';

function Post ({singlePost}) {
  console.log(singlePost);
  return (
    <PostSingle>
      {singlePost.user}, {singlePost.data}
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
    </PostSingle>
  );
}

export default Post;