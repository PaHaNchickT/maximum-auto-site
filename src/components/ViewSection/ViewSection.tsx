import { Button, Image } from '@nextui-org/react';
import { type ReactElement } from 'react';

import type { TItem } from '@/types/types';

const ViewSection = (props: { data: TItem[] }): ReactElement => {
  return (
    <>
      {props.data.length ? (
        props.data.map((car, carIndex) => (
          <div key={carIndex} className="w-[440px] h-[561px] flex flex-col justify-between">
            <div className="flex flex-col">
              <div className="flex flex-col gap-5">
                <Image src={car.photos.imgs[0].url} alt={car.car_id} width={440} height={292} radius="none" />
                <div className="text-[32px]">
                  <p>{`${car.brandName} ${car.modelName}`}</p>
                  <p>{car.Complectation}</p>
                </div>
              </div>
              <p className="text-[28px] text-[#9AA7AD]">
                {car.modificationName.split('л. ').join('/ ').split('с. ').join('с. / ')}
              </p>
            </div>
            <Button id={car.car_id} className="bg-[#CA0100] text-[28px] text-white h-[80px]" radius="sm">
              Подробнее
            </Button>
          </div>
        ))
      ) : (
        <div className="w-full flex justify-center items-center">
          <div>
            <p className="text-center text-[28px]">По вашему запросу ничего не найдено!</p>
            <p className="text-center text-[24px]">Попробуйте изменить параметры фильтров</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewSection;
