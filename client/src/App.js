import Navigation from './Navigation';
import Header from './Header';
import Body from './Body';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Switch, Route, BrowserRouer } from 'react-router-dom';

function App() {
  const [allPosts, setAllPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:8080/posts')
      .then((response) => {
        setAllPosts(response.data);
      })
      .catch((error) => {
        console.log('error');
      })
  }, []);

  return (
    <div>
      <BrowserRouer>
        <Switch>
          <Route path="/"></Route>
        </Switch>
      </BrowserRouer>

      <Navigation />
      <Header />
      <Body allPosts={allPosts} />
    </div>
  );
}

export default App;
