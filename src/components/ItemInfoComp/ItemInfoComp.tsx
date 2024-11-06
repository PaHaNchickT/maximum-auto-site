import { type ReactElement } from 'react';

import type { TItem } from '@/types/types';

const ItemInfoComp = (props: { data: TItem }): ReactElement => {
  console.log(props.data);

  return <p>Car info</p>;
};

export default ItemInfoComp;
