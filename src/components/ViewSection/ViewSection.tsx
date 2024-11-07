import { Button, Image, Skeleton } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { type ReactElement } from 'react';

import { useResize } from '@/hooks/useResize';
import type { TItem } from '@/types/types';

const ViewSection = (props: { data: TItem[] }): ReactElement => {
  const windowWidth = useResize();
  const router = useRouter();

  const clickHandler = (id: string): void => {
    router.push(`/${id}`);
  };

  return (
    <>
      {props.data.length ? (
        props.data.map((car, carIndex) => (
          <div key={carIndex} className="w-[280px] h-[310px] flex flex-col justify-between md:w-[440px] md:h-[556px]">
            <div className="flex flex-col">
              <div className="flex flex-col gap-[15px]">
                <div className="relative w-[280px] h-[180px] md:w-[440px] md:h-[292px]">
                  <Image
                    src={car.photos.imgs[0].url}
                    alt={car.car_id}
                    width={windowWidth === 'md' ? 440 : 280}
                    height={windowWidth === 'md' ? 292 : 180}
                    radius="none"
                    className="absolute translate-1/2 object-cover z-[1]"
                  />
                  <Skeleton className="absolute w-full h-full" />
                </div>

                <div className="flex font-black text-base md:text-[32px] md:block">
                  <p>{`${car.brandName} ${car.modelName}`}</p>
                  <p>{car.Complectation}</p>
                </div>
              </div>
              <p className="text-[14px] text-[#9AA7AD] md:text-[28px]">
                {car.modificationName.split('л. ').join('/ ').split('с. ').join('с. / ')}
              </p>
            </div>
            <Button
              className="bg-[#CA0100] text-[14px] text-white h-[40px] md:h-[80px] md:text-[28px]"
              radius="sm"
              onPress={() => clickHandler(`${car.brandName}-${car.car_id}`)}
            >
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
