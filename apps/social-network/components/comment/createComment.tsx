import commentService from '@lib/api/commentService';
import { useState } from 'react';
import { CommentModel } from '@lib/types/comment';
import Button from '@libs/components/Button';
import { ButtonStyle, TextareaStyle } from '@libs/components/types';
import { useAppSelector } from '@lib/stores/hooks';
import { getAuthUser } from '@features/auth/authenticationSlice';
import Textarea from '@libs/components/Textarea';

interface IProps {
  postId: number | undefined;
  updateComments: (comment: CommentModel) => void;
}

const CreateComment = (props: IProps) => {
  const [description, setDescription] = useState('');
  const user = useAppSelector(getAuthUser);

  const onComment = () => {
    const request = new CommentModel(
      description,
      user.username,
      user.id,
      props.postId
    );
    commentService.add(request).then((newComment) => {
      props.updateComments(newComment);
    });
  };

  return (
    <div className="grid grid-col-1 place-items-center">
      <Textarea
        textareaStyle={TextareaStyle.transparent}
        value={description}
        placeholder="Create comment"
        onChange={setDescription}
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
