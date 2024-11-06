import { Button, Image, Skeleton } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import { ArrowIcon } from '@/icons/ArrowIcon';
import type { TItemImg } from '@/types/types';

const Carousel = (props: { imgs: TItemImg[] }): ReactElement => {
  const controlBtns = ['left-[10px] rotate-180', 'right-[10px]'];
  const [currentImg, setCurrentImg] = useState(0);

  console.log(setCurrentImg);
  return (
    <div className="flex flex-col justify-between items-center w-[868px]">
      <div className="w-full h-[712px] rounded-2xl relative overflow-hidden group/card">
        {controlBtns.map((styles, index) => (
          <Button
            key={index}
            className={`w-[60px] h-[60px] bg-[#F4F7F8] absolute z-[2] min-w-0 p-0 top-[calc((100%-60px)/2)] opacity-30 group-hover/card:opacity-100 ${styles}`}
          >
            <ArrowIcon />
          </Button>
        ))}
        <Image
          alt={`promo-${props.imgs[currentImg]._id}`}
          width={1067}
          height={712}
          src={props.imgs[currentImg].url}
          className="absolute translate-1/2 object-cover z-[1]"
        />
        <Skeleton className="absolute w-full h-full z-[0]" />
      </div>
      <div className="w-[560px] h-[4px] bg-success">
        <div className="h-full w-[140px] bg-black"></div>
      </div>
    </div>
  );
};

export default Carousel;