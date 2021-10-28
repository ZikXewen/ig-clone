import Post from "./Post";
const posts = [
  {
    id: "123",
    username: "zikxewen",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption: "Example Caption!",
  },
  {
    id: "124",
    username: "zikxewen",
    userImg: "https://links.papareact.com/jjm",
    img: "https://links.papareact.com/jjm",
    caption:
      "Extraordinarily long motherloving caption just for experimental purpose and the love of our great buddha.",
  },
];
export default () => {
  return (
    <div>
      {posts.map((post) => (
        <Post key={post.id} {...post} />
      ))}
    </div>
  );
};
