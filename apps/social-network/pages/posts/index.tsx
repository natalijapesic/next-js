import { useState } from 'react';
import Button from '@libs/components/Button';
import Spinner from '@libs/components/Spinner';
import usePosts from '@lib/hooks/usePosts';
import Post from '@components/post';
import { ButtonStyle, InputStyle } from '@libs/components/types';
import { useRouter } from 'next/router';
import Input from '@libs/components/Input';
import { CgSearch } from 'react-icons/cg';
import { NextPage } from 'next';
import { FaSortAmountDown } from 'react-icons/fa';
import { PostModel } from '@lib/types/post/post';

const optionsArray = [6, 12, 18];
const options = optionsArray.map((opt, index) => (
  <option key={index} value={opt}>
    {opt}
  </option>
));

const Posts: NextPage = () => {
  const [page, setPage] = useState(1);
  const [limit, setLimit] = useState(6);
  const [disableNext, setDisableNext] = useState(false);
  const [disablePrev, setDisablePrev] = useState(false);
  const router = useRouter();
  const [search, setSearch] = useState('');
  const [authorName, setAuthorName] = useState('');
  const { posts, error } = usePosts(page, limit, search);
  const [direction, setDirection] = useState(false);

  const nextPage = (): void => {
    if (posts.length === 0) setDisableNext(true);
    else {
      setDisablePrev(false);
      setPage(page + 1);
    }
  };

  const onSearch = (): void => {
    router.push(`./posts?authorName=${authorName}`);
    setSearch(authorName);
  };

  const prevPage = (): void => {
    if (page > 1) {
      setDisableNext(false);
      setPage(page - 1);
    } else {
      setDisablePrev(true);
    }
  };

  const sortByDate = (): void => {
    setDirection(!direction);
    posts.sort((a: PostModel, b: PostModel) => {
      const dateA: number = new Date(a.date).getTime();
      const dateB: number = new Date(b.date).getTime();
      return direction ? dateA - dateB : dateB - dateA;
    });
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
    <>
      <div className="flex">
        <h1 className="font-bold text-3xl ml-[15%] my-5 basis-2/12"> Recent: </h1>
      </div>

      <div className="flex my-5">
        <div className="basis-3/12" />
        <div className="flex basis-2/12">
          <Input
            placeholder="Username"
            type="text"
            onChange={setAuthorName}
            inputStyle={InputStyle.bottom}
            value={authorName}
          />
          <button className="-ml-6 mb-2" onClick={onSearch}>
            <CgSearch size={22} />
          </button>
        </div>
        <div className="basis-4/12" />
        <select
          className="flex-none bg-transparent  ml-2 focus:bg-gray-800"
          name="pageLimit"
          id="pageLimit"
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          {options}
        </select>
        <button className="ml-5" onClick={sortByDate}>
          <FaSortAmountDown />
        </button>
        <div className="basis-3/12" />
      </div>

      <div className="grid place-items-center gap-y-6">
        <div className="grid gap-x-10 gap-y-6 grid-cols-1 tablet:grid-cols-2 laptop:grid-cols-3 desktop:grid-cols-3">
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
    </>
  );
};

export default Posts;
