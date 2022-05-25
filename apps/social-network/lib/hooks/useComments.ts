import useSWR from 'swr';
import commentService from '../api/commentService';
import { CommentModel } from '../types/comment';

const useComments = (postId) => {
  const queryParams = `?postId=${postId}`;
  const { data, error } = useSWR<CommentModel[], string>(
    [`/comments`, queryParams],
    commentService.getByPostId
  );

  return {
    comments: data,
    isLoading: !error && !data,
    error: error,
  };
};

export default useComments;
