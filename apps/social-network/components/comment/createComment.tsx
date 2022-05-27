import commentService from '@lib/api/commentService';
import { useState } from 'react';
import { CommentModel } from '@lib/types/comment';
import Button from '@libs/components/Button';
import { ButtonStyle } from '@libs/components/types';

interface IProps {
  postId: number | undefined;
  updateComments: (comment: CommentModel) => void;
}

const CreateComment: React.FC<IProps> = (props: IProps) => {
  const [description, setDescription] = useState('');

  const onComment = () => {
    const request = new CommentModel(description, 'test', 1, props.postId);
    commentService.add(request).then((newComment) => {
      props.updateComments(newComment);
    });
  };

  return (
    <div className="flex-col items-center justify-center">
        <textarea
          className="bg-gray-900"
          id={props.postId.toString()}
          name="commentContent"
          value={description}
          placeholder="Create comment"
          onChange={(e) => setDescription(e.target.value)}
        />
        <Button
          value={props.postId}
          onClick={onComment}
          disabled={false}
          buttonStyle={ButtonStyle.dark}
          type="button"
          message={'Comment'}
        />
    </div>
  );
};

export default CreateComment;
