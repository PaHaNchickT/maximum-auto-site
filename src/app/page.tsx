import { type ReactElement } from 'react';

import MainPageController from '@/components/MainPageController/MainPageController';
import { dataFetching } from '@/services/dataFetching';

const App = async (useSearchParams: { searchParams: { filter: string } }): Promise<ReactElement> => {
  const data = await dataFetching();

  return <MainPageController data={data} query={useSearchParams.searchParams.filter} />;
};
rzdxrxdrdr
export default App;
