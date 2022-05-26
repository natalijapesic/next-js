import { ButtonStyle, InputStyle } from '../../../libs/components/types/index';
import Button from '../../../libs/components/Button';
import Input from '../../../libs/components/Input';
import Link from 'next/link';
import { useState } from 'react';
import { useAppDispatch, useAppSelector } from '../lib/stores/hooks';
import { getAuthUser, signOut } from '../features/auth/authenticationSlice';

const Header = () => {
  const [authorName, setAuthorName] = useState('');

  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);

  const onSignOut = () => {
    dispatch(signOut());
  };

  return (
    <div>
      <header className="flex justify-between bg-gray-800">
        <Link href="/">Home</Link>
        <div className="flex">
          <Input
            placeholder="Username"
            type="text"
            onChange={setAuthorName}
            inputStyle={InputStyle.bottom}
            value=""
          />

          <Button
            type="button"
            onClick={console.log}
            buttonStyle={ButtonStyle.search}
            disabled={false}
            message=">"
          />
          <Link href="/about">
            <a className="mx-1.25 py-0.5 px-1 hover:text-cyan-500 hover:text-opacity-100">
              About
            </a>
          </Link>
        </div>

        <div className="flex justify-between text-white ">
          {user && (
            <>
              <Link href="/createPost">
                <a className="mx-1.25 py-0.5 px-1 hover:text-cyan-500 hover:text-opacity-100">
                  Create Post
                </a>
              </Link>
              <Link href="/">
                <a
                  className="mx-1.25 py-0.5 px-1 hover:text-cyan-500 hover:text-opacity-100"
                  onClick={onSignOut}
                >
                  Sign Out
                </a>
              </Link>
            </>
          )}
          {!user && (
            <>
              <Link href="/signIn">
                <a className="mx-1.25 py-0.5 px-1 hover:text-cyan-500 hover:text-opacity-100">
                  Sign In
                </a>
              </Link>
              <Link href="/signUp">
                <a className="mx-1.25 py-0.5 px-1 hover:text-cyan-500 hover:text-opacity-100">
                  Sign Up
                </a>
              </Link>
            </>
          )}
        </div>
      </header>
    </div>
  );
};

export default Header;

// https://frontend-digest.com/useswr-my-new-favorite-react-library-cd87a914a5b1
// https://github.com/reck1ess/next-realworld-example-app/blob/master/lib/api/tag.ts
