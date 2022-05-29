import { GetStaticProps, NextPage } from 'next';
import React from 'react';
import Image from 'next/image';
import Comments from '@components/comment/comments';
import { PostModel } from '@lib/types/post/post';
import postService from '@lib/api/postService';

const PostInfo: NextPage = ({ post }: { post: PostModel }) => {
  return (
    <div className="grid grid-col-1 place-items-center">
      <h1 className="font-bold text-4xl w-3/5 my-12 ">
        {post.title}
      </h1>
      <Image
        className="rounded-lg mb-5"
        src={post.image}
        alt="Post image"
        width={300}
        height={300}
      />
      <Comments></Comments>
      <p className="break-all w-1/2"> {post.description} </p>
    </div>
  );
};

export async function getStaticPaths() {
  const data: PostModel[] = await postService.get();
  const paths = data.map((post) => {
    return {
      params: { id: post.id.toString() },
    };
  });
  return {
    paths,
    fallback: false,
  };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data: PostModel = await postService.getOne(
    params.id ? +params.id : undefined
  );
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { post: data },
  };
};

export default PostInfo;
