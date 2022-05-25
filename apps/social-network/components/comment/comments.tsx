import useComments from '../../lib/hooks/useComments';
import { useRouter } from 'next/router';
import React from 'react';
import Comment from '../../components/comment/comment';

const Comments = () => {
  const router = useRouter();
  const { id } = router.query;
  const { comments, error } = useComments(id);

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
      {content}
    </div>
  );
};

export default Comments;
