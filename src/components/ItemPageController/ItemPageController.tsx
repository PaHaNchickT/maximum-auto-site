'use client';

import { Spinner } from '@nextui-org/react';
import { notFound } from 'next/navigation';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';
import { itemSelecting } from '@/utils/itemSelecting';
import { queryValidation } from '@/utils/queryValidation';

import Banner from '../Banner/Banner';
import ItemInfoComp from '../ItemInfoComp/ItemInfoComp';

const ItemPageController = (props: { data: TItem[]; opts: string }): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const currentItem = itemSelecting(props.data, { brand: props.opts.split('-')[0], id: props.opts.split('-')[1] });

  if (!queryValidation(props.data, props.opts)) notFound();

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <main className="flex flex-col gap-10 text-[#010C13] md:gap-[80px]">
          <ItemInfoComp data={currentItem} />
          <Banner brandName={`${currentItem.brandName} ${currentItem.modelName}`} />
        </main>
      ) : (
        <Spinner color="primary" size="lg" />
      )}
    </>
  );
};

export default ItemPageController;
