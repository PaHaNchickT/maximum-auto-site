'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import { useResize } from '@/hooks/useResize';
import type { TItem } from '@/types/types';
import { itemsFiltering } from '@/utils/itemsFiltering';

import FilterComp from '../FilterComp/FilterComp';
import ViewSection from '../ViewSection/ViewSection';

const MainPageController = (props: { data: TItem[]; query: string }): ReactElement => {
  const windowWidth = useResize();
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
        <main className="flex flex-col px-5 pt-[26px] pb-[160px] text-[#010C13] md:pt-[93px] md:px-[116px] 2xl:px-[216px] 2xl:gap-[60px]">
          <h1 className="text-[20px] font-black leading-snug tracking-[0.02em] md:tracking-[0.035em] md:text-[40px]">{`Автомобили ${decodedQuery.brand.length ? decodedQuery.brand.join(', ') : ''} в СПб`}</h1>
          <div className="flex justify-between items-center flex-col 2xl:flex-row">
            <FilterComp opts={decodedQuery} setLoaded={setLoaded} />
            <section className="flex flex-wrap gap-[18px] justify-center w-full md:gap-[42px] 2xl:justify-between 2xl:w-[440px] 3xl:justify-start 3xl:w-[922px]">
              {loaded ? (
                <ViewSection data={itemsFiltering(props.data, decodedQuery, windowWidth)} />
              ) : (
                <div className="w-full min-h-[400px] flex justify-center items-center 2xl:min-h-0">
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
