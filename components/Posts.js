import { useEffect, useState } from "react";
import { collection, onSnapshot, orderBy, query } from "@firebase/firestore";
import Post from "./Post";
import { db } from "../firebase";
export default () => {
  const [posts, setPosts] = useState([]);
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ), //Deliberate explicit return so the cleanup return function runs
    [db]
  );
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.data().username}
          userImg={post.data().profileImg}
          img={post.data().image}
          caption={post.data().caption}
        />
      ))}
    </div>
  );
};
