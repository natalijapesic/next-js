import useComments from '../../lib/hooks/useComments';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import Comment from '../../components/comment/comment';
import { CommentModel } from '../../lib/types/comment';
import CreateComment from './createComment';

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
    content = <div>Loading..</div>;
  }
  return (
    <div>
      <>
        <CreateComment
          postId={id ? +id : undefined}
          updateComments={updateComments}
        />
        {content}
      </>
    </div>
  );
};

export default Comments;
