import { type ReactElement } from 'react';

import { Defence } from '@/icons/Defence';
import type { TItem } from '@/types/types';

import Slider from '../Slider/Slider';

const ItemInfoComp = (props: { data: TItem }): ReactElement => {
  const formatter = new Intl.NumberFormat('ru', { useGrouping: true });
  const infoOpts = [
    {
      textContent: `${props.data.modelYear} год выпуска`,
    },
    {
      textContent: props.data.modificationName.split('л. ').join('/ ').split('с. ').join('с. / '),
    },
    {
      textContent: `КП - ${props.data.transmissionRu}`,
    },
  ];

  return (
    <div className="pl-[219px] pr-[165px]">
      <div className="pt-[80px] pb-[40px] flex flex-col gap-5">
        <h2 className="text-[40px]">{`${props.data.brandName} ${props.data.modelName} ${props.data.modelYear} года`}</h2>
        <p className="text-base text-[#9AA7AD]">{`VIN ${props.data.vin}`}</p>
      </div>
      <div className="flex justify-between">
        <div className="w-[626px] flex flex-col gap-[60px]">
          <div className="flex flex-col gap-5">
            <p className="text-[32px] text-[#CA0100] bg-[#F4F7F8] rounded-xl px-10 py-5">{`${formatter.format(props.data.price)} ₽`}</p>
            <p className="text-[28px] bg-[#F4F7F8] rounded-xl px-10 py-5 flex items-center gap-5">
              <Defence />
              Гарантия юр. чистоты
            </p>
          </div>
          <div className="flex flex-col gap-[30px]">
            <h2 className="text-[40px]">Характеристики</h2>
            <div className="text-[28px] bg-[#F4F7F8] rounded-xl py-[60px] pl-[60px] flex flex-col gap-5">
              {infoOpts.map((item, index) => (
                <div key={index} className="flex gap-10 items-center">
                  <div className="w-[90px] h-[90px] bg-[#010C13] rounded-lg"></div>
                  <p>{item.textContent}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <Slider imgs={props.data.photos.imgs} />
      </div>
    </div>
  );
};

export default ItemInfoComp;
