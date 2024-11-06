import { Image, Skeleton } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import type { TItemImg } from '@/types/types';

const Carousel = (props: { imgs: TItemImg[] }): ReactElement => {
  const [currentImg, setCurrentImg] = useState(0);
  console.log(setCurrentImg);

  return (
    <div className="flex flex-col justify-between items-center w-[868px]">
      <div className="w-full h-[712px] rounded-2xl relative overflow-hidden">
        <Image
          alt={props.imgs[currentImg]._id}
          width={1067}
          height={712}
          src={props.imgs[currentImg].url}
          className="absolute translate-1/2 object-cover"
        />
        <Skeleton className="absolute w-full h-full" />
      </div>
      <div className="w-[560px] h-[4px] bg-success">
        <div className="h-full w-[140px] bg-black"></div>
      </div>
    </div>
  );
};

export default Carousel;

// 868 x 579

// 1067 x 712
