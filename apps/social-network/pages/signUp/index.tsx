import Input from '../../../../libs/components/Input';
import Button from '../../../../libs/components/Button';
import Spinner from '../../../../libs/components/Spinner';
import { ButtonStyle, InputStyle } from '../../../../libs/components/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuthStatus, signUp } from '../../features/auth/authenticationSlice';
import { useAppDispatch, useAppSelector } from '../../lib/stores/hooks';

const SignUp: React.FC = () => {
  const dispatch = useAppDispatch();
  const router = useRouter();
  const signUpStatus = useAppSelector(getAuthStatus);

  const [username, setUsername] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);

  useEffect(() => {
    validate();
  }, [password, username, email]);

  useEffect(() => {
    if (signUpStatus === 'succeeded') router.push('/posts');
  }, [dispatch, signUpStatus]);

  const validate = () => {
    if (password.length < 4) {
      setIsDisabled(true);
      return;
    } else {
      setIsDisabled(false);
    }
    if (email.length === 0 || username.length === 0) {
      setIsDisabled(true);
      return;
    }
    if (
      email.indexOf('@') === -1 ||
      (email.indexOf('.com') === -1 && email.indexOf('.rs') === -1)
    ) {
      setIsDisabled(true);
      return;
    }
  };

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signUpStatus === 'idle' || signUpStatus === 'failed') {
      const request = {
        username,
        email,
        password,
      };

      dispatch(signUp(request));
    }
  };

  let content;
  if (signUpStatus === 'failed') {
    console.log(signUpStatus);
    content = (
      <p className="border border-red-300">
        User already exist.
        <br /> Please check your input and try again.
      </p>
    );
  } else if (signUpStatus === 'loading') content = <Spinner type="gray" />;

  return (
    <div className="flex justify-center text-center pt-20">
      <form onSubmit={onSubmit}>
        <Input
          inputStyle={InputStyle.rounded}
          value={username}
          type="text"
          placeholder="Username"
          onChange={setUsername}
        ></Input>
        <Input
          inputStyle={InputStyle.rounded}
          value={email}
          type="text"
          placeholder="Email"
          onChange={setEmail}
        ></Input>
        <Input
          inputStyle={InputStyle.rounded}
          value={password}
          type="password"
          placeholder="Password"
          onChange={setPassword}
        ></Input>
        {content}
        <div>
          {isDisabled ? (
            <Button
              type="submit"
              buttonStyle={ButtonStyle.disable}
              message="SignUp"
              disabled={isDisabled}
            />
          ) : (
            <Button
              type="submit"
              buttonStyle={ButtonStyle.light}
              message="SignUp"
              disabled={isDisabled}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SignUp;
