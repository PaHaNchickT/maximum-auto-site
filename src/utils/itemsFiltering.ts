import type { TItem } from '@/types/types';

export const itemsFiltering = (
  items: TItem[],
  opts: { brand: string[]; volume: string[]; equipment: string[] },
): TItem[] => {
  const output: TItem[] = [];

  items.forEach((item) => {
    let criteria = true;

    if (opts.brand.length && !opts.brand.includes(item.brandName)) criteria = false;
    if (opts.volume.length && !opts.volume.includes(`${item.modificationName.split('л. ')[0]}л.`)) criteria = false;
    if (opts.equipment.length && !opts.equipment.includes(item.Complectation)) criteria = false;

    if (criteria) output.push(item);
  });

  return output;
};

