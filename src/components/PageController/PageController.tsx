'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';
import { itemsFiltering } from '@/utils/itemsFiltering';

import FilterComp from '../FilterComp/FilterComp';
import ViewSection from '../ViewSection/ViewSection';

const PageController = (props: { data: TItem[]; query: string }): ReactElement => {
  const [mounted, setMounted] = useState(false);

  const decodedQuery = props.query
    ? JSON.parse(decodeURIComponent(escape(atob(props.query))))
    : { brand: [], volume: [], equipment: [] };

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <main className="flex flex-col gap-[60px] px-[219px] pt-[100px] pb-[160px] text-[#010C13]">
          <p className="text-[40px]">{`Автомобили ${decodedQuery.brand.length ? decodedQuery.brand.join(', ') : ''} в СПб`}</p>
          <div className="flex justify-between">
            <FilterComp opts={decodedQuery} />
            <ViewSection data={itemsFiltering(props.data, decodedQuery)} />
          </div>
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default PageController;
