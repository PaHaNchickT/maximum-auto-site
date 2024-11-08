'use server';

import type { TItem } from '@/types/types';

export const dataFetching = async (): Promise<TItem[]> => {
  const output: TItem[] = [];

  const dataCherry = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Chery').then((resp) => {
    return resp.json();
  });
  const dataHaval = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Haval').then((resp) => {
    return resp.json();
  });
  const dataGeely = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Geely').then((resp) => {
    return resp.json();
  });
  const dataExeed = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Exeed').then((resp) => {
    return resp.json();
  });
  const dataOmoda = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Omoda').then((resp) => {
    return resp.json();
  });
  const dataChangan = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Changan').then((resp) => {
    return resp.json();
  });
  const dataJaecoo = await fetch('https://test2.maximum-haval.ru/public/test-task/v1/brand/Jaecoo').then((resp) => {
    return resp.json();
  });

  Promise.all([dataCherry, dataHaval, dataGeely, dataExeed, dataOmoda, dataChangan, dataJaecoo]).then((carsData) => {
    carsData.forEach((carsArray) => {
      output.push(...carsArray);
    });
  });

  return output;
};
