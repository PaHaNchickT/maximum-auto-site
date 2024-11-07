import type { TItem } from '@/types/types';

export const queryValidation = (items: TItem[], opts: string): boolean => {
  let valide = false;

  if (opts.split('-').length !== 2) return valide;

  const parsedQuery = {
    brand: opts.split('-')[0],
    id: opts.split('-')[1],
  };

  items.forEach((item) => {
    if (item.brandName === parsedQuery.brand && item.car_id === parsedQuery.id) valide = true;
  });

  return valide;
};
