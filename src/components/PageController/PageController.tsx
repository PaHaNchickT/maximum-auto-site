'use client';

import { Spinner } from '@nextui-org/react';
import { useEffect, useState, type ReactElement } from 'react';

import type { TItem } from '@/types/types';

const PageController = (props: { data: TItem[] }): ReactElement => {
  const [mounted, setMounted] = useState(false);

  useEffect(() => setMounted(true), []);

  console.log(props.data);

  return (
    <>
      {mounted ? (
        <main className="flex justify-center">
          <p>Test</p>
        </main>
      ) : (
        <Spinner color="danger" size="lg" />
      )}
    </>
  );
};

export default PageController;
