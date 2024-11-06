import { Image } from '@nextui-org/react';
import { useState, type ReactElement } from 'react';

import type { TItemImg } from '@/types/types';

const Slider = (props: { imgs: TItemImg[] }): ReactElement => {
  const [currentImg, setCurrentImg] = useState(0);
  console.log(setCurrentImg);

  return (
    <div className="flex flex-col justify-between items-center w-[868px]">
      <div className="w-full h-[712px] rounded-2xl bg-warning">
        <Image alt={props.imgs[currentImg]._id} width={20} height={20} src={props.imgs[currentImg].url} />
      </div>
      <div className="w-[560px] h-[4px] bg-success">
        <div className="h-full w-[140px] bg-black"></div>
      </div>
    </div>
  );
};

export default Slider;
