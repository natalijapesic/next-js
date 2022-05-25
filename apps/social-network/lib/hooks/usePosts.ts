import useSWR from 'swr';
import postService from '../api/postService';
import { PostModel } from '../types/post/post';

const usePosts = (page: number, limit: number, authorName?: string) => {
  let queryParams = `?_page=${page}&_limit=${limit}`;
  if (authorName) {
    queryParams = `${queryParams}&authorName=${authorName}`;
  }
  const { data, error } = useSWR<PostModel[], string>(
    [`/posts`, queryParams],
    postService.getPage
  );

  return {
    posts: data,
    isLoading: !error && !data,
    error: error,
  };
};

export default usePosts;
