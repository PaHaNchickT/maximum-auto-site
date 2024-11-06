import type { TItem } from '@/types/types';

export const itemSelecting = (items: TItem[], opts: { brand: string; id: string }): TItem => {
  let output;

  items.forEach((item) => {
    if (item.brandName === opts.brand && item.car_id === opts.id) output = item;
  });

  return output as unknown as TItem;
};

