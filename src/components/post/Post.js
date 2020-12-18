import React from "react";
import { useEffect, useState } from "react";
import styles from "./Post.css";
import {
  getCommentBy,
  postcomment,
  getPostBy,
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
  const [comm, setcomments] = useState([]);
  useEffect(() => {
    const fetchdata = async () => {
      const goodapi = await getCommentBy(id);
      setcomments(goodapi.data.result);
    };
    fetchdata();
  }, [setcomments]);
  return (
    <div>
      {comm.map((comms) => {
        return <p key={comms.id}>{comms.content}</p>;
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
        onChange={(e) => {
          setcomment(e.target.value);
        }}
      ></textarea>
      <button
        onClick={async () => {
          const res = await postcomment(id, commpost);
          console.log(res);
        }}
      >
        {" "}
        Submit{" "}
      </button>
    </div>
  );
};

export { LookPost };
export { CommentsforPost };
export { Postcomments };
