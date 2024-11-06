import { type ReactElement } from 'react';

import ItemPageController from '@/components/ItemPageController/ItemPageController';
import { dataFetching } from '@/services/dataFerching';

const CarPage = async (useSearchParams: { params: { page: string } }): Promise<ReactElement> => {
  const data = await dataFetching();

  return <ItemPageController data={data} opts={useSearchParams.params.page} />;
};

export default CarPage;
