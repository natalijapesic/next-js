import { getAuthUser, signOut } from '@features/auth/authenticationSlice';
import { useAppDispatch, useAppSelector } from '@lib/stores/hooks';
import CustomLink from '@libs/components/CustomLink';
import { LinkStyle } from '@libs/components/types';

const Header = () => {
  const dispatch = useAppDispatch();
  const user = useAppSelector(getAuthUser);

  const onSignOut = () => {
    dispatch(signOut());
  };

  return (
    <header className="flex p-4 justify-around bg-gray-800">
      <CustomLink href="/posts" linkStyle={LinkStyle.bold} message="Home" />
      <div className='flex'>
      <CustomLink href="/about" linkStyle={LinkStyle.cyan} message="About" />

      </div>
      <div className="flex items-end text-white ">
        {user && (
          <>
            <CustomLink
              href="/posts"
              linkStyle={LinkStyle.cyan}
              message={user.username}
            ></CustomLink>
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
