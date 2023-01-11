import Post from './Post';
import Info from './Info';
import { BodyAll, BodyContent, BodyMain, BodySide } from './Css.style';

function Body ({allPosts}) {

  return (
    <BodyAll>
      <BodyContent>
        <BodyMain>
          {allPosts.map((singlePost) => (
            <Post singlePost={singlePost} />
          ))}
        </BodyMain>
        <BodySide>
          <Info />
        </BodySide>
      </BodyContent>
    </BodyAll>
  );
}

export default Body;
