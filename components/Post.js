import {
  BookmarkIcon,
  ChatIcon,
  HeartIcon,
  DotsHorizontalIcon,
  EmojiHappyIcon,
  PaperAirplaneIcon,
} from "@heroicons/react/outline";
import { HeartIcon as HeartSolidIcon } from "@heroicons/react/solid";
export default ({ id, username, userImg, img, caption }) => {
  return (
    <div className="bg-white my-7 border rounded-sm">
      {/* Header */}
      <div className="flex items-center p-5">
        <img
          src={userImg}
          alt=""
          className="rounded-full h-12 w-12 object-contain border p-1 mr-3"
        />
        <p className="flex-1 font-bold">{username}</p>
        <DotsHorizontalIcon className="h-5" />
      </div>
      {/* Img */}
      <img src={img} alt="" className="object-cover w-full" />
      {/* Buttons */}
      <div className="flex justify-between px-4 pt-4">
        <div className="flex space-x-4">
          <HeartIcon className="postBtn" />
          <ChatIcon className="postBtn" />
          <PaperAirplaneIcon className="postBtn" />
        </div>
        <BookmarkIcon className="postBtn" />
      </div>
      {/* Captions */}
      <p className="p-5 truncate">
        <span className="font-bold mr-1">{username}</span>
        {caption}
      </p>
      {/* Comments */}
      {/* Input Box */}
      <form className="flex items-center p-4">
        <EmojiHappyIcon className="postBtn" />
        <input
          type="text"
          placeholder="Add a comment..."
          className="border-none flex-1 focus:ring-0 outline-none"
        />
        <button className="font-semibold text-blue-400">Post</button>
      </form>
    </div>
  );
};
