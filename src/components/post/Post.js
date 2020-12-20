import React from "react";
import { useEffect, useState } from "react";
import styles from "./Post.css";
import {
  getCommentBy,
  postcomment,
  getPostBy,
  delecomment,
  newpost,
  getAllPost,
} from "../../services/apiRequest";
import { Link, useParams } from "react-router-dom";

const LookPost = () => {
  let { id } = useParams();
  const [post, setPost] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getPostBy(id);
      setPost(goodapi.data);
    };
    fetchdata();
  }, [setPost]);
  return <div>{post.content};</div>;
};

const CommentsforPost = () => {
  let { id } = useParams();
  const [comms, setcomments] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getCommentBy(id);
      setcomments(goodapi.data.result);
    };
    fetchdata();
  }, [setcomments]);
  return (
    <div>
      {comms.map((comm) => {
        return (
          <p key={comm.id}>
            <ul>
              <li>{comm.content}</li>{" "}
              <button
                onClick={async () => {
                  await delecomment(id, comm.id);
                  setTimeout("location.reload(true);", 0);
                }}
              >
                DELETE
              </button>
            </ul>
          </p>
        );
      })}
    </div>
  );
};

const Postcomments = () => {
  let { id } = useParams();
  const [commpost, setcomment] = useState("");
  return (
    <div>
      <textarea
        className="content"
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      ></textarea>
      <button
        className="button"
        onClick={async () => {
          await postcomment(id, commpost);
          setTimeout("location.reload(true);", 0);
        }}
      >
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

const NewPost = () => {
  const [title, setTitle] = useState("");
  const [contenu, setContenu] = useState("");
  return (
    <div>
      <input
        onChange={(e) => {
          setTitle(e.target.value);
        }}
        type="text"
        placeholder="Title"
      ></input>
      <textarea
        className="content"
        onChange={(e) => {
          setContenu(e.target.value);
        }}
      ></textarea>
      <button
        className="button"
        onClick={async () => {
          await newpost(title, contenu);
          setTimeout("location.reload(true);", 0);
        }}
      >
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

const AuthorPost = () => {
  let { id } = useParams();
  id = parseInt(id, 10);
  const [posts, setPosts] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getAllPost();
      console.log(id);
      const boo = goodapi.data.result.filter((item) => {
        return item.author === id;
      });
      setPosts(boo);
    };

    fetchdata();
    console.log(posts);
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

export { LookPost };
export { CommentsforPost };
export { Postcomments };
export { NewPost };
export { AuthorPost };
