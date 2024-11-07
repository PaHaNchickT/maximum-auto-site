import { Button } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { Percent } from '@/icons/Percent';

const Banner = (props: { brandName: string }): ReactElement => {
  return (
    <div className="relative h-auto bg-gradient-to-r from-[#00A8CD] to-[#047DBF] p-5 text-white md:h-[686px] md:pb-[64px] md:pt-[148px] md:px-[116px] 2xl:pr-0 2xl:h-[836px] 2xl:pl-[216px]">
      <div className="relative flex flex-col gap-5 items-start z-[4] md:gap-[55px]">
        <p className="font-black text-[20px] tracking-[0.037em] md:text-[40px]">{`Кредит на новый ${props.brandName}`}</p>
        <p className="text-[14px] w-full tracking-[0.01em] leading-snug md:w-[477px] md:text-[28px]">
          Оформите кредит на любой автомобиль ассортимента дилерского центра «Максимум»
        </p>
        <Button color="primary" className="text-[14px] px-[93px] h-[40px] tracking-[0.037em] md:h-[80px] md:px-[134px] md:text-[28px]">
          Оформить
        </Button>
      </div>
      <div className="absolute top-[110px] right-[240px] z-[0] hidden 3xl:block">
        <Percent />
      </div>
      <div className="absolute top-[220px] left-[455px] w-[1300px] h-[593px] bg-[url('/images/banner-promo.png')] bg-cover scale-x-[-1] z-[1] hidden 3xl:block"></div>
      <div className="absolute top-[110px] right-[240px] z-[2] hidden 3xl:block">
        <Percent clipPath="url(#cut-off-bottom)" />
      </div>
    </div>
  );
};

export default Banner;

// bg-[url('/images/banner-promo.png')]
