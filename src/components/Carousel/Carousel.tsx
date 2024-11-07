import { Button, Image, Skeleton } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import { useResize } from '@/hooks/useResize';
import { ArrowIcon } from '@/icons/ArrowIcon';
import type { TItemImg } from '@/types/types';

const Carousel = (props: { imgs: TItemImg[] }): ReactElement => {
  const windowWidth = useResize();
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
    <div className="flex flex-col justify-between gap-10 items-center w-full lg:w-[868px]">
      <div className="w-[260px] h-[163px] rounded-2xl relative overflow-hidden group/card md:h-[400px] md:w-[600px] 2xl:h-[712px] 2xl:w-full">
        {controlBtns.map((button, index) => (
          <Button
            key={index}
            className={`w-[30px] h-[30px] bg-[#F4F7F8] absolute z-[2] min-w-0 p-0 top-[calc((100%-30px)/2)] opacity-30 group-hover/card:opacity-100 md:w-[60px] md:h-[60px] md:top-[calc((100%-60px)/2)] ${button.styles}`}
            onPress={button.callback}
          >
            <ArrowIcon />
          </Button>
        ))}
        <Image
          alt={`promo-${props.imgs[currentImg]._id}`}
          width={windowWidth >= 1440 ? 1067 : windowWidth >= 768 ? 600 : 260}
          height={windowWidth >= 1440 ? 712 : windowWidth >= 768 ? 400 : 163}
          src={props.imgs[currentImg].url}
          className="absolute translate-1/2 object-cover z-[1]"
        />
        <Skeleton className="absolute w-full h-full z-[0]" />
      </div>
      <div className="w-[60%] h-[4px] bg-[#F4F7F8] md:w-[560px]">
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
