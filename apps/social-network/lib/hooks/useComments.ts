import commentService from '@lib/api/commentService';
import { CommentModel } from '@lib/types/comment';
import useSWR from 'swr';

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
