import { useEffect, useState } from 'react';
import { ButtonStyle, InputStyle, TextareaStyle } from '@libs/components/types/index';
import postService from '@lib/api/postService';
import { useRouter } from 'next/router';
import { PostModel } from '@lib/types/post/post';
import Input from '@libs/components/Input';
import Button from '@libs/components/Button';
import Textarea from '@libs/components/Textarea';
import { NextPage } from 'next';
import { useAppSelector } from '@lib/stores/hooks';
import { getAuthUser } from '@features/auth/authenticationSlice';
import Spinner from '@libs/components/Spinner';

const CreatePost: NextPage = () => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [image, setImage] = useState('');
  const router = useRouter();
  const user = useAppSelector(getAuthUser);

  useEffect(() => {
    user ? router.push('/createPost') : router.push('/signIn');
  }, []);

  const onSave = () => {
    const request = new PostModel(
      title,
      user.username,
      image,
      description,
      user.id
    );
    postService.add(request).then((result) => {
      if (result) router.push('/posts');
    });
  };

  return (
    <>
      {!user && <Spinner type="gray" />}
      {user && (
        <div className="flex justify-center text-center pt-20">
          <section className="flex-col content-center pt-20">
            <h2 className="mb-2 text-xl text-white font-mono">
              Create new post
            </h2>
            <Input
              inputStyle={InputStyle.rounded}
              value={title}
              onChange={setTitle}
              placeholder="Input post title"
              type="text"
            />
            <Textarea
              textareaStyle={TextareaStyle.basic}
              onChange={setDescription}
              value={description}
              placeholder="What's on your mind.."
            />
            <Input
              inputStyle={InputStyle.rounded}
              value={image}
              onChange={setImage}
              placeholder="Input image url"
              type="url"
            />
            <Button
              buttonStyle={ButtonStyle.light}
              type="button"
              message="Save Post"
              disabled={false}
              onClick={onSave}
            />
          </section>
        </div>
      )}
    </>
  );
};
export default CreatePost;
