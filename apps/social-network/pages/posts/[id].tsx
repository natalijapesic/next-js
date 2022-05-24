import { PostModel } from '../../lib/types/post/post';
import { GetStaticProps } from 'next';
import React from 'react';
import postService from '../../lib/api/postService';

const PostInfo = ({ post }: { post: PostModel }) => {
  return <div>{post.id}</div>;
};

export async function getStaticPaths() {
    return {
        paths: [
            {
                params: { id: '14' }
            },
            {
                params: { id: '15' }
            },
            {
                params: { id: '16' }
            }
        ],
        fallback: false,
    };
}

export const getStaticProps: GetStaticProps = async (context) => {
  const { params } = context;
  const data: PostModel = await postService.getOne(params.id);
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