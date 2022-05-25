import {
  ButtonStyle,
  InputStyle,
} from '../../../libs/components/types/index';
import Button from '../../../libs/components/Button';
import Input from '../../../libs/components/Input';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
  const [authorName, setAuthorName] = useState('');
  // const { posts, error } = usePosts(1, 5, authorName);

  return (
    <div>
      <header className="flex justify-between bg-gray-800">
        <div className="flex">
          <Link href="/">Home</Link>
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
      </header>
    </div>
  );
};

export default Header;

// https://frontend-digest.com/useswr-my-new-favorite-react-library-cd87a914a5b1
// https://github.com/reck1ess/next-realworld-example-app/blob/master/lib/api/tag.ts
