import { Button, Image, Skeleton } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import { ArrowIcon } from '@/icons/ArrowIcon';
import type { TItemImg } from '@/types/types';

const Carousel = (props: { imgs: TItemImg[] }): ReactElement => {
  const [currentImg, setCurrentImg] = useState(0);

  const controlBtns = [
    {
      styles: 'left-[10px] rotate-180',
      callback: (): void => {
        if (currentImg) setCurrentImg((value) => value - 1);
      },
    },
    {
      styles: 'right-[10px]',
      callback: (): void => {
        if (currentImg < props.imgs.length - 1) setCurrentImg((value) => value + 1);
      },
    },
  ];

  return (
    <div className="flex flex-col justify-between gap-10 items-center w-[868px] 3xl:gap-0">
      <div className="w-full h-[712px] rounded-2xl relative overflow-hidden group/card">
        {controlBtns.map((button, index) => (
          <Button
            key={index}
            className={`w-[60px] h-[60px] bg-[#F4F7F8] absolute z-[2] min-w-0 p-0 top-[calc((100%-60px)/2)] opacity-30 group-hover/card:opacity-100 ${button.styles}`}
            onPress={button.callback}
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
      <div className="w-[560px] h-[4px] bg-[#F4F7F8]">
        <div
          style={{
            width: `calc(100% / ${props.imgs.length})`,
            left: `calc((100% / ${props.imgs.length}) * ${currentImg})`,
          }}
          className="transition-all relative h-full bg-black"
        ></div>
      </div>
    </div>
  );
};

export default Carousel;
