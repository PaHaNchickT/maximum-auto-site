'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';
import { itemSelecting } from '@/utils/itemSelecting';

import Banner from '../Banner/Banner';
import ItemInfoComp from '../ItemInfoComp/ItemInfoComp';

const ItemPageController = (props: { data: TItem[]; opts: string }): ReactElement => {
  const [mounted, setMounted] = useState(false);
  const currentItem = itemSelecting(props.data, { brand: props.opts.split('-')[0], id: props.opts.split('-')[1] });

  useEffect(() => setMounted(true), []);

  return (
    <>
      {mounted ? (
        <main className="flex flex-col gap-[60px] px-[219px] pt-[100px] pb-[160px] text-[#010C13]">
          <ItemInfoComp data={currentItem} />
          <Banner brandName={currentItem.brandName} />
        </main>
      ) : (
        <Spinner color="primary" size="lg" />
      )}
    </>
  );
};

export default ItemPageController;
