import React, { FC } from 'react';
import style from './PostsFilter.module.css';
import { useDispatchAcions } from '../../../hooks/useDispatchAction';

const PostsFilter: FC = () => {
  const { changeFilterValue } = useDispatchAcions();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { value } = e.target;
    changeFilterValue(value);
  };

  return (
    <input
      type="text"
      name="filter"
      className={style.input}
      placeholder="Search..."
      onChange={handleChange}
    />
  );
};

export default PostsFilter;
