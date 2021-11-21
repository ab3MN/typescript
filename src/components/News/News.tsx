import React, { FC, useEffect } from 'react';
import NewsForm from './NewsForm/NewsForm';

import { useTypedSelector } from '../../hooks/useTypedSelector';
import NewsList from './NewsList/NewsList';
import { useDispatchAcions } from '../../hooks/useDispatchAction';

const News: FC = () => {
  const { news } = useTypedSelector(state => state.news);
  const { fetchNews } = useDispatchAcions();

  useEffect(() => {
    fetchNews();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <NewsForm />
      {news ? <NewsList news={news} /> : <h1>No news for your request</h1>}
    </main>
  );
};

export default News;
