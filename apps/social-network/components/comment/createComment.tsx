import commentService from '../../lib/api/commentService';
import { useState } from 'react';
import { CommentModel } from '../../lib/types/comment';
import { useRouter } from 'next/router';

interface IProps {
  postId: number;
}

const CreateComment: React.FC<IProps> = (props: IProps) => {
  const [description, setDescription] = useState('');

  const onComment = () => {
    const request = new CommentModel(description, 'test', 1, props.postId);
    commentService.add(request);
  };

  return (
    <div className="flex">
      <textarea
        className="bg-gray-900" 
        id={props.postId.toString()}
        name="commentContent"
        value={description}
        placeholder="Create comment"
        onChange={(e) => setDescription(e.target.value)}
      />
      <button value={props.postId} onClick={onComment}>
        Comment
      </button>
    </div>
  );
};

export default CreateComment;
