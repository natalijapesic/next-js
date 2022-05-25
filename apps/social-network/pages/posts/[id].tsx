import { PostModel } from '../../lib/types/post/post';
import { GetStaticProps } from 'next';
import React from 'react';
import postService from '../../lib/api/postService';
import Comments from '../../components/comment/comments';
import CreateComment from '../../components/comment/createComment';

const PostInfo = ({ post }: { post: PostModel }) => {

  return (
    <div>
      <>
      <CreateComment postId={post.id}/>
      <Comments></Comments>
      </>
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
