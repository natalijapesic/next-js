import { getAuthUser, signOut } from '@features/auth/authenticationSlice';
import { useAppDispatch, useAppSelector } from '@lib/stores/hooks';
import CustomLink from '@libs/components/CustomLink';
import { LinkStyle } from '@libs/components/types';
import { FaSortDown, FaSignOutAlt } from 'react-icons/fa';

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

            <div>
              <div className="group relative">
                <button className="mb-2">
                  <FaSortDown />
                </button>
                <nav className="border-4 bg-gray-800 invisible border-gray-600 rounded w-60 absolute right-0 top-full transition-all opacity-0 group-focus-within:visible group-focus-within:opacity-100 group-focus-within:translate-y-1">
                  <ul className="py-1">
                    <li className="block pl-4 py-2 hover:bg-gray-700">
                      <CustomLink
                        href="/createPost"
                        linkStyle={LinkStyle.cyan}
                        message="Create Post"
                      ></CustomLink>
                    </li>
                    <li className="flex items-center px-4 py-2 hover:bg-gray-700">
                      <FaSignOutAlt />
                      <CustomLink
                        href="/posts"
                        linkStyle={LinkStyle.cyan}
                        message="Sign Out"
                        onClick={onSignOut}
                      ></CustomLink>
                    </li>
                  </ul>
                </nav>
              </div>
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
