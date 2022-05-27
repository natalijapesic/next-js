import useComments from '@lib/hooks/useComments';
import { CommentModel } from '@lib/types/comment';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import CreateComment from './createComment';
import Comment from './comment';
import Spinner from '@libs/components/Spinner';

const Comments = () => {
  const router = useRouter();
  const { id } = router.query;
  const { comments, error } = useComments(id);
  const [sharedComments, setSharedComments] = useState<CommentModel[]>([]);

  useEffect(() => {
    setSharedComments(comments);
  }, [comments]);

  const updateComments = (comment: CommentModel): void => {
    const newComments: CommentModel[] = [...sharedComments, comment];
    setSharedComments(newComments);
  };
  let content;
  if (sharedComments) {
    content = sharedComments.map((comment, index) => {
      return <Comment key={index} {...comment} />;
    });
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <Spinner type="gray" />;
  }
  return (
    <div className="flex-col items-center justify-center">
      <CreateComment
        postId={id ? +id : undefined}
        updateComments={updateComments}
      />
      {content}
    </div>
  );
};

export default Comments;
