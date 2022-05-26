import Post from '../../components/post';
import { useState } from 'react';
import Button from '../../../../libs/components/Button';
import { ButtonStyle } from '../../../../libs/components/types';
import usePosts from '../../lib/hooks/usePosts';
import Spinner from '../../../../libs/components/Spinner';

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

  const { posts, error } = usePosts(page, limit);
  const nextPage = () => {
    if (posts.length === 0) setDisableNext(true);
    else {
      setDisablePrev(false);
      setPage(page + 1);
    }
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
    <div className="flex-col content-center">
      <div className="flex justify-center">
        <label className="mt-2" htmlFor="pageLimit">
          Choose a page limit:
        </label>
        <select
          className="flex bg-gray-800 px-5 ml-2 focus:cyan-500"
          name="pageLimit"
          id="pageLimit"
          onChange={(e) => setLimit(parseInt(e.target.value))}
        >
          {options}
        </select>
      </div>

      <div className="flex flex-wrap justify-around">{content}</div>
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
