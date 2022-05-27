import { GetStaticProps } from 'next';
import React from 'react';
import Image from 'next/image';
import Comments from '@components/comment/comments';
import { PostModel } from '@lib/types/post/post';
import postService from '@lib/api/postService';

const PostInfo = ({ post }: { post: PostModel }) => {
  return (
    <div className="flex flex-col items-center">
      <h1 >{post.title}</h1>
      <Image src={post.image} alt="Post image" width={300} height={300} />
      <Comments></Comments>
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
