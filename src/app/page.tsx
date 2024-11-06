import { type ReactElement } from 'react';

import PageController from '@/components/PageController/PageController';
import { dataFetching } from '@/services/dataFerching';

const App = async (useSearchParams: { searchParams: { filter: string } }): Promise<ReactElement> => {
  const data = await dataFetching();

  return <PageController data={data} query={useSearchParams.searchParams.filter} />;
};

export default App;
