import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { Percent } from '@/icons/Percent';

const Banner = (props: { brandName: string }): ReactElement => {
  return (
    <div className="h-[836px] bg-gradient-to-r from-[#00A8CD] to-[#047DBF] pb-[64px] pt-[152px] pl-[216px] text-white">
      <div className="flex flex-col gap-[60px] items-start">
        <p className="font-black text-[40px]">{`Кредит на новый ${props.brandName}`}</p>
        <p className="text-[28px] w-[477px]">
          Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»
        </p>
        <Button color="primary" className="text-[28px] px-[134px] h-[80px]">
          Оформить
        </Button>
      </div>
      <div className="absolute w-[100px] h-[100px] bg-warning">
        <Percent />
      </div>
    </div>
  );
};

export default Banner;

// bg-[url('/images/banner-promo.png')]
