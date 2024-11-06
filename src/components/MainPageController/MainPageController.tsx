'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';
import { itemsFiltering } from '@/utils/itemsFiltering';

import FilterComp from '../FilterComp/FilterComp';
import ViewSection from '../ViewSection/ViewSection';

const MainPageController = (props: { data: TItem[]; query: string }): ReactElement => {
  const [loaded, setLoaded] = useState(true);
  const [mounted, setMounted] = useState(false);

  const decodedQuery = props.query
    ? JSON.parse(decodeURIComponent(escape(atob(props.query))))
    : { brand: [], volume: [], equipment: [] };

  useEffect(() => setMounted(true), []);

  useEffect(() => {
    setLoaded(true);
  }, [props.data]);

  return (
    <>
      {mounted ? (
        <main className="flex flex-col gap-[60px] px-[219px] pt-[100px] pb-[160px] text-[#010C13]">
          <h1 className="text-[40px]">{`Автомобили ${decodedQuery.brand.length ? decodedQuery.brand.join(', ') : ''} в СПб`}</h1>
          <div className="flex justify-between">
            <FilterComp opts={decodedQuery} setLoaded={setLoaded} />
            <section className="flex flex-wrap gap-[42px] w-[922px]">
              {loaded ? (
                <ViewSection data={itemsFiltering(props.data, decodedQuery)} />
              ) : (
                <div className="w-full flex justify-center items-center">
                  <Spinner color="primary" size="lg" />
                </div>
              )}
            </section>
          </div>
        </main>
      ) : (
        <Spinner color="primary" size="lg" />
      )}
    </>
  );
};

export default MainPageController;
