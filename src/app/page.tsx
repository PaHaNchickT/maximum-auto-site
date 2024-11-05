import { type ReactElement } from 'react';

import PageController from '@/components/PageController/PageController';
import { ENDPOINTS } from '@/constants/const-endpoints';
import type { TItem } from '@/types/types';

const dataFetching = async (): Promise<TItem[]> => {
  const output: TItem[] = [];

  ENDPOINTS.forEach(async (endpoint) => {
    const data = await fetch(endpoint).then((resp) => {
      return resp.json();
    });

    output.push(...data);
  });

  return output;
};

const App = async (): Promise<ReactElement> => {
  const data = await dataFetching();

  return <PageController data={data} />;
};

export default App;
