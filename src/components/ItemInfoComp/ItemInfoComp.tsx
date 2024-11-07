import { Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import { useResize } from '@/hooks/useResize';
import { Defence } from '@/icons/Defence';
import type { TItem } from '@/types/types';

import Carousel from '../Carousel/Carousel';

const ItemInfoComp = (props: { data: TItem }): ReactElement => {
  const windowWidth = useResize();
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
    <div className="px-[20px] 2xl:pl-[216px] lg:px-[116px] 2xl:pr-[168px]">
      <div className="py-[30px] flex flex-col gap-2 md:gap-5 md:pt-[74px] md:pb-[79px]">
        <h2 className="text-[20px] font-black tracking-[0.035em] md:text-[40px]">{`${props.data.brandName} ${props.data.modelName} ${props.data.modelYear} года`}</h2>
        <p className="text-[8px] text-[#9AA7AD] md:text-base">{`VIN ${props.data.vin}`}</p>
      </div>
      <div className="flex flex-col justify-between items-center gap-5 flex-wrap md:gap-10 3xl:items-stretch 3xl:gap-0 3xl:flex-row">
        <div className="w-full flex flex-col gap-[30px] md:gap-[55px] 3xl:w-[620px]">
          <div className="flex flex-row flex-wrap gap-5 tracking-[0.035em] 3xl:flex-col">
            <p className="w-full flex items-center text-base text-[#CA0100] bg-[#F4F7F8] rounded-xl px-10 h-[82px] font-black md:text-[32px]">{`${formatter.format(props.data.price)} ₽`}</p>
            <p className="w-full text-base bg-[#F4F7F8] rounded-xl pl-[44px] pr-[44px] h-[82px] flex items-center gap-[25px] md:text-[28px] 3xl:pr-0 ">
              <Defence />
              Гарантия юр. чистоты
            </p>
          </div>
          <div className="flex flex-col gap-3 md:gap-[28px]">
            <h2 className="text-[20px] font-black tracking-[0.035em] md:text-[40px]">Характеристики</h2>
            <div className="text-[12px] bg-[#F4F7F8] rounded-xl p-5 flex flex-row justify-between flex-wrap gap-1 md:py-[59px] md:px-[58px] md:gap-5 md:text-[28px] 3xl:flex-col 3xl:pr-0">
              {infoOpts.map((item, index) => (
                <div key={index} className="flex gap-5 items-center md:gap-10">
                  <div className="w-[60px] h-[60px] bg-[#010C13] rounded-lg flex justify-center items-center md:w-[90px] md:h-[90px]">
                    <Image
                      alt={item.alt}
                      src={item.src}
                      width={windowWidth >= 768 ? 70 : 40}
                      height={windowWidth >= 768 ? 70 : 40}
                      className="invert"
                    />
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
