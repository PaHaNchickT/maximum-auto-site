import { Button, Image, Skeleton } from '@nextui-org/react';
import { useRouter } from 'next/navigation';
import { type ReactElement } from 'react';

import { TEXT_CONTENT } from '@/constants/const-text-content';
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
          <div key={carIndex} className="w-[266px] h-[306px] flex flex-col justify-between md:w-[440px] md:h-[556px]">
            <div className="flex flex-col gap-3 md:gap-1">
              <div className="flex flex-col gap-[12px] md:gap-[18px]">
                <div className="relative w-[266px] h-[180px] md:w-[440px] md:h-[292px]">
                  <Image
                    src={car.photos.imgs[0].url}
                    alt={car.car_id}
                    width={windowWidth >= 768 ? 440 : 266}
                    height={windowWidth >= 768 ? 292 : 180}
                    radius="none"
                    className="absolute translate-1/2 object-cover z-[1]"
                  />
                  <Skeleton className="absolute w-full h-full" />
                </div>

                <p className="block flex flex-row font-black text-base gap-5 md:text-[32px] md:flex-col md:hidden">
                  {`${car.brandName} ${car.modelName} ${car.Complectation}`}
                </p>
                <div className="hidden flex flex-col font-black text-[32px] gap-5 md:block">
                  <p>{`${car.brandName} ${car.modelName}`}</p>
                  <p>{car.Complectation}</p>
                </div>
              </div>
              <p className="text-[14px] text-[#9AA7AD] md:text-[28px]">
                {car.modificationName.split('л. ').join('/ ').split('с. ').join('с. / ')}
              </p>
            </div>
            <Button
              className="bg-[#CA0100] text-[14px] text-white h-[38px] md:h-[80px] md:text-[28px]"
              radius="sm"
              onPress={() => clickHandler(`${car.brandName}-${car.car_id}`)}
            >
              {TEXT_CONTENT.mainPage.moreBtn}
            </Button>
          </div>
        ))
      ) : (
        <div className="w-full flex justify-center items-center min-h-[400px] 2xl:min-h-0">
          <div>
            <p className="text-center text-[20px] md:text-[28px]">{TEXT_CONTENT.mainPage.notFoundTitle}</p>
            <p className="text-center text-base md:text-[24px]">{TEXT_CONTENT.mainPage.notFoundSubTitle}</p>
          </div>
        </div>
      )}
    </>
  );
};

export default ViewSection;
