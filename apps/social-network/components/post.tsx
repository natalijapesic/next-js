import React, { useState } from 'react';
import Image from 'next/image';

interface IProps {
  id: number;
  title: string;
  image: string;
  description: string;
  authorName: string;
  date: string;
  likes: number;
  usersLikes: number[];
  userId: number;
}

const Post: React.FC<IProps> = (post: IProps) => {
  const [show, setShow] = useState(false);

  return (
    <div className="flex-col  bg-gray-800 my-5">
      <div className="flex-col m-5" onClick={() => setShow(!show)}>
        <Image src={post.image} alt="Post image" width={300} height={300} />
        <p className="text-2xl text-white font-mono">{post.title}</p>
        <p className="text-sm text-slate-200 font-mono">{post.date}</p>
      </div>
      <div className="w-200 flex-col ml-7 content-center">
        <>
          {show ? (
            <>
              <p className="w-200 whitespace-normal">
                <span className="text-lg text-white mr-5">
                  {post.authorName}:
                </span>
                <span className="break-words text-base text-slate-400">
                  {post.description.substring(0, 100)}
                </span>
              </p>
            </>
          ) : null}
        </>
      </div>
    </div>
  );
};

export default Post;
