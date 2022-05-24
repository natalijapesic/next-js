import { PostModel } from '../../lib/types/post';
import postService from '../../lib/api/postService';
import { GetServerSideProps } from 'next';
import Post from '../../components/post';

export const getServerSideProps: GetServerSideProps = async () => {
  const data: PostModel[] = await postService.get();
  if (!data) {
    return {
      notFound: true,
    };
  }
  return {
    props: { posts: data }, 
  };
};

const Posts = ({ posts }: { posts: PostModel[] }) => {
  const content = posts.map((post, index) => {
    return <Post key={index} {...post} />;
  });
  return <div className="text-blue-600">{content}</div>;
};

export default Posts;
