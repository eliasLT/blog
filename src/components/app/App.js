import "./App.css";
import { Switch, Route, Link } from "react-router-dom";
import { getAllAuthors, getAllPost } from "../../services/apiRequest";
import { useEffect, useState } from "react";
import Header from "../header/Header";
import Footer from "../footer/Footer";
import {
  LookPost,
  CommentsforPost,
  Postcomments,
  NewPost,
  AuthorPost,
} from "../post/Post";

const NotFound = () => {
  return <div>Not found</div>;
};

const About = () => {
  return (
    <div>
      <ul>
        <li>
          Véritable « ruche » à jeunes talents au cœur des enjeux des
          entreprises depuis près de 25 ans, nous accompagnons les étudiants du
          BAC au BAC+5 dans l’acquisition de compétences d’ingénierie
          informatique et de savoirs transverses indispensables à leur réussite.
        </li>
        <li>
          Nous sommes situés au sein du Pôle Universitaire Léonard de Vinci,
          véritable campus à l’américaine au cœur du premier quartier d’affaires
          européen de La Défense.
        </li>
        <li>
          SUP DE VINCI bénéficie depuis près de 25 ans d’expériences en matière
          de formation informatique en alternance au sein d’une école à taille
          humaine.
        </li>
        <li>
          Un accompagnement et une aide personnalisée sont proposés dès
          l’admissibilité au travers du dispositif C.A.R.E (Coaching
          d’Accompagnement à la Recherche d’Entreprise). Il se caractérise par
          un coaching individualisé lors de la recherche d’une entreprise
          d’accueil s’appuyant sur un réseau de plus de 900 entreprises
          partenaires.
        </li>
        <li>
          L’équipe pédagogique est uniquement composée de formateurs pour la
          grande majorité en poste en entreprise. En plus de transmettre leur
          expertise, ils partagent leur expérience professionnelle offrant ainsi
          aux étudiants une nouvelle dimension aux acquis théoriques.
        </li>
      </ul>
    </div>
  );
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
        return (
          <div key={author.id}>
            <Link to={"/author/" + author.id}>{author.display_name}</Link>
          </div>
        );
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
      const goodapi = await getAllPost(4);
      setPosts(goodapi.data.result);
    };
    fetchdata();
  }, [setPosts]);
  return (
    <div>
      {posts.map((post) => {
        return (
          <div className="postI" key={post.id}>
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
        <div>
          {" "}
          <h1 style={{ color: "#357AB7" }}>Lasted Post :</h1>{" "}
        </div>
        <Switch>
          <Route exact path="/">
            <ShowPosts />
          </Route>
          {/* <Route path="/post/update/:id">
          <UpdatePost />
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
          <Route path="/newpost">
            <NewPost />
          </Route>
          <Route path="/author/:id">
            <AuthorPost />
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
