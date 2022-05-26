import Input from '../../../../libs/components/Input';
import Button from '../../../../libs/components/Button';
import Spinner from '../../../../libs/components/Spinner';
import { ButtonStyle, InputStyle } from '../../../../libs/components/types';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';
import { getAuthStatus, signIn } from '../../features/auth/authenticationSlice';
import { useAppDispatch, useAppSelector } from '../../lib/stores/hooks';

const SignIn: React.FC = () => {
  const dispatch = useAppDispatch();
  const signInStatus = useAppSelector(getAuthStatus);

  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [isDisabled, setIsDisabled] = useState(true);
  const router = useRouter();

  useEffect(() => {
    validate();
  }, [email, password]);

  useEffect(() => {
    if (signInStatus === 'succeeded') router.push('/posts');
  }, [dispatch, signInStatus, router]);

  const validate = () => {
    if (password.length < 4) {
      setIsDisabled(true);
      return;
    } else {
      setIsDisabled(false);
    }
    if (email.length === 0) {
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

  let content;

  if (signInStatus === 'failed') {
    content = (
      <p className="border border-red-300">
        You have entered your password or email incorrenctly..
        <br /> Please check your input and try again.
      </p>
    );
  } else if (signInStatus === 'loading') content = <Spinner type="gray" />;

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (signInStatus === 'idle' || signInStatus === 'failed') {
      const request = {
        email,
        password,
      };

      dispatch(signIn(request));
    }
  };

  return (
    <div className="flex justify-center text-center pt-20">
      <form onSubmit={onSubmit}>
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
              message="SignIn"
              disabled={isDisabled}
            />
          ) : (
            <Button
              type="submit"
              buttonStyle={ButtonStyle.light}
              message="SignIn"
              disabled={isDisabled}
            />
          )}
        </div>
      </form>
    </div>
  );
};

export default SignIn;
