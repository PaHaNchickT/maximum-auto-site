'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';

import FilterComp from '../FilterComp/FilterComp';
import ViewSection from '../ViewSection/ViewSection';

const PageController = (props: { data: TItem[] }): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  console.log(props.data);

  return (
    <>
      {mounted ? (
        <main className="flex flex-col gap-[60px] px-[219px] pt-[100px] pb-[160px] bg-warning">
          <p>Автомобили Chery в СПб</p>
          <div className="flex justify-between">
            <FilterComp />
            <ViewSection />
          </div>
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default PageController;
