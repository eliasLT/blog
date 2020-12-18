import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { getAllAuthors, getAllPost } from "../../services/apiRequest";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import { LookPost, CommentsforPost, Postcomments } from "../post/Post";

const NotFound = () => {
  return <div>Not found</div>;
};

const About = () => {
  return <div>azertyuiopdbcnjkdcncdjcdkcdjkl</div>;
};

const Authors = () => {
  const [authors, setAuthors] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getAllAuthors();
      setAuthors(goodapi.data.result);
    };
    fetchdata();
  }, [setAuthors]);
  return (
    <div>
      {authors.map((author) => {
        return <div key={author.id}>{author.display_name}</div>;
      })}
    </div>
  );
};

const ContactUs = () => {
  return (
    <div>
      azertyuiopdbcnjkddjoiijvlkmjdkljvjjjjvvxcdrtfvgbynhuji,ko;,lkjnhcncdjcdkcdjkl
    </div>
  );
};

const ShowPosts = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getAllPost();
      setPosts(goodapi.data.result);
    };
    fetchdata();
  }, [setPosts]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/post/" + post.id}>{post.title}</Link>
            {post.created_at}
          </div>
        );
      })}
    </div>
  );
};

const ShowMyPostes = () => {
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getAllPost();
      const boo = goodapi.data.result.filter((item) => {
        return item.author === 18;
      });
      setPosts(boo);
    };
    fetchdata();
  }, [setPosts]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div key={post.id}>
            <Link to={"/post/" + post.id}>{post.title}</Link>

            {post.created_at}
          </div>
        );
      })}
    </div>
  );
};

function App() {
  return (
    <>
      <Header />
      <div>
        <div>Bienvenue : </div>
        <Switch>
          <Route exact path="/">
            <ShowPosts />
          </Route>
          {/* <Route path="/post/update/:id">
          <UpdatePost />
        </Route>
        <Route path="/post/add">
          <AddPost />
          </Route>*/}
          <Route path="/post/:id">
            <LookPost />
            <CommentsforPost />
            <Postcomments />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/authors">
            <Authors />
          </Route>
          <Route path="/contactus">
            <ContactUs />
          </Route>
          <Route path="/mypost">
            <ShowMyPostes />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
      </div>
      <Footer />
    </>
  );
}

export default App;
