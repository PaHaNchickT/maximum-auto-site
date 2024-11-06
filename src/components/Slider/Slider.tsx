import { type ReactElement } from 'react';

import type { TItemImg } from '@/types/types';

const Slider = (props: { imgs: TItemImg[] }): ReactElement => {
  console.log(props.imgs);

  return (
    <div className="flex flex-col justify-between items-center w-[881px]">
      <div className="w-full h-[719px] bg-warning rounded-2xl">Slider</div>
      <div className="w-[560px] h-[4px] bg-success">
        <div className='h-full w-[140px] bg-black'></div>
      </div>
    </div>
  );
};

export default Slider;
