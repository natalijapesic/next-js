import useComments from '../../lib/hooks/useComments';
import { useRouter } from 'next/router';
import React, { useState } from 'react';
import Comment from '../../components/comment/comment';
import { CommentModel } from '../../lib/types/comment';
import CreateComment from './createComment';

const Comments = () => {
  const router = useRouter();
  const { id } = router.query;
  const { comments, error } = useComments(id);
  const [sharedComments, setSharedComments] = useState<CommentModel[]>(comments);


  let content;
  if (comments) {
    content = comments.map((comment, index) => {
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
      {console.log(id)}
      <CreateComment postId={id ? +id : undefined} />
      {content}
      </>
    </div>
  );
};

export default Comments;
