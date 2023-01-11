import { MainContent } from './Css.style.js';

function Post ({singlePost}) {
  console.log(singlePost);
  return (
    <MainContent>
      {singlePost.user}, {singlePost.data}
      <p>{singlePost.title}</p>
      <p>{singlePost.body}</p>
    </MainContent>
  );
}

export default Post;