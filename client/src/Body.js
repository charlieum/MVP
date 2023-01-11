import Post from './Post';
import Info from './Info';
import { BodyAll, BodyContent, BodyMain, BodySide } from './Css.style';

function Body () {
  return (
    <BodyAll>
      <BodyContent>
        <BodyMain>
          <Post />
          <Post />
        </BodyMain>
        <BodySide>
          <Info />
        </BodySide>
      </BodyContent>
    </BodyAll>
  );
}

export default Body;
