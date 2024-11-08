'use client';

import { Button } from '@nextui-org/react';
import type { ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';

const Error = (): ReactElement => {
  return (
    <div className="flex justify-center items-center text-center">
      <div className="flex flex-col z-[2] gap-5 items-center">
        <div>
          <p className="text-3xl text-center sm:text-4xl">{TEXT_CONTENT.error.errorTitle}</p>
          <p className="text-center text-xl sm:text-2xl">{TEXT_CONTENT.error.errorMsg}</p>
        </div>
        <Button onClick={() => window.history.back()} color="primary">
          {TEXT_CONTENT.error.backBtn}
        </Button>
      </div>
    </div>
  );
};

export default Error;
