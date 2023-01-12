import { SideContent, PostButton } from './Css.style.js';

function Post () {

  return (
    <>
      <SideContent>
        <>
          <a href="/submit">
            <PostButton>Create Post</PostButton>
          </a>
        </>

        <div>
          <strong>About The Silly Hats Club</strong>
        </div>
        <div>&nbsp;</div>
        <div>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</div>
      </SideContent>
    </>
  );
}

export default Post;