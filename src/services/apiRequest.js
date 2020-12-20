import axios from "axios";

const apiKey =
  "a3295ba537f94689d6ae1ffaf826fa2d3064b2facf619d8206a84a179ddc0361a490c5da628de54255e73ae46a1e1c89fc75d88d42befe4b3e1afd2b279fcd3d917e26232442aad354d5f179ea65ad28acd06edd5d0dc2d8be5b398dd843309d2b655715ae142d5f30007f08cc07416f29556bf9ea52ba2ac0c549a0b0971277fd337fb78c1b96cb525f32ab2b11fdbc310be50aae464dafe5962f2b568010851a673b3cd92f09fd5a702aa494f8679933e313534ef840553fa5fa279d6efa257c399bafc961abd466f0d2c243de16d342346afddf84ad17e2ad113737e7ebaf8ae20fd576b75ea831759901f0821aab26bc1d9deed7c9aec18743b404dd83c1";

const baseUrl = "https://supdevinci.nine1000.tech";

const getAllAuthors = async () => {
  return await axios(`${baseUrl}/authors?limit=50`);
};

const getAllPost = async (nbcomms = 0) => {
  const res1 = await axios(`${baseUrl}/posts?limit=0`);
  let nb = res1.data.count;
  if (nbcomms !== 0 && nb > nbcomms) {
    nb = nbcomms;
  }
  return await axios(`${baseUrl}/posts?limit=${nb}`);
};

const getPostBy = async (id) => {
  return await axios(`${baseUrl}/posts/${id}`);
};

const getCommentBy = async (id) => {
  return await axios(`${baseUrl}/posts/${id}/comments`);
};

const UpdatePost = async (id) => {
  return await axios(`${baseUrl}/posts/${id}`);
};

const Updatecomment = async (id) => {
  return await axios(`${baseUrl}/posts/${id}/comments`);
};

const postcomment = async (id, commment) => {
  return await axios.post(
    `${baseUrl}/posts/${id}/comments`,
    { content: commment },
    {
      headers: {
        "x-token": apiKey,
      },
    }
  );
};

const newpost = async (titre, commentaire) => {
  return await axios.post(
    `${baseUrl}/posts`,
    {
      title: titre,
      content: commentaire,
    },
    {
      headers: {
        "x-token": apiKey,
      },
    }
  );
};

const delecomment = async (postId, commId) => {
  return axios.delete(`${baseUrl}/posts/${postId}/comments/${commId}`, {
    headers: {
      "x-token": apiKey,
    },
  });
};
export { getAllAuthors };
export { getAllPost };
export { getPostBy };
export { getCommentBy };
export { UpdatePost };
export { Updatecomment };
export { postcomment };
export { delecomment };
export { newpost };
/*
faire les meme methode pour tous les requetes adaptationprend des parametre selon l id tous sa

*/
