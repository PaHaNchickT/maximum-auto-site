import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { Percent } from '@/icons/Percent';

const Banner = (props: { brandName: string }): ReactElement => {
  return (
    <div className="relative h-[836px] bg-gradient-to-r from-[#00A8CD] to-[#047DBF] pb-[64px] pt-[148px] pl-[216px] text-white">
      <div className="relative flex flex-col gap-[55px] items-start z-[4]">
        <p className="font-black text-[40px] tracking-[0.037em]">{`Кредит на новый ${props.brandName}`}</p>
        <p className="text-[28px] w-[477px] tracking-[0.01em] leading-snug">
          Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»
        </p>
        <Button color="primary" className="text-[28px] px-[134px] h-[80px] tracking-[0.037em]">
          Оформить
        </Button>
      </div>
      <div className="absolute top-[110px] right-[240px] z-[0]">
        <Percent />
      </div>
      <div className="absolute top-[220px] left-[455px] w-[1300px] h-[593px] bg-[url('/images/banner-promo.png')] bg-cover scale-x-[-1] z-[1]"></div>
      <div className="absolute top-[110px] right-[240px] z-[2]">
        <Percent clipPath="url(#cut-off-bottom)" />
      </div>
    </div>
  );
};

export default Banner;

// bg-[url('/images/banner-promo.png')]
