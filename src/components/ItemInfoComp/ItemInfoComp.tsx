import { Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { Defence } from '@/icons/Defence';
import type { TItem } from '@/types/types';

import Carousel from '../Carousel/Carousel';

const ItemInfoComp = (props: { data: TItem }): ReactElement => {
  const formatter = new Intl.NumberFormat('ru', { useGrouping: true });
  const infoOpts = [
    {
      textContent: `${props.data.modelYear} год выпуска`,
      src: 'images/conf-icon.png',
      alt: 'conf-icon',
    },
    {
      textContent: props.data.modificationName.split('л. ').join('/ ').split('с. ').join('с. / '),
      src: 'images/engine-icon.png',
      alt: 'engine-icon',
    },
    {
      textContent: `КП - ${props.data.transmissionRu}`,
      src: 'images/gear-icon.png',
      alt: 'gear-icon',
    },
  ];

  return (
    <div className="pl-[216px] pr-[168px]">
      <div className="pt-[74px] pb-[79px] flex flex-col gap-5">
        <h2 className="text-[40px] font-black tracking-[0.035em]">{`${props.data.brandName} ${props.data.modelName} ${props.data.modelYear} года`}</h2>
        <p className="text-base text-[#9AA7AD]">{`VIN ${props.data.vin}`}</p>
      </div>
      <div className="flex justify-between flex-wrap">
        <div className="w-[620px] flex flex-col gap-[55px]">
          <div className="flex flex-col gap-5 tracking-[0.035em]">
            <p className="text-[32px] text-[#CA0100] bg-[#F4F7F8] rounded-xl px-10 py-[16px] font-black">{`${formatter.format(props.data.price)} ₽`}</p>
            <p className="text-[28px] bg-[#F4F7F8] rounded-xl pl-[44px] py-5 flex items-center gap-[25px]">
              <Defence />
              Гарантия юр. чистоты
            </p>
          </div>
          <div className="flex flex-col gap-[28px]">
            <h2 className="text-[40px] font-black tracking-[0.035em]">Характеристики</h2>
            <div className="text-[28px] bg-[#F4F7F8] rounded-xl py-[59px] pl-[58px] flex flex-col gap-5">
              {infoOpts.map((item, index) => (
                <div key={index} className="flex gap-10 items-center">
                  <div className="w-[90px] h-[90px] bg-[#010C13] rounded-lg flex justify-center items-center">
                    <Image alt={item.alt} src={item.src} width={70} height={70} className="invert" />
                  </div>
                  <p className="tracking-[0.015em]">{item.textContent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Carousel imgs={props.data.photos.imgs} />
      </div>
    </div>
  );
};

export default ItemInfoComp;
