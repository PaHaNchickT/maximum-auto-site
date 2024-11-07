'use server';

import { ENDPOINTS } from '@/constants/const-endpoints';
import type { TItem } from '@/types/types';

export const dataFetching = async (): Promise<TItem[]> => {
  const output: TItem[] = [];

  ENDPOINTS.forEach(async (endpoint) => {
    const data = await fetch(endpoint).then((resp) => {
      return resp.json();
    });

    output.push(...data);
  });

  return output;
};

