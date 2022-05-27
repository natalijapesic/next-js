import { getAuthUser, signOut } from '@features/auth/authenticationSlice';
import { useAppDispatch, useAppSelector } from '@lib/stores/hooks';
import CustomLink from '@libs/components/CustomLink';
import { LinkStyle } from '@libs/components/types';
import { FaSortDown } from 'react-icons/fa';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);

  const onSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header className="flex items-center p-4 justify-around bg-gray-800">
      <CustomLink href="/posts" linkStyle={LinkStyle.bold} message="Home" />
      <div className="flex">
        <CustomLink href="/about" linkStyle={LinkStyle.cyan} message="About" />
      </div>
      <div className="flex  text-white ">
        {user && (
          <>
            <CustomLink
              href="/posts"
              linkStyle={LinkStyle.cyan}
              message={
                user.username.charAt(0).toUpperCase() + user.username.slice(1)
              }
            ></CustomLink>
            <button
              id="dropdownDefault"
              data-dropdown-toggle="dropdown"
              className="mb-2"
              onClick={console.log}
            >
              <FaSortDown />
            </button>
            <div
              id="dropdown"
              className='class="z-10 hidden bg-white divide-y divide-gray-100 rounded shadow w-44 dark:bg-gray-700'
            >
              <CustomLink
                href="/createPost"
                linkStyle={LinkStyle.cyan}
                message="Create Post"
              ></CustomLink>
              <CustomLink
                href="/posts"
                linkStyle={LinkStyle.cyan}
                message="Sign Out"
                onClick={onSignOut}
              ></CustomLink>
            </div>
          </>
        )}
        {!user && (
          <>
            <CustomLink
              href="/signIn"
              linkStyle={LinkStyle.cyan}
              message="Sign In"
            ></CustomLink>
            <CustomLink
              href="/signUp"
              linkStyle={LinkStyle.cyan}
              message="Sign Up"
            ></CustomLink>
          </>
        )}
      </div>
    </header>
  );
};

export default Header;
