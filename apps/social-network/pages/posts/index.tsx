import { useState } from 'react';
import Button from '@libs/components/Button';
import Spinner from '@libs/components/Spinner';
import usePosts from '@lib/hooks/usePosts';
import Post from '@components/post';
import { ButtonStyle, InputStyle } from '@libs/components/types';
import { useRouter } from 'next/router';
import Input from '@libs/components/Input';
import { CgSearch } from 'react-icons/cg';

const optionsArray = [5, 10, 15];
const options = optionsArray.map((opt, index) => (
  <option key={index} value={opt}>
    {opt}
  </option>
));

const Posts = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(5);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [authorName, setAuthorName] = useState('');
  const { posts, error } = usePosts(page, limit, search);

  const nextPage = () => {
    if (posts.length === 0) setDisableNext(true);
    else {
      setDisablePrev(false);
      setPage(page + 1);
    }
  };

  const onSearch = () => {
    router.push(`./posts?authorName=${authorName}`);
    setSearch(authorName);
  };

  const prevPage = () => {
    if (page > 1) {
      setDisableNext(false);
      setPage(page - 1);
    } else {
      setDisablePrev(true);
    }
  };

  let content;
  if (posts) {
    content = posts.map((post, index) => {
      return <Post key={index} {...post} />;
    });
  } else if (error) {
    content = <div>{error}</div>;
  } else {
    content = <Spinner type="gray" />;
  }

  return (
    <div className="grid place-items-center  gap-x-10 gap-y-6 grid-cols-1">
      <div className="flex flex-col justify-between">
        <h1> Recent </h1>
        <div className="flex">
          <div className="flex justify-between">
            <Input
              placeholder="Username"
              type="text"
              onChange={setAuthorName}
              inputStyle={InputStyle.bottom}
              value={authorName}
            />
            <button className="ml-2" onClick={onSearch}>
              <CgSearch />
            </button>
          </div>
          <select
            className="flex bg-gray-800 px-5 ml-2 focus:cyan-500"
            name="pageLimit"
            id="pageLimit"
            onChange={(e) => setLimit(parseInt(e.target.value))}
          >
            {options}
          </select>
        </div>
      </div>

      <div className="grid place-items-center gap-x-10 gap-y-6 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
        {content}
      </div>
      <div className="flex justify-around">
        <Button
          onClick={prevPage}
          buttonStyle={ButtonStyle.prev}
          type="button"
          value="prev"
          message="prev"
          disabled={disablePrev}
        />
        <Button
          onClick={nextPage}
          buttonStyle={ButtonStyle.next}
          type="button"
          value="next"
          message="next"
          disabled={disableNext}
        />
      </div>
    </div>
  );
};

export default Posts;
